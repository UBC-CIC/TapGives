import * as cdk from '@aws-cdk/core';
import * as AmplifyHelpers from '@aws-amplify/cli-extensibility-helper';
import { AmplifyDependentResourcesAttributes } from '../../types/amplify-dependent-resources-ref';
import * as iam from '@aws-cdk/aws-iam';
import * as glue from '@aws-cdk/aws-glue';
import * as s3 from '@aws-cdk/aws-s3';
import * as kinesisFirehose from '@aws-cdk/aws-kinesisfirehose'

export class cdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps, amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps) {
    super(scope, id, props);
    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, 'env', {
      type: 'String',
      description: 'Current Amplify CLI env name',
    });
    const firehoseRole = new iam.Role(this, 'DeliveryStreamRole', {
      assumedBy: new iam.ServicePrincipal('firehose.amazonaws.com'),
    });

    firehoseRole.addToPolicy(new iam.PolicyStatement({
      resources: ['*'],
      actions: ['glue:Start*', 'glue:Stop*', 'glue:Create*', 'glue:Get*', 'glue:List*', 'glue:Search*']
    }));

    firehoseRole.addToPolicy(new iam.PolicyStatement({
      resources: ['*'],
      actions: ['s3:AbortMultipartUpload', 's3:GetBucketLocation', 's3:GetObject', 's3:ListBucket', 's3:ListBucketMultipartUploads', 's3:PutObject']
    }));

    const s3Bucket = new s3.CfnBucket(this, "tapgivesbucket", {
      bucketName: "tapgivesbucket"
    })
    const twDatabase = new glue.CfnDatabase(this, 'tapgivescdkathenadatabase', {
      catalogId: this.account,
      databaseInput: {
        name: 'tapgivescdkathenadatabase'
      }
    });


    const twJsonTable = new glue.CfnTable(this, 'json_records', {
      catalogId: this.account,
      databaseName: twDatabase.ref,
      tableInput: {
        name: 'json_records',
        storageDescriptor: {
          columns: [
            {
              name: "userphonenumber",
              type: "string"
            },
            {
              name: "fullname",
              type: "string"
            },
            {
              name: "sitename",
              type: "string"
            },
            {
              name: "action",
              type: "string"
            },
            {
              name: "collectedcount",
              type: "string"
            },
            {
              name: "collecteditemtype",
              type: "string"
            },
            {
              name: "governmentid",
              type: "string"
            }
          ],
          compressed: false,
          location: "s3://" + s3Bucket.bucketName + "/data/json-records/",
          inputFormat: "org.apache.hadoop.mapred.TextInputFormat",
          outputFormat: "org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat",
          numberOfBuckets: 0,
          serdeInfo: {
            serializationLibrary: "org.openx.data.jsonserde.JsonSerDe"
          },
        }
      }})

    const twParquetTable = new glue.CfnTable(this, 'parquet_records', {
      catalogId: this.account,
      databaseName: twDatabase.ref,
      tableInput: {
        name: 'parquet_records',
        partitionKeys: [
            {
          name: 'partition_0',
          comment: 'site nickname',
          type: 'string',
        },{
          name: 'partition_1',
          comment: 'year',
          type: 'string',
        },{
          name: 'partition_2',
          comment: 'month',
          type: 'string',
        },{
          name: 'partition_3',
          comment: 'day',
          type: 'string',
        },{
          name: 'partition_4',
          comment: 'hour',
          type: 'string',
        }],
        storageDescriptor: {
          columns: [
            {
              name: "userphonenumber",
              type: "string"
            },
            {
              name: "fullname",
              type: "string"
            },
            {
              name: "sitename",
              type: "string"
            },
            {
              name: "action",
              type: "string"
            },
            {
              name: "collectedcount",
              type: "string"
            },
            {
              name: "collecteditemtype",
              type: "string"
            },
            {
              name: "governmentid",
              type: "string"
            }
          ],

          compressed: false,
          location: "s3://" + s3Bucket.bucketName + '/customertransactions/',
          inputFormat: "org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat",
          outputFormat: "org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat",
          numberOfBuckets: 0,
          serdeInfo: {
            serializationLibrary: "org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe"
          },
        }
      }})

    const kinesis = new kinesisFirehose.CfnDeliveryStream(this, 'twFirehose', {
      deliveryStreamName: "tapgives-customertransactions",
      extendedS3DestinationConfiguration: {
        bucketArn: s3Bucket.attrArn,
        prefix: 'customertransactions/!{partitionKeyFromQuery:siteName}/!{timestamp:yyyy/MM/dd/HH}/',
        errorOutputPrefix: 'FirehoseFailures/!{firehose:error-output-type}/!{firehose:random-string}/',
        roleArn: firehoseRole.roleArn,
        dynamicPartitioningConfiguration: {
          enabled: true
        },
        processingConfiguration: {
          enabled: true,
          processors: [{
            type: 'MetadataExtraction',
            parameters: [
              {
                parameterName: "MetadataExtractionQuery",
                parameterValue: "{siteName:.siteName}"
              },
              {
                parameterName: "JsonParsingEngine",
                parameterValue: "JQ-1.6"
              }
            ]
          }],
        },
        dataFormatConversionConfiguration: {
          enabled: true,
          inputFormatConfiguration: {
            deserializer: {
              openXJsonSerDe: {}
            }
          },
          outputFormatConfiguration: {
            serializer: {
              parquetSerDe: {}
            }
          },
          schemaConfiguration: {
            roleArn: firehoseRole.roleArn,
            databaseName: twDatabase.ref,
            tableName: twJsonTable.ref
          }
        }
      },
    })
    const crawlerRole = new iam.Role(this, 'GlueCrawlerRole', {
      assumedBy: new iam.ServicePrincipal('glue.amazonaws.com'),
      managedPolicies: [iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSGlueServiceRole"),
      iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonS3FullAccess")]
    })

    const glueCrawler = new glue.CfnCrawler(this, 'tapgivesgluecrawler', {
      name: "tapgivesgluecrawler",
      databaseName: twDatabase.ref,
      role: crawlerRole.roleArn,
      targets: {
        s3Targets: [{
          path: "s3://" + s3Bucket.bucketName + "/customertransactions/"
        }]
      },
      schedule: {
        scheduleExpression: "cron(0 0 * * ? *)",
      },
      description: "Rescans athena table"
    })
    kinesis.node.addDependency(firehoseRole);

    // Create a new SSM Parameter for firehose
  }
}
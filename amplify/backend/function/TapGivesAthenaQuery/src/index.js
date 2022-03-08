const AWS = require('aws-sdk');

const region = process.env.REGION
const catalog = process.env.CATALOG
const database = process.env.DATABASE
const output = process.env.OUTPUT
// Set the region
AWS.config.update({region: region});
const athena = new AWS.Athena();
const s3 = new AWS.S3({apiVersion: '2006-03-01'});


function getBucketPath(s3Raw) {
    // input in form s3://[bucketName]/path
    // extract bucketName and path
    s3Raw = s3Raw.substring(5)
    const bucketName = s3Raw.split("/")[0]
    const path = s3Raw.substring(s3Raw.indexOf("/")+1)
    return([bucketName, path])
}
function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

exports.handler = async (event) => {
    // TODO implement
    var params = {
        QueryString: 'select * from customertransactions', /* required */
        QueryExecutionContext: {
            Catalog: catalog,
            Database: database,
        },
        ResultConfiguration: {
            // AclConfiguration: {
            //   S3AclOption: "BUCKET_OWNER_FULL_CONTROL" /* required */
            // },
            EncryptionConfiguration: {
                EncryptionOption: "SSE_S3", /* required */
            },
            OutputLocation: output
        },
    };
    const values = await athena.startQueryExecution(params).promise()
    const queryDetails = await athena.getQueryExecution(values).promise()
    const s3location = queryDetails.QueryExecution.ResultConfiguration.OutputLocation
    const [bucketName, path] = getBucketPath(s3location)
    params = {
        Bucket: bucketName,
        Key: path,
    }
    let vals;
    // Even when awaiting for athena to finish, you must wait a bit longer due to S3 put not being instant
    // Sometimes it takes longer than a second for s3 to upload the item, we'll give up to 3 retries then
    for (let retries = 0; retries < 3; retries++) {
        try {
            await delay(1000)
            vals = await s3.getObject(params).promise()
            break
        } catch (e) {
            console.log("Error on s3 retrieval")
        }
        throw new Error("Failed 3 times")
    }

    // .Body.toString('utf-8')
    // return params
    const response = {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  },
        body: vals.Body.toString('utf-8'),

    };
    return response;
};

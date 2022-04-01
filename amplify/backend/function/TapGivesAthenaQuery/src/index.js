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
    let {userPhoneNumber, siteName, year, month, day, hour} = event.arguments
    if (userPhoneNumber == null) {
        // Making sure all inputs are 2 "digits" long
        if (month < 10)
            month = "0"+month
        if (day < 10 && day >= 0)
            day = "0"+day
        if (hour < 10)
            hour = "0"+hour
        var params = {
            QueryString: "select partition_4, count(*) from customertransactions where action = 'visit' and partition_0 = '"
                + siteName + "' and partition_1 = '"
                + year + "' and partition_2 = '"
                + month + ((parseInt(day) >= 0 )?"' and partition_3 = '"+ day:"")+
                "' group by partition_4",
            QueryExecutionContext: {
                Catalog: catalog,
                Database: database,
            },
            ResultConfiguration: {
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
        let vals = null;
        // Even when awaiting for athena to finish, you must wait a bit longer due to S3 put not being instant
        // Sometimes it takes longer than a second for s3 to upload the item, we'll give up to 5 retries then
        for (let retries = 0; retries < 5; retries++) {
            try {
                await delay(3000)
                vals = await s3.getObject(params).promise()
                break
            } catch (e) {
                console.log("Error on s3 retrieval", e)
            }
        }
        if (vals == null)
            throw new Error("Failed 5 times")

        return  vals.Body.toString('utf-8')
    } else {
        var params = {
            QueryString: "select * from customertransactions where userphonenumber = '"
                + userPhoneNumber + "'",
            QueryExecutionContext: {
                Catalog: catalog,
                Database: database,
            },
            ResultConfiguration: {
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
        let vals = null;
        // Even when awaiting for athena to finish, you must wait a bit longer due to S3 put not being instant
        // Sometimes it takes longer than a second for s3 to upload the item, we'll give up to 5 retries then
        for (let retries = 0; retries < 5; retries++) {
            try {
                await delay(3000)
                vals = await s3.getObject(params).promise()
                break
            } catch (e) {
                console.log("Error on s3 retrieval", e)
            }
        }
        if (vals == null)
            throw new Error("Failed 5 times")

        return  vals.Body.toString('utf-8')
    }

};

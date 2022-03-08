/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_HISTORY_BUCKETNAME
Amplify Params - DO NOT EDIT */
const bucket = process.env.STORAGE_HISTORY_BUCKETNAME
const region = process.env.REGION
// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: region});
let s3 = new AWS.S3({apiVersion: '2006-03-01'});
let firehose = new AWS.Firehose();
// Choose what data to store
const modelParams = {
  CustomerTransactions: ["userPhoneNumber", "fullName", "siteName", "action", "collectedJerryCans", "timeStamp"],
  Site: ["expectedJerrycans", "status", "name"],
  Customer: ["validSubscription", "governmentID", "firstName", "lastName", "phoneNumber"],
}
exports.handler = async event => {
  console.log(JSON.stringify(event, null, 2));
  let promiseList = []
  for (const record in event.Records) {
    if (event.Records[record].dynamodb.hasOwnProperty("newImage")) {
      let newImage = event.Records[record].dynamodb.NewImage
      if (newImage.__typename.S in modelParams) {
        const type = newImage.__typename.S.toLowerCase() // get model type
        // Clean the model of unneeded values
        const model = modelParams[newImage.__typename.S].reduce((prev, currParam)=> (
            Object.assign(prev, {[currParam]: newImage[currParam][Object.keys(newImage[currParam])[0]]})
        ), {})
        var buf = Buffer.from(JSON.stringify(model));
        let key  ='data/json-records/'+type+'/'+event.Records[record].eventID+'.json'
        // console.log(bucket+key+buf)
        let params = {
          Bucket: bucket,
          Key: key,
          Body: buf,
          ContentEncoding: 'base64',
          ContentType: 'application/json',
        };
        // console.log(params)
        let s3Promise = s3.putObject(params, function (err, data) {
          if (err) {
            console.log(err);
            console.log('Error uploading data: ', data);
          } else {
            console.log('succesfully uploaded');
          }
        }).promise();
        params = {
          DeliveryStreamName: "tapgives-dynamic-"+type, /* required */
          Record: { /* required */
            Data: JSON.stringify(model)/* Strings will be Base-64 encoded on your behalf */ /* required */
          }
        }
        const firehosePromise = firehose.putRecord(params, function(err, data) {
          if (err) console.log(err, err.stack); // an error occurred
          else     console.log(data);           // successful response
        }).promise()
        promiseList.push(firehosePromise)
        promiseList.push(s3Promise)

        // return s3Promise
      } else {
        // return Promise.resolve('Type Error: ' + newImage.__typename.S + " not supported");
        console.log('Type Error: ' + newImage.__typename.S + " not supported")
      }
    }

    // return Promise.resolve("Sucessfully processed " + event.Records.length + " events")
  }
  // return Promise.all(promiseList)
  return Promise.resolve("Sucessfully processed " + event.Records.length + " events")
};

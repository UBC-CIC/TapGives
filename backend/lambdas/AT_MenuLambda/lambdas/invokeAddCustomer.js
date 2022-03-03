const AWS = require('aws-sdk');
AWS.config.region = 'us-east-2';
const lambda = new AWS.Lambda();

async function invokeAddCustomer(customerInfo) {
    const lambdaPayload = JSON.stringify({
        customerInfo: customerInfo
    });
    const params = {
        FunctionName: 'AddCustomer',
        InvocationType: 'RequestResponse',
        LogType: 'Tail',
        Payload: lambdaPayload
    };
    
    try {
        let res = await lambda.invoke(params).promise();
        return res.Payload;
    } catch (err) {
        console.log(err);
        console.log("Error adding customer.");
    }
}

module.exports = invokeAddCustomer;
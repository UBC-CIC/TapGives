const AWS = require('aws-sdk');
AWS.config.region = 'us-east-2'; // CHANGE TO US-EAST-1 VIRGINIA FOR PRODUCTION
const lambda = new AWS.Lambda();

async function invokeGetCustomer(phoneNumber) {
    let globalUser = undefined;
    
    const lambdaPayload = JSON.stringify({
        phoneNumber: phoneNumber
    });
    const params = {
        FunctionName: 'GetCustomer', // the lambda function we are going to invoke
        InvocationType: 'RequestResponse',
        LogType: 'Tail',
        Payload: lambdaPayload
    };
    
    try {
        let res = await lambda.invoke(params).promise();
        let user = JSON.parse(res.Payload);
        if (user !== null && user !== undefined)
            globalUser = user;
            
        return globalUser;
    } catch (err) {
        console.log(err);
        console.log("Error getting customer.");
    }
}

module.exports = invokeGetCustomer; 
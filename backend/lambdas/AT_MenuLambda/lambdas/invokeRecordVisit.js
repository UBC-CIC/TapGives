const AWS = require('aws-sdk');
AWS.config.region = 'us-east-2';
const lambda = new AWS.Lambda();

async function invokeRecordVisit(user) {
    let time = getTimeStamp();
    let visitInfo = {
        userID: user.idNumber,
        siteID: user.siteID, 
        timeStamp: time
    };
    const lambdaPayload = JSON.stringify({
        visitInfo: visitInfo
    });
    const params = {
        FunctionName: 'AT_RecordVisit',
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

module.exports = invokeRecordVisit;

// HELPERS //

// fix - dates a little off
function getTimeStamp() {
    let date = new Date();
    
    let timeStamp = date.getFullYear().toString() + pad2(date.getMonth() + 1) + 
    pad2( date.getDate()) + pad2( date.getHours() ) + pad2( date.getMinutes() ) + 
    pad2( date.getSeconds() );
    
    return String(timeStamp);
}

function pad2(n) { 
    return n < 10 ? '0' + n : n;
}
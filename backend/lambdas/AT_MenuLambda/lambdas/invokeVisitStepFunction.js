const aws = require('aws-sdk');

async function invokeVisitStepFunction(userID, siteID, phoneNumber) {
  const stepfunctions = new aws.StepFunctions();
  
  const params = {
    stateMachineArn: 'arn:aws:states:us-east-2:204389854253:stateMachine:AsyncRecordVisitStateMachine',
    input: JSON.stringify({
        userID: userID,
        siteID: siteID,
        customerPhoneNumber: phoneNumber,
        timeStamp: new Date().toISOString().substring(0,10)
    })
  };
  
  let res = await stepfunctions.startExecution(params).promise();
  
  console.log(res);
  
  return;
}

module.exports = invokeVisitStepFunction;
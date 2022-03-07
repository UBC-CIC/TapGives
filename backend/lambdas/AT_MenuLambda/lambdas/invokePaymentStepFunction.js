const aws = require('aws-sdk');

async function invokePaymentStepFunction(userID, phoneNumber, subscriptionAmount) {
  const stepfunctions = new aws.StepFunctions();
  
  const params = {
    stateMachineArn: 'arn:aws:states:us-east-2:204389854253:stateMachine:AsyncPaymentProcessorStateMachine',
    input: JSON.stringify({
        userID: userID,
        phoneNumber: phoneNumber,
        subscriptionAmount: subscriptionAmount
    })
  };
  
  let res = await stepfunctions.startExecution(params).promise();
  
  console.log(res);
  
  return;
}

module.exports = invokePaymentStepFunction;
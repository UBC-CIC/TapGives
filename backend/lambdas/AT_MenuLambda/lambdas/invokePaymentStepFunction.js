const aws = require('aws-sdk');

async function invokePaymentStepFunction(userID, phoneNumber, subscriptionAmount) {
  const stepfunctions = new aws.StepFunctions();
  
  const params = {
    stateMachineArn: 'arn:aws:states:us-east-2:204389854253:stateMachine:AsyncPaymentProcessorStateMachine',
    input: JSON.stringify({
        userID: userID,
        phoneNumber: phoneNumber,
        subscriptionAmount: subscriptionAmount
    }),
    name: 'STRING_VALUE',
    traceHeader: 'STRING_VALUE'
  };
  
  stepfunctions.startExecution(params, function(err, data) {
    if (err) console.log("ERROR: \n " + err); // an error occurred
    else     console.log("DATA: \n " + data); // successful response
  });
  
  return;
}

module.exports = invokePaymentStepFunction;
const AWS = require('aws-sdk');
const pinpoint = new AWS.Pinpoint({region: process.env.region}); 
const projectId = process.env.projectId;
const originationNumber = process.env.originationNumber;
const message = "Dear customer," + 
"\nan error has occured in processing your payment " + 
"for the TapGives project. Please try again.";
const messageType = "TRANSACTIONAL";

let canadaNumber = "+17789172723"
exports.handler = async (event) => {
    console.log('Received event:', event);
    await sendConfirmation(canadaNumber);
    
    let response = {
        userID: event.userID,
        amount: event.amount,
        isSuccess: false,
        timeStamp: event.timeStamp
    };
    return response;
};

async function sendConfirmation(destinationNumber) {
  const params = {
    ApplicationId: projectId,
    MessageRequest: {
      Addresses: {
        [destinationNumber]: {
          ChannelType: 'SMS'
        }
      },
      MessageConfiguration: {
        SMSMessage: {
          Body: message,
          MessageType: messageType,
          OriginationNumber: originationNumber
        }
      }
    }
  };

  let results = await pinpoint.sendMessages(params).promise();
  console.log(results)
  if(results.err) {
    console.log(results.err.message);
  } else {
    console.log("Message sent! " 
        + results['MessageResponse']['Result'][destinationNumber]['StatusMessage']);
  }
}
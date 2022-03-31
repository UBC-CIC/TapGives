const crypto = require('crypto')
const AWS = require('aws-sdk');
const pinpoint = new AWS.Pinpoint({region: process.env.region}); 
const projectId = process.env.projectId;
const originationNumber = process.env.originationNumber;
const messageType = "TRANSACTIONAL";

let canadaNumber = "+17789172723";

exports.handler = async (event) => {
    console.log('Received event:', event);
    
    // pass these instead of canadaNumber
    // let customerPhoneNumber = event.customerPhoneNumber;
    // let siteManagerPhoneNumber = event.siteManagerPhoneNumber;
    
    let verificationCode = getVerificationCode();
    
    let customerMessage = getCustomerMessage(verificationCode);
    let siteManagerMessage = getSiteManagerMessage(verificationCode);
    
    await sendMessage(canadaNumber, customerMessage);
    await sendMessage(canadaNumber, siteManagerMessage);

    let response = {
        userID: event.userID,
        siteID: event.siteID,
        timeStamp: event.timeStamp
    };

    return response;
};

async function sendMessage(destinationNumber, givenMessage) {
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
          Body: givenMessage,
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

function getCustomerMessage(verificationCode) {
    return "Dear customer," + 
        "\nplease proceed to collect water. Your verification " + 
        "code is: " + String(verificationCode) + ".";
}

function getSiteManagerMessage(verificationCode) {
    return "Dear site manager," + 
        "\na customer with verification code " + 
        String(verificationCode) + " will be collecting water. Thank you.";
}

function getVerificationCode() {
    let code = crypto.randomBytes(6).toString('base64');
    console.log("VERIFICATION CODE: " + code);
    return code;
}
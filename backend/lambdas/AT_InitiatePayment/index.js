const unirest = require('unirest');

/* variables */
const passKey = process.env.PASS_KEY;
const businessShortCode = process.env.BUSINESS_SHORTCODE;
const acctRef = "TapGives";

let timeStamp, password;
let userID, phoneNo, subscriptionAmount;

// phoneNo from daraja = 254708374149

exports.handler = async (event) => {
    // need to pass user, phoneNo, and subscriptionAmt in event
    // may need to parse input
    
    userID = event.userID; 
    phoneNo = Number(event.phoneNumber);
    subscriptionAmount = Number(event.subscriptionAmount);
    
    timeStamp = getTimeStamp();
    password  = getPassword(timeStamp);
    
    
    /* get access token */ 
    let accessTokenRes = await getAccessToken();
    if (accessTokenRes.error) {
        return {
            initiationSuccessful: false
        };
    }
    let access_token = JSON.parse(accessTokenRes.raw_body).access_token;
    
    console.log(access_token);
    
    /* initiate payment transaction */
    let initRes = await initiate(access_token);
    if (initRes.error) {
        return {
            initiationSuccessful: false
        };
    }
    
    let initResBody = JSON.parse(initRes.raw_body);
    console.log(initResBody)
    if (Number(initResBody.ResponseCode) !== 0) {
        return {
            initiationSuccessful: false
        };
    }

    let checkoutReqID = String(initResBody.CheckoutRequestID);
    
    let resObj = {
        userID: userID,
        phoneNumber: event.phoneNumber,
        subscriptionAmount: subscriptionAmount,
        accessToken: access_token,
        checkoutReqID: checkoutReqID,
        password: password,
        timeStamp: timeStamp,
        initiationSuccessful: true
    };
    
    return resObj;
};


async function getAccessToken() {
    /* define variables */
    let url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    let auth = Buffer.from(String(process.env.CLIENT_KEY) + ":" + String(process.env.CLIENT_SECRET)).toString('base64');
    
    /* get access token */
    let res = await unirest('GET', url).headers({ 'Authorization': 'Basic ' + auth }).send();
    
    return res;
}

async function initiate(access_token) {
    /* define variables */
    let url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

    let res = await unirest.post(url)
    .headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(access_token)
    })
    .send(JSON.stringify({
        "BusinessShortCode": businessShortCode,
        "Password": password,
        "Timestamp": timeStamp,
        "TransactionType": "CustomerPayBillOnline",
        "Amount": subscriptionAmount,
        "PartyA": phoneNo,
        "PartyB": businessShortCode,
        "PhoneNumber": phoneNo,
        "CallBackURL": "https://mydomain.com/path",
        "AccountReference": acctRef,
        "TransactionDesc": "Payment of Subscription" 
    }));
      
    return res;
}

function getPassword(timeStamp) {
    return Buffer.from(String(businessShortCode) + passKey + timeStamp).toString('base64');
}

// IMPROVE ASAP
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
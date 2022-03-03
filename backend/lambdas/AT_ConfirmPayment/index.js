const unirest           = require('unirest');

exports.handler = async (event) => {
    let args = {
        userID: event.userID,
        phoneNumber: event.phoneNumber,
        subscriptionAmount: event.subscriptionAmount,
        access_token: event.accessToken,
        checkoutReqID: event.checkoutReqID,
        password: event.password,
        timeStamp: event.timeStamp
    };
    
    let res = await unirest('POST', 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query') // make env variable
    .headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(args.access_token)
    })
    .send(JSON.stringify({
        "BusinessShortCode": process.env.BUSINESS_SHORTCODE,
        "Password": args.password,
        "Timestamp": args.timeStamp,
        "CheckoutRequestID": args.checkoutReqID,
    }));
    
    let transactionInfo = {
        userID: args.userID,
        phoneNumber: args.phoneNumber,
        amount: args.subscriptionAmount,
        timeStamp: args.timeStamp
    };

    if (res.error) {
        transactionInfo["isSuccess"] = false;
        transactionInfo["ResultDesc"] = 'Mpesa Error';
    } else if (Number(JSON.parse(res.raw_body).ResultCode) !== 0) {
        transactionInfo["isSuccess"] = false;
        transactionInfo["ResultDesc"] = String(JSON.parse(res.raw_body).ResultDesc);
    } else {
        transactionInfo["isSuccess"] = true;
        transactionInfo["ResultDesc"] = String(JSON.parse(res.raw_body).ResultDesc); // don't want to send to user on success tho
    }
    
    return transactionInfo;
    
    // try-catch?
};
  
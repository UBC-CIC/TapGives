const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const createTransaction = gql`
    mutation createTransaction($createtransactioninput: CreateTransactionInput!) {
      createTransaction(input: $createtransactioninput) {
        userID
        amount
        isSuccess
        timeStamp
      }
    }
`;

exports.handler = async (event) => {
    let transactionInfo = {
        userID: event.userID,
        amount: event.amount,
        isSuccess: event.isSuccess,
        timeStamp: event.timeStamp
    };
    
    try {
        console.log("adding transaction");
        await axios({
            url: process.env.API_AT_TRANSACTION_HISTORY_URL,
            method: 'post',
            headers: {
                'x-api-key': process.env.API_AT_TRANSACTION_HISTORY_APIKEY
            },
            data: {
                query: print(createTransaction),
                variables: {
                    createtransactioninput: transactionInfo
                }
            }
        });
        console.log("transaction should be added");
        const message = "successfully added transaction!";
        
        return message;
    } catch (err) {
        console.log('error posting transaction to appsync: ', err);
    } 
};

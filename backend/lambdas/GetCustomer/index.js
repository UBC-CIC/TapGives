const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const getCustomerQuery = gql`
    query getCustomer($phoneNumber: String!) {
      getCustomer(phoneNumber: $phoneNumber) {
        validSubscription
        language
        firstName
        lastName
        idNumber
        pin
        siteID
      }
    }
`;

exports.handler = async (event) => {
    console.log("received event number: " + event.phoneNumber);
    
    let givenNumber = event.phoneNumber;
    try {
        const graphqlData = await axios({
            url: process.env.API_AT_CUSTOMERS_URL,
            method: 'post',
            headers: {
                'x-api-key': process.env.API_AT_CUSTOMERS_APIKEY
            },
            data: {
                query: print(getCustomerQuery),
                variables: {
                    phoneNumber: givenNumber
                }
            }
        });
        
        const customer = graphqlData.data.data.getCustomer;
        
        return customer;
    } catch (err) {
        console.log('error getting customer from appsync: ', err);
        throw new Error(err);
    } 
};

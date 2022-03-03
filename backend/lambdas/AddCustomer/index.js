const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const createCustomer = gql`
    mutation createCustomer($createcustomerinput: CreateCustomerInput!) {
      createCustomer(input: $createcustomerinput) {
        phoneNumber
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

// edit test
exports.handler = async (event) => {
    console.log("Recived customer: " + JSON.stringify(event.customerInfo));
    
    let customerInfo = event.customerInfo;
    try {
        console.log("adding customer");
        await axios({
            url: process.env.API_AT_CUSTOMERS_URL,
            method: 'post',
            headers: {
                'x-api-key': process.env.API_AT_CUSTOMERS_APIKEY
            },
            data: {
                query: print(createCustomer),
                variables: {
                    createcustomerinput: customerInfo
                }
            }
        });
        
        let msg = "customer should be added now";
        console.log("customer should be added");
        
        return msg;
    } catch (err) {
        console.log('error adding customer to appsync: ', err);
        throw new Error(err);
    } 
};

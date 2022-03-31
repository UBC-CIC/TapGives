const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const updateCustomer = gql`
    mutation updateCustomer($updatecustomerinput: UpdateCustomerInput!) {
        updateCustomer(input: $updatecustomerinput) {
            phoneNumber
            validSubscription
        }
    }
`;

// edit test
exports.handler = async (event) => {
    let phoneNumber = event.phoneNumber;
    
    let customerUpdate = {
        phoneNumber: phoneNumber,
        validSubscription: true // changing subscription
    };
    
    try {
        console.log("updating customer");
        await axios({
            url: process.env.API_AT_CUSTOMERS_URL,
            method: 'post',
            headers: {
                'x-api-key': process.env.API_AT_CUSTOMERS_APIKEY
            },
            data: {
                query: print(updateCustomer),
                variables: {
                    updatecustomerinput: customerUpdate
                }
            }
        });
        
        console.log("customer should be updated");
        
        event['isSuccess'] = true;
        return event;
    } catch (err) {
        console.log('error updating customer: ', err);
        event['isSuccess'] = false;
        event['ResultDesc'] = 'Error subscribing customer';
        return event;
    } 
};

const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const getSiteManagerQuery = gql`
    query getSiteManager($siteID: String!) {
        getSiteManager(siteID: $siteID) {
            siteID
            phoneNumber
        }
    }
`;

exports.handler = async (event) => {
    console.log("received event siteID: " + event.siteID);
    
    let givenSiteID = event.siteID;
    try {
        const graphqlData = await axios({
            url: process.env.API_AT_SITE_MANAGERS_URL,
            method: 'post',
            headers: {
                'x-api-key': process.env.API_AT_SITE_MANAGERS_APIKEY
            },
            data: {
                query: print(getSiteManagerQuery),
                variables: {
                    siteID: givenSiteID
                }
            }
        });
        
        const siteManager = graphqlData.data.data.getSiteManager;
        
        event['siteManagerPhoneNumber'] = siteManager.phoneNumber;
        return event;
    } catch (err) {
        console.log('error getting site manager from appsync: ', err);
        throw new Error(err);
    } 
};

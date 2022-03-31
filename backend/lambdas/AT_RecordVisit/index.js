const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const createVisit = gql`
    mutation createVisit($createvisitinput: CreateVisitInput!) {
      createVisit(input: $createvisitinput) {
        userID
        siteID
        timeStamp
      }
    }
`;

exports.handler = async (event) => {
    let visitInfo = {
        userID: event.userID,
        siteID: event.siteID,
        timeStamp: event.timeStamp
    };
    console.log(visitInfo);

    try {
        console.log("adding visit");
        await axios({
            url: process.env.API_AT_VISIT_HISTORY_URL,
            method: 'post',
            headers: {
                'x-api-key': process.env.API_AT_VISIT_HISTORY_APIKEY
            },
            data: {
                query: print(createVisit),
                variables: {
                    createvisitinput: visitInfo
                }
            }
        });
        console.log("visit should be added");
        const message = "successfully added visit!";
        
        return message;
    } catch (err) {
        console.log('error posting visit to appsync: ', err);
        throw new Error(err);
    } 
};

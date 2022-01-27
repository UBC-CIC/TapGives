import {API} from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";

class AdministrationBackendHelper {
    static async getSites() {
        return (await API.graphql({query: queries.listSites})).data.listSites.items;
    }
    static async getSiteManagers() {
       return (await API.graphql({query: queries.listSiteManagers})).data.listSiteManagers.items;
    }
    static async createSubscription(subscriptionCreationData, siteID) {
        console.log(subscriptionCreationData.name+siteID)
        console.log(siteID)
        const siteSubscription = {
            id: subscriptionCreationData.name+siteID,
            siteSiteSubscriptionId: siteID,
            siteID:siteID,
            name: subscriptionCreationData.name+siteID,
            pricePerMonth: parseFloat(subscriptionCreationData.pricePerMonth),
            weeklyJerryCans: 0,
        }
        await API.graphql({
            query: mutations.createSiteSubscription,
            variables: {input: siteSubscription}
        })
    }
    static async createSiteManager(siteManagerID, siteID) {
        const siteManager = {
            id: siteManagerID,
            siteID: siteID,
            name: siteManagerID,
        }
        await API.graphql({
            query: mutations.createSiteManager,
            variables: {input: siteManager}
        })
    }
}

export default AdministrationBackendHelper
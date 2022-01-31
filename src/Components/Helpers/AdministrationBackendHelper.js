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
    static async getSiteSubscriptions() {
        return (await API.graphql({query: queries.listSiteSubscriptions})).data.listSiteSubscriptions.items;
    }
    static async getSiteSubscriptionsBySite(siteIDInput) {
        return (await API.graphql({
            query: queries.listSiteSubscriptions,
            variables: {filter: {
                siteID: {eq: siteIDInput}
                }}
        })).data.listSiteSubscriptions.items;
    }
    static async getSitesBySiteManager(siteManagerInput) {
        const siteManagerList = (await API.graphql({
            query: queries.listSiteManagers,
            variables: {filter: {
                    id: {eq: siteManagerInput}
                }}
        })).data.listSiteManagers.items;
        return siteManagerList.map((siteManager) => siteManager.siteID)
    }
    static async getCustomersBySite(siteIDInput) {
        return (await API.graphql({
            query: queries.listCustomers,
            variables: {filter: {
                    siteID: {eq: siteIDInput}
                }}
        })).data.listCustomers.items;
    }
    static async createSubscription(subscriptionCreationData, siteIDIn) {
        const siteSubscription = {
            id: subscriptionCreationData.name+siteIDIn,
            siteSiteSubscriptionId: siteIDIn,
            siteID:siteIDIn,
            name: subscriptionCreationData.name+siteIDIn,
            pricePerMonth: parseFloat(subscriptionCreationData.pricePerMonth),
            softCapVisits: parseInt(subscriptionCreationData.softCapVisits)
            // weeklyJerryCans: 0,
        }
        await API.graphql({
            query: mutations.createSiteSubscription,
            variables: {input: siteSubscription}
        })
    }
    static async createSiteManager(siteManagerID, siteIDIn) {
        const siteManager = {
            id: siteManagerID,
            siteID: siteIDIn,
            name: siteManagerID,
        }
        await API.graphql({
            query: mutations.createSiteManager,
            variables: {input: siteManager}
        })
    }

    static async createCustomer(customerID, subscriptionIDIn, siteIDIn, pinIn, phoneNumberIn) {
        const customer = {
            siteID: siteIDIn,
            siteSubscriptionID: subscriptionIDIn,
            validSubscription: true,
            pin: pinIn,
            phoneNumber: phoneNumberIn,
            name: customerID,
        }
        await API.graphql({
            query: mutations.createCustomer,
            variables: {input: customer}
        })
    }
    static async createSite(siteCreationData) {
        try {
            const site = {
                id: siteCreationData.name,
                name: siteCreationData.name,
                description: siteCreationData.description,
                serviceRadius: parseFloat(siteCreationData.serviceRadius),
                latitude: parseFloat(siteCreationData.latitude),
                longitude: parseFloat(siteCreationData.longitude),
                // subs: this.state.selectedSubs,
                averageWait: parseInt(siteCreationData.averageWait),
                averageLine: parseInt(siteCreationData.averageLine),
                online: true,
                estimatedDaily: parseInt(siteCreationData.estimatedDaily),
            }
            API.graphql({
                query: mutations.createSite,
                variables: {input: site}
            })
        } catch (error) {
            console.log("Error creating site: ", error)
        }
    }
    static async deleteSiteManager(siteManagerID, siteIDIn) {
        console.log("deleting site manager"+ siteManagerID+siteIDIn)
        const siteManager = {
            id: siteManagerID,
            siteID: siteIDIn,
        }
        await API.graphql({
            query: mutations.deleteSiteManager,
            variables: {input: siteManager}
        })
    }
    static async deleteSite(siteIDIn) {

        const site = {
            id: siteIDIn,
        }
        await API.graphql({
            query: mutations.deleteSite,
            variables: {input: site}
        })
    }
}

export default AdministrationBackendHelper
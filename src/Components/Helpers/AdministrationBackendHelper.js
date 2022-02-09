import {API} from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {deleteCustomer} from "../../graphql/mutations";

class AdministrationBackendHelper {
    static async getSite(siteIDInput) {
        return (await API.graphql({
            query: queries.getSite,
            variables: {
                id: siteIDInput
            }
        })).data.getSite
    }
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
        return ((await API.graphql({
            query: queries.getSite,
            variables: {
                id: siteIDInput
            }
        })).data.getSite.siteSubscriptions.items)
    }
    static async getSitesBySiteManager(siteManagerInput) {
        const siteManagerList = (await API.graphql({
            query: queries.siteManagerByID,
            variables: {
                id: siteManagerInput
            }
        })).data.siteManagerByID.items;
        return siteManagerList.map((siteManager) => siteManager.site)
    }
    static async getSiteManagerBySite(siteIDInput) {
        const siteManagerList = (await API.graphql({
            query: queries.siteManagerBySite,
            variables: {
                siteID: siteIDInput
            }
        })).data.siteManagerBySite.items;
        return siteManagerList
    }
    static async getSiteIDsBySiteManager(siteManagerInput) {
        const siteManagerList = (await API.graphql({
            query: queries.siteManagerByID,
            variables: {
                id: siteManagerInput
            }
        })).data.siteManagerByID.items;
        return siteManagerList.map((siteManager) => siteManager.siteID)
    }

    // By limits of Appsync, you're limited to queries of 100mb/100 items, this is just one query.  Below has the
    // recursive operation which will call queries until you reach all the items
    static async getCustomersBySiteFast(siteIDInput) {
        return (await API.graphql({
            query: queries.customerBySite,
            variables: {
                siteID: siteIDInput
            }
        })).data.customerBySite.items;
    }
    static async getCustomersBySiteSubscriptionFast(siteSubscriptionIDInput) {
        return (await API.graphql({
            query: queries.customerBySiteSubscription,
            variables: {
                siteSubscriptionID: siteSubscriptionIDInput
            }
        })).data.customerBySiteSubscription.items
    }

    // The slower, full versions of the above queries
    static async getCustomersBySite(siteIDInput) {
        let query = (await API.graphql({
            query: queries.customerBySite,
            variables: {
                siteID: siteIDInput
            }
        }));
        let fullListOfCustomers = query.data.customerBySite.items;
        let nextToken = query.data.customerBySite.nextToken;
        while (nextToken != null) {
            query = (await API.graphql({
                query: queries.customerBySite,
                variables: {
                    nextToken: nextToken,
                    siteID: siteIDInput
                }
            }));
            fullListOfCustomers.push(...query.data.customerBySite.items)
            nextToken = query.data.customerBySite.nextToken
        }
        return fullListOfCustomers;
    }
    static async getCustomersBySiteSubscription(siteSubscriptionIDInput) {
        console.log("Site sub id " + siteSubscriptionIDInput)
        let query = (await API.graphql({
            query: queries.customerBySiteSubscription,
            variables: {
                siteSubscriptionID: siteSubscriptionIDInput
            }
        }))
        console.log(query)
        let fullListOfCustomers = query.data.customerBySiteSubscription.items;
        let nextToken = query.data.customerBySiteSubscription.nextToken;
        while (nextToken != null) {
            query = (await API.graphql({
                query: queries.customerBySiteSubscription,
                variables: {
                    nextToken: nextToken,
                    siteSubscriptionID: siteSubscriptionIDInput
                }
            }));
            fullListOfCustomers.push(...query.data.customerBySiteSubscription.items)
            nextToken = query.data.customerBySiteSubscription.nextToken
        }
        return fullListOfCustomers;
    }
    static async createSubscription(subscriptionCreationData, siteIDIn) {
        const siteSubscription = {
            siteSiteSubscriptionsId: siteIDIn,
            siteID: siteIDIn,
            name: subscriptionCreationData.name,
            pricePerMonth: parseFloat(subscriptionCreationData.pricePerMonth),
            expectedJerrycans: parseInt(subscriptionCreationData.softCapVisits)
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

    static async createCustomer(customerName, subscriptionIDIn, siteIDIn, pinIn, phoneNumberIn) {
        const customer = {
            siteID: siteIDIn,
            siteSubscriptionID: subscriptionIDIn,
            validSubscription: true,
            pin: pinIn,
            phoneNumber: phoneNumberIn,
            name: customerName,
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
            await API.graphql({
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
    static async cascadeDeleteSite(siteIDInput) {
        const site = await this.getSite(siteIDInput)
        const siteSubscriptions = site.siteSubscriptions.items
        const siteManagers = await this.getSiteManagerBySite(siteIDInput)
        let cascadeDeleteSiteList = []
        for (const siteSubscription in siteSubscriptions) {
            cascadeDeleteSiteList.push(
                this.cascadeDeleteSiteSubscription(siteSubscriptions[siteSubscription].id)
            )
        }
        console.log(siteManagers)
        for (const siteManager in siteManagers) {
            cascadeDeleteSiteList.push(
                this.deleteSiteManager(siteManagers[siteManager].id, siteIDInput)
            )
        }
        await Promise.all(cascadeDeleteSiteList)
        await this.deleteSite(siteIDInput)
    }
    static async cascadeDeleteSiteSubscription(siteSubscriptionIDInput){
        // Delete all associated customers
        const customerIDs = await this.getCustomersBySiteSubscription(siteSubscriptionIDInput)
        let deletionPromiseList = []
        for (const customer in customerIDs) {
            const customerData = {
                id: customerIDs[customer].id,
                siteID: customerIDs[customer].siteID,
            }
            deletionPromiseList.push(API.graphql({
                query: mutations.deleteCustomer,
                variables: {input: customerData}
            }))
        }
        const siteSubscriptionData = {
            id: siteSubscriptionIDInput
        }
        deletionPromiseList.push(API.graphql({
            query: mutations.deleteSiteSubscription,
            variables: {input: siteSubscriptionData}
        }))
        await Promise.all(deletionPromiseList)

    }

    // Moves customer subscriptions
    static async switchSiteSubscription(subsciptionStartID, subscriptionEndID) {
        const customerIDs = await this.getCustomersBySiteSubscriptionFast(subsciptionStartID)
        let mutationPromiseList = []
        for (const customer in customerIDs) {
            const customerData = {
                id: customerIDs[customer].id,
                siteID: customerIDs[customer].siteID,
            }
            mutationPromiseList.push(API.graphql({
                query: mutations.deleteCustomer,
                variables: {input: customerData}
            }))
        }
        await Promise.all(mutationPromiseList)
    }

    static async updateSite(idInput, siteChanges) {
        const siteData = siteChanges
        await API.graphql({
            query: mutations.updateSite,
            variables: {input:Object.assign(siteData, {id:idInput})}
        })
    }

    // This is a testing function to clear all tables.
    // You should not use this unless that's your intention
    static async clearAllCustomers() {
        let query = (await API.graphql({
            query: queries.listCustomers,
        }));
        let fullListOfCustomers = query.data.listCustomers.items;
        let nextToken = query.data.listCustomers.nextToken;
        let mutationPromiseList = []
        while (nextToken != null) {
            query = (await API.graphql({
                query: queries.listCustomers,
                variables: {
                    nextToken: nextToken
                }
            }));
            fullListOfCustomers.push(...query.data.listCustomers.items)
            nextToken = query.data.listCustomers.nextToken
        }
        for (const customer in fullListOfCustomers) {
            const customerData = {
                id: fullListOfCustomers[customer].id,
                siteID: fullListOfCustomers[customer].siteID,
            }
            mutationPromiseList.push(API.graphql({
                query: mutations.deleteCustomer,
                variables: {input: customerData}
            }))
        }
        return fullListOfCustomers;
    }
}

export default AdministrationBackendHelper
import {API, Auth} from "aws-amplify";
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
    // static async getSiteSubscriptions() {
    //     return (await API.graphql({query: queries.listSiteSubscriptions})).data.listSiteSubscriptions.items;
    // }
    // static async getSiteSubscriptionsBySite(siteIDInput) {
    //     return ((await API.graphql({
    //         query: queries.getSite,
    //         variables: {
    //             id: siteIDInput
    //         }
    //     })).data.getSite.siteSubscriptions.items)
    // }
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
    // static async getCustomersBySiteSubscriptionFast(siteSubscriptionIDInput) {
    //     return (await API.graphql({
    //         query: queries.customerBySiteSubscription,
    //         variables: {
    //             siteSubscriptionID: siteSubscriptionIDInput
    //         }
    //     })).data.customerBySiteSubscription.items
    // }

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
    // static async getCustomersBySiteSubscription(siteSubscriptionIDInput) {
    //     console.log("Site sub id " + siteSubscriptionIDInput)
    //     let query = (await API.graphql({
    //         query: queries.customerBySiteSubscription,
    //         variables: {
    //             siteSubscriptionID: siteSubscriptionIDInput
    //         }
    //     }))
    //     console.log(query)
    //     let fullListOfCustomers = query.data.customerBySiteSubscription.items;
    //     let nextToken = query.data.customerBySiteSubscription.nextToken;
    //     while (nextToken != null) {
    //         query = (await API.graphql({
    //             query: queries.customerBySiteSubscription,
    //             variables: {
    //                 nextToken: nextToken,
    //                 siteSubscriptionID: siteSubscriptionIDInput
    //             }
    //         }));
    //         fullListOfCustomers.push(...query.data.customerBySiteSubscription.items)
    //         nextToken = query.data.customerBySiteSubscription.nextToken
    //     }
    //     return fullListOfCustomers;
    // }
    // static async createSubscription(subscriptionCreationData, siteIDIn) {
    //     const siteSubscription = {
    //         siteSiteSubscriptionsId: siteIDIn,
    //         siteID: siteIDIn,
    //         name: subscriptionCreationData.name,
    //         pricePerMonth: parseFloat(subscriptionCreationData.pricePerMonth),
    //         expectedJerrycans: parseInt(subscriptionCreationData.softCapVisits)
    //         // weeklyJerryCans: 0,
    //     }
    //     await API.graphql({
    //         query: mutations.createSiteSubscription,
    //         variables: {input: siteSubscription}
    //     })
    // }
    static async createSiteManager(siteManagerID, siteID, phoneNumber) {
        const siteManager = {
            id: siteManagerID,
            siteID: siteID,
            phoneNumber: phoneNumber,
        }
        await API.graphql({
            query: mutations.createSiteManager,
            variables: {input: siteManager}
        })

    }

    static async createCustomer(firstName, lastName, siteIDIn, pinIn, phoneNumberIn) {
        const customer = {
            governmentID: firstName+lastName,
            siteID: siteIDIn,
            validSubscription: "true",
            pin: pinIn,
            phoneNumber: phoneNumberIn,
            firstName: firstName,
            lastName: lastName,
            preferredLanguage: "en",
            subscriptionExpiration: "2022-03-01"
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
                nickname: siteCreationData.nickname,
                description: siteCreationData.description,
                serviceRadius: parseFloat(siteCreationData.serviceRadius),
                latitude: parseFloat(siteCreationData.latitude),
                longitude: parseFloat(siteCreationData.longitude),
                // subs: this.state.selectedSubs,
                avgWaitMinute: parseInt(siteCreationData.avgWaitMinute),
                avgLineCount: parseInt(siteCreationData.avgLineCount),
                status: "online",
                subscriptionFee: parseFloat(siteCreationData.subscriptionFee),
                expectedJerrycans: parseInt(siteCreationData.expectedJerrycans)
            }
            await API.graphql({
                query: mutations.createSite,
                variables: {input: site},
                authMode: 'AMAZON_COGNITO_USER_POOLS',
            })
        } catch (error) {
            console.log("Error creating site: ", error)
        }
    }
    static async deleteSiteManager(siteManagerID, siteID) {
        if (siteID !== "") {
            console.log("deleting site manager"+ siteManagerID+siteID)
            const siteManager = {
                id: siteManagerID,
                siteID: siteID,
            }
            await API.graphql({
                query: mutations.deleteSiteManager,
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                variables: {input: siteManager}
            })
        }
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
    static async deleteCustomer(id) {
        const customerData = {
            id: id,
        }
        await API.graphql({
            query: mutations.deleteCustomer,
            variables: {input: customerData}
        })
    }
    static async cascadeDeleteSite(siteIDInput) {
        const site = await this.getSite(siteIDInput)
        const customers = await this.getCustomersBySite(siteIDInput)
        const siteManagers = await this.getSiteManagerBySite(siteIDInput)
        let cascadeDeleteSiteList = []
        for (const customer in customers) {
            cascadeDeleteSiteList.push(AdministrationBackendHelper.deleteCustomer(customers[customer].id))
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
    // static async cascadeDeleteSiteSubscription(siteSubscriptionIDInput){
    //     // Delete all associated customers
    //     const customerIDs = await this.getCustomersBySiteSubscription(siteSubscriptionIDInput)
    //     let deletionPromiseList = []
    //     for (const customer in customerIDs) {
    //         const customerData = {
    //             id: customerIDs[customer].id,
    //             siteID: customerIDs[customer].siteID,
    //         }
    //         deletionPromiseList.push(API.graphql({
    //             query: mutations.deleteCustomer,
    //             variables: {input: customerData}
    //         }))
    //     }
    //     const siteSubscriptionData = {
    //         id: siteSubscriptionIDInput
    //     }
    //     deletionPromiseList.push(API.graphql({
    //         query: mutations.deleteSiteSubscription,
    //         variables: {input: siteSubscriptionData}
    //     }))
    //     await Promise.all(deletionPromiseList)
    //
    // }

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
    static async listCognito(limit, nextToken = null){
        let apiName = 'AdminQueries';
        let path = '/listUsers';
        const queryParams =  (nextToken !== null)?{
                "groupname": "Editors",
                "limit": limit,
                "token": nextToken
            }:{
            "limit": limit,
        }
        let myInit = {
            queryStringParameters: queryParams,
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
            }
        }
        const { NextToken, ...rest } =  await API.get(apiName, path, myInit);
        nextToken = NextToken;
        const list = await rest.Users.map((user)=>{
            const userUnwrapped = user.Attributes.reduce((prev, attribute)=> {
                return Object.assign(prev, {
                    [attribute.Name]: attribute.Value
                })
            }, {})
            return Object.assign(userUnwrapped, {id: user.Username})
        })
        // console.log(rest)
        return list;
    }
}

export default AdministrationBackendHelper
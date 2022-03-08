import React from "react";
import {Amplify, API, Storage} from "aws-amplify";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import awsconfig from '../../aws-exports';
import AdministrationBackendHelper from "../Helpers/AdministrationBackendHelper";
import LocalizationHelper from "../Helpers/LocalizationHelper";
import {baseAssociations, baseLanguages} from "../languageData";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";

const siteLocations = [
    [0.8601723100257656, 32.081114032264246],
    [1.9263576758795882, 34.684589004602465],
    [3.1332438033296173, 31.66345987298884],
    [-0.469978477756793, 30.81226239329865],
    [-0.9886157700640454, 29.843974915072906],
    [0.22664695872836463, 32.926285624776376]
]
class DataStoreTest extends React.Component {
    constructor() {
        super();
        this.state = {
            id : "",
            phrase : "",
            data : "",
            sites: [],
            subs: [],
            customerTransaction: {
                site: [],
                userPhoneNumber : 0,
                fullName: "",
            },
            siteManagerData: {
                name: ""
            }
        }
    }
    async componentDidMount() {
        this.setState({
            sites: await AdministrationBackendHelper.getSites()
        })
    }
    async clearDataStore () {

    }

    async addPhrase() {
    }

    async syncData() {
    }
    async addBaseData() {
        await LocalizationHelper.addMultipleLanguagePhrases(baseLanguages)
    }
    async addLanguages() {
        await LocalizationHelper.addMultipleLanguageCodes(baseAssociations)
    }
    async createUser() {
        const CustomerTransactions = {
            userPhoneNumber: this.state.customerTransaction.userPhoneNumber,
            governmentID: this.state.customerTransaction.userPhoneNumber,
            fullName: this.state.customerTransaction.fullName,
            siteName: this.state.customerTransaction.site,
            siteID: this.state.customerTransaction.site,
            action: "register",
            collectedCount: 0,
            collectedItemType: "N/A",
        }
        await API.graphql({
            query: mutations.createCustomerTransactions,
            variables: {input: CustomerTransactions}
        })
    }
    async createManager() {
        try {
            await AdministrationBackendHelper.createSiteManager(this.state.siteManagerData.name, this.state.siteManagerData.site)
        } catch (error) {
            console.log("Error Creating Site Manager: ",error)
        }

    }
    async tests3() {
        // try {
        //     const result = await Storage.put("test.txt", "this is to override hello?");
        //     console.log(result)
        // } catch (error) {
        //     console.log("Error pushing to s3", error)
        // }
        await LocalizationHelper.getLanguagePhrases()
    }
    async simulate() {
        let siteCreationPromises = []
        for (const pair in siteLocations) {
            siteCreationPromises.push(this.simpleCreateSite(pair, siteLocations[pair][0], siteLocations[pair][1]))
        }
        await Promise.all(siteCreationPromises)
        const sites = await AdministrationBackendHelper.getSites()
        for (const site in sites) {
            try {
                for (let iterator = 0 ; iterator < 5; iterator++) {
                    AdministrationBackendHelper.createCustomer("first"+iterator, "last"+iterator, sites[site].id, 1234, iterator)
                }
            } catch (e) {
                console.log("Error creating customers for site: "+sites[site].id, e)
            }

        }
    }
    async simpleCreateSite(number, latitude, longitude) {
        const siteCreationData = {
            name: "testSite" + number,
            description: "realistic site location " + number,
            smsDescription: "sms description " + number,
            nickname: "nickname" + number,
            serviceRadius: 5,
            latitude: latitude,
            longitude: longitude,
            avgWaitMinute: 5,
            avgLineCount: 5,
            status: "online",
            subscriptionFee: 5,
            expectedJerrycans: 10,
        }
        await AdministrationBackendHelper.createSite(siteCreationData)
    }
    async testFunction() {
        const input = {
            msg: ""
        }
        console.log(await API.graphql({
            query: queries.echo,
            variables: {input: input}
        }))
    }
    async deleteSiteSubscription(){
        // LocalizationHelper.deleteLanguageCascade("test")
        console.log(await AdministrationBackendHelper.listCognito(30))
    }
    render() {
        return(
            <Grid direction={"column"}>
                <Grid>
                    <div>
                        This should be the dataStore test
                    </div>
                    <Button variant="outlined" onClick={this.clearDataStore.bind(this)}>
                        Clear DataStore
                    </Button>
                    <Button variant="outlined" onClick={this.syncData.bind(this)}>
                        Sync to cloud
                    </Button>
                    <TextField variant="outlined"  label={"Language Code"} onChange={(val) => {this.setState({id: val.target.value})}}/>
                    <TextField variant="outlined" label={"Phrase Prompt"} onChange={(val) => {this.setState({phrase: val.target.value})}}/>
                    <TextField variant="outlined"  label={"Data"} onChange={(val) => {this.setState({data: val.target.value})}}/>
                    <Button variant="outlined" onClick={this.addPhrase.bind(this)}>
                        Add phrase
                    </Button>
                    <Button variant="outlined" onClick={this.addBaseData.bind(this)}>
                        Add Base Data
                    </Button>
                    <Button variant="outlined" onClick={this.addLanguages.bind(this)}>
                        Add Base Languages
                    </Button>
                </Grid>
                <Grid direction={"row"}>
                    <TextField variant="outlined" label={"Phone Number"} onChange={(val) => {
                        customerData : Object.assign(this.state.customerTransaction, {userPhoneNumber: val.target.value})
                    }}/>
                    <TextField variant="outlined"  label={"Name"} onChange={(val) => {
                        customerData : Object.assign(this.state.customerTransaction, {fullName: val.target.value})
                        console.log(val)
                    }}/>
                    <FormControl style = {{ width: "150px"}}>
                        <InputLabel id="site-label">Sites</InputLabel>
                        <Select
                            labelId="site-label"
                            id="sites"
                            value={this.state.customerTransaction.site}
                            onChange={async (event) => {
                                const {
                                    target: {value},
                                } = event;
                                // const subs = (await DataStore.query(Site, value)).subs
                                console.log(value)
                                this.setState({
                                    customerData: Object.assign(this.state.customerTransaction, {site: value}),
                                });

                            }}
                        >
                            {this.state.sites.map((site)=> {
                                return <MenuItem key = {site.name+"key"} value = {site.id}>
                                    {site.name}
                                </MenuItem>
                            })}

                        </Select>
                    </FormControl>
                    {/*<FormControl style = {{ width: "120px"}}>*/}
                    {/*    <InputLabel id="subscription-label">Subscriptions</InputLabel>*/}
                    {/*    <Select*/}
                    {/*        labelId="sites"*/}
                    {/*        id="subscriptions"*/}
                    {/*        value={this.state.customerData.sub}*/}
                    {/*        onChange={(event)=>{*/}
                    {/*            const {*/}
                    {/*                target: { value },*/}
                    {/*            } = event;*/}
                    {/*            this.setState({*/}
                    {/*                customerData: Object.assign(this.state.customerData, {sub: value})*/}
                    {/*            });*/}
                    {/*            console.log(value)*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {this.state.subs.map((sub)=> {*/}
                    {/*            const val = sub.name+" ("+sub.expectedJerrycans+"/ $"+sub.pricePerMonth+")"*/}
                    {/*            return <MenuItem key = {val+"key"} value = {sub.id}>*/}
                    {/*                {val}*/}
                    {/*            </MenuItem>*/}
                    {/*        })}*/}

                    {/*    </Select>*/}
                    {/*</FormControl>*/}
                    <Button variant="outlined" onClick={this.createUser.bind(this)}>
                        Site History
                    </Button>
                </Grid>
                <Grid>
                    <TextField variant="outlined"  label={"Manager Email"} onChange={(val) => {
                        siteManagerData : Object.assign(this.state.siteManagerData, {name: val.target.value})
                    }}/>
                    <TextField variant="outlined"  label={"Site ID"} onChange={(val) => {
                        siteManagerData : Object.assign(this.state.siteManagerData, {site: val.target.value})
                    }}/>
                    <Button variant="outlined" onClick={this.createManager.bind(this)}>
                        Create Site Manager
                    </Button>
                </Grid>
                <Button variant="outlined" onClick={this.tests3.bind(this)}>
                    test s3
                </Button>
                <Button variant="outlined" onClick={this.simulate.bind(this)}>
                    simulate
                </Button>
                <Button variant="outlined" onClick={this.testFunction.bind(this)}>
                    test function
                </Button>
                <Button variant="outlined" onClick={this.deleteSiteSubscription.bind(this)}>
                    Test button
                </Button>
            </Grid>

        )
    }
}

export default DataStoreTest
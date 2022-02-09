import React from "react";
import {Amplify, Storage} from "aws-amplify";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import awsconfig from '../../aws-exports';
import AdministrationBackendHelper from "../Helpers/AdministrationBackendHelper";
import LocalizationHelper from "../Helpers/LocalizationHelper";

Amplify.configure(awsconfig);

const baseLanguages  = {
    en:{
        signIn:"Sign In",
        email:"Email",
        password:"Password",
        forgot:"Forgot your password?",
        forgotQuery:"Enter your email address and we'll send you a code to help you reset your password.",
        reset:"Send reset code",
        back:"Back",
        createAccount:"Create an account",
        uppercase: 'At least one uppercase letter' ,
        lowercase: 'At least one lowercase letter' ,
        digit: 'At least one digit' ,
        special: 'At least one special character' ,
        minLength: 'Should be more than 8 characters' ,
        maxLength: 'Should be less than 16 characters',
        enterValidEmail: "Please enter a valid email or create an account",
        enterReset:"Enter received code",
        checkEmail:"Please check your email",
        forCode:"for a reset code and create a new password.",
        verificationError:"Please enter correct reset code.",
        createPassword:"Create new password",
        reenter:"Re-enter the password",
        noMatch:"Passwords do not match",
        helperText:"Your password must have the following:",
        firstName:"First Name",
        lastName:"Last Name",
        passwordRequirements: "Your password must have the following:",
        confirmPassword: "Confirm Password",
        signUp: "Sign Up",
        verifyAccount: "Verify Account",
        emailCheck: "Please check your email for a confirmation code. This may take several minutes.",
        invalidCode: "Invalid verification code provided, please try again.",
        newCode: "New verification code sent successfully.",
        noCode: "Didn't receive your verification code?",
        resend: "Resend Code",
        verify: "Verify",
        enterPassword: "Enter new password",
        setPassword: "Set Password",
        accountExists: "An account with the given email already exists.",
        validEmail: "Please enter a valid email.",
        passwordReset: "Password Reset",
        setNewPassword: "Set New Password"
    },
    sw: {
        signIn:"Weka sahihi ",
        email:"Barua pepe",
        password:"Nenosiri",
        forgot:"Umesahau nenosiri yako?",
        forgotQuery:"Weka barua pepe yako na tutakutumia msimbo ili kukusaidia kuweka upya nenosiri lako.",
        reset:"Tuma msimbo wa kuweka upya",
        back:"Nyuma",
        createAccount:"Fungua akaunti",
        uppercase: 'Angalau herufi kubwa moja' ,
        lowercase: 'Angalau herufi ndogo moja' ,
        digit: 'Angalau tarakimu moja' ,
        special: 'Angalau mhusika mmoja maalum' ,
        minLength: 'Inapaswa kuwa zaidi ya herufi 8' ,
        maxLength: 'Inapaswa kuwa chini ya herufi 16',
        enterValidEmail: "Tafadhali ingiza barua pepe halali au ufungue akaunti",
        enterReset:"Weka msimbo uliopokelewa",
        checkEmail:"Tafadhali angalia barua pepe yako ",
        forCode:"kwa msimbo wa kuweka upya na unda nenosiri mpya.",
        verificationError:"Tafadhali weka msimbo sahihi wa kuweka upya.",
        createPassword:"Unda nenosiri mpya",
        reenter:"Ingiza tena nenosiri",
        noMatch:"Manenosiri hayalingani",
        helperText:"Nenosiri lako lazima liwe na yafuatayo:",
        firstName:"Jina la kwanza",
        lastName:"Jina la familia",
        passwordRequirements: "Nenosiri lako lazima liwe na yafuatayo:",
        confirmPassword: "Thibitisha Nenosiri",
        signUp: "Jisajili",
        verifyAccount: "Thibitisha Akaunti",
        emailCheck: "Tafadhali angalia barua pepe yako kwa nambari ya kuthibitisha. Hii inaweza kuchukua dakika kadhaa.",
        invalidCode: "Nambari ya kuthibitisha imetolewa, tafadhali jaribu tena.",
        newCode: "Nambari mpya ya uthibitishaji imetumwa kwa mafanikio.",
        noCode: "Hukupokea nambari yako ya kuthibitisha?",
        resend: "Tuma tena Msimbo",
        verify: "Thibitisha",
        enterPassword: "Weka nenosiri jipya",
        setPassword: "Weka Nenosiri",
        accountExists: "Akaunti iliyo na barua pepe uliyopewa tayari ipo.",
        validEmail: "Tafadhali weka barua pepe halali.",
        passwordReset: "Weka Upya Nenosiri",
        setNewPassword: "Weka Nenosiri Jipya"
    }
}
const baseAssociations = {
    en : "English",
    sw : "Swahili",
}
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
            customerData: {
                site: [],
                pin: "",
                phoneNumber : 0,
                name: "",
                sub: null,
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
        await AdministrationBackendHelper.createCustomer(
            this.state.customerData.name,
            this.state.customerData.sub,
            this.state.customerData.site,
            this.state.customerData.pin,
            this.state.customerData.phoneNumber)
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
        await LocalizationHelper.getLanguages()
    }
    async simulate() {
        let siteCreationPromises = []
        for (const pair in siteLocations) {
            siteCreationPromises.push(this.simpleCreateSite(pair, siteLocations[pair][0], siteLocations[pair][1]))
        }
        await Promise.all(siteCreationPromises)
        const sites = await AdministrationBackendHelper.getSites()
        for (const site in sites) {
            for (let iterator = 0 ; iterator < 5; iterator++) {
                AdministrationBackendHelper.createCustomer("customer"+iterator, site.siteSubscriptions.items[0].id, site.id, 1234, iterator)
            }
        }
    }
    async simpleCreateSite(number, latitude, longitude) {
        const siteCreationData = {
            name: "testSite" + number,
            description: "realistic site location " + number,
            serviceRadius: 5,
            latitude: latitude,
            longitude: longitude,
            averageWait: 5,
            averageLine: 5,
            estimatedDaily: 200
        }
        await AdministrationBackendHelper.createSite(siteCreationData)
        const subscriptionData = {
            name: "testSiteSub" + number,
            pricePerMonth: 5,
            softCapVisits: 5,
        }
        await AdministrationBackendHelper.createSubscription(subscriptionData, "testSite" + number)
    }
    async getSite() {
        console.log(this.state.customerData.site)
        console.log(await AdministrationBackendHelper.getSite(this.state.customerData.site))
    }
    async deleteSiteSubscription(){
        // AdministrationBackendHelper.cascadeDeleteSiteSubscription("testSiteSub5")
        AdministrationBackendHelper.cascadeDeleteSite("testsite")
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
                    <TextField variant="outlined"  label={"PIN"} onChange={(val) => {
                        customerData : Object.assign(this.state.customerData, {pin: parseInt(val.target.value) })
                    }}/>
                    <TextField variant="outlined" label={"Phone Number"} onChange={(val) => {
                        customerData : Object.assign(this.state.customerData, {phoneNumber: val.target.value})
                    }}/>
                    <TextField variant="outlined"  label={"Name"} onChange={(val) => {
                        customerData : Object.assign(this.state.customerData, {name: val.target.value})
                        console.log(val)
                    }}/>
                    <FormControl style = {{ width: "150px"}}>
                        <InputLabel id="site-label">Sites</InputLabel>
                        <Select
                            labelId="site-label"
                            id="sites"
                            value={this.state.customerData.site}
                            onChange={async (event) => {
                                const {
                                    target: {value},
                                } = event;
                                // const subs = (await DataStore.query(Site, value)).subs
                                console.log(value)
                                this.setState({
                                    customerData: Object.assign(this.state.customerData, {site: value}),
                                    //Basically subs is equal to the subs that
                                    subs: await AdministrationBackendHelper.getSiteSubscriptionsBySite(value)
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
                    <FormControl style = {{ width: "120px"}}>
                        <InputLabel id="subscription-label">Subscriptions</InputLabel>
                        <Select
                            labelId="sites"
                            id="subscriptions"
                            value={this.state.customerData.sub}
                            onChange={(event)=>{
                                const {
                                    target: { value },
                                } = event;
                                this.setState({
                                    customerData: Object.assign(this.state.customerData, {sub: value})
                                });
                                console.log(value)
                            }}
                        >
                            {this.state.subs.map((sub)=> {
                                const val = sub.name+" ("+sub.expectedJerrycans+"/ $"+sub.pricePerMonth+")"
                                return <MenuItem key = {val+"key"} value = {sub.id}>
                                    {val}
                                </MenuItem>
                            })}

                        </Select>
                    </FormControl>
                    <Button variant="outlined" onClick={this.createUser.bind(this)}>
                        Create User
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
                <Button variant="outlined" onClick={this.getSite.bind(this)}>
                    test getsite
                </Button>
                <Button variant="outlined" onClick={this.deleteSiteSubscription.bind(this)}>
                    cascade delete
                </Button>
            </Grid>

        )
    }
}

export default DataStoreTest
import React from "react";
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import {
    Button, Checkbox,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl,
    Grid, InputLabel, ListItem, ListItemIcon, ListItemText, MenuItem, Paper, Select,
    TextField
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {DataGrid} from "@mui/x-data-grid";
import {listSiteManagers} from "../../graphql/queries";
import AdministrationBackendHelper from "../Helpers/AdministrationBackendHelper";
import List from "@material-ui/core/List";
import {updateLoginState} from "../../Actions/loginActions";
import {updateLanguageCodes, updateLanguageState, updateStringsState} from "../../Actions/languageActions";
import {connect} from "react-redux";



// Configure Amplify to allow network connectivity
// Amplify.configure(amplifyConfig)
// Enable Hub to debug datatore connectivity
// Hub.listen("datastore", (test) => {console.log(test.payload)})
/* TODO:
    1. Add new site
    2. Change admins for each site
    3. Determine which accounts will be admins
    4. Determine which accounts will be AccessManagers
    5. Have one account hardcoded as Administration (?)

    OPTIONAL:
    1. Switch between querying all admin-site relationships at the start vs
    querying when clicked (tradeoffs: boot time, user fluidity, server load)
 */

class Administration extends React.Component {
    async componentDidMount() {
        this.setState({
            siteManagerLinkers: await AdministrationBackendHelper.getSiteManagers(),
            siteManagers: await AdministrationBackendHelper.listCognito(),
            siteData: await AdministrationBackendHelper.getSites(),
        })
        console.log(this.state.siteManagers)
        console.log(this.state)
        console.log(this.props)
    }

    constructor(props) {
        super(props);
        const siteColumns = [
            {
                field: 'name',
                headerName: this.props.strings.name,
                type: 'string',
                width: 200,
                editable: true,
            },
            {
                field: 'serviceRadius',
                headerName: this.props.strings.serviceRadius,
                width: 200,
                editable: true,
            },
            {
                field: 'latitude',
                headerName: this.props.strings.latitude,
                width: 200,
                editable: true,
            },
            {
                field: 'longitude',
                headerName: this.props.strings.longitude,
                width: 200,
                editable: true,
            },
            {
                field: 'description',
                headerName: this.props.strings.description,
                width: 200,
                editable: true,
            },
        ]
        const adminColumn = [
            {
                field: 'id',
                headerName: this.props.strings.cognitoID,
                type: 'string',
                width: 200,
                editable: true,
            },
            {
                field: 'given_name',
                headerName: this.props.strings.givenName,
                width: 200,
                editable: true,
            },
            {
                field: 'family_name',
                headerName: this.props.strings.familyName,
                width: 200,
                editable: true,
            },
            {
                field: 'email',
                headerName: this.props.strings.email,
                width: 200,
                editable: true,
            },

        ]
        const siteRequirements = [
            {
                id: "name",
                label: this.props.strings.siteName,
                xs: 12,
                regex: /.+/,
            },
            {
                id:"description",
                label: this.props.strings.siteDescription,
                xs: 12,
                regex: /.+/,
            },
            {
                id: "nickname",
                label: this.props.strings.nickname,
                xs: 4,
                regex: /.+/,
            },
            {
                id: "serviceRadius",
                label: this.props.strings.serviceRadius,
                xs: 4,
                regex: /.+/,
            },
            {
                id: "latitude",
                label: this.props.strings.latitude,
                xs: 4,
                regex: /\d+(\.\d)?/,
            },
            {
                id: "longitude",
                label: this.props.strings.longitude,
                xs: 4,
                regex: /\d+(\.\d)?/,
            },
            {
                id: "averageWait",
                label: this.props.strings.averageWait,
                xs: 4,
                regex: /\d+(\.\d)?/,
            },
            {
                id: "averageLine",
                label: this.props.strings.averageLine,
                xs: 4,
                regex: /\d+/,
            },
            {
                id: "estimatedDaily",
                label: this.props.strings.estimatedDaily,
                xs: 4,
                regex: /\d+/,
            },
            {
                id: "subscriptionFee",
                label: this.props.strings.subscriptionFee,
                xs: 4,
                regex: /\d+/,
            },
            {
                id: "expectedJerrycans",
                label: this.props.strings.expectedJerrycans,
                xs: 4,
                regex: /\d+/,
            },
        ]
        const siteCreationData = siteRequirements.map((requirement) => {
            return({
                    [requirement.id]: "",
                    [requirement.id+"Error"]: false
                })
        }).reduce((prev, curr) => {
            return Object.assign(prev,curr)
        })
        // To create a deep copy
        const siteCreationErrors = JSON.parse(JSON.stringify(siteCreationData))
        const siteEditData = JSON.parse(JSON.stringify(siteCreationData))
        const siteEditErrors = JSON.parse(JSON.stringify(siteCreationData))
        this.state = {
            selectedSites: [],
            siteData : [],
            siteManagerLinkers : [],
            // siteSubscriptions: [],
            // selectedSiteSubscriptions: [],
            selectedManager : [],
            createSiteMenu: false,
            siteCreationData: siteCreationData,
            siteCreationErrors: siteCreationErrors,
            editSiteMenu: false,
            siteEditData : siteEditData,
            siteEditErrors: siteEditErrors,
            deleteSiteMenu: false,
            // createSubscriptionMenu: false,
            // deleteSubscriptionMenu: false,
            // subscriptionCreationData: {},
            // leftUsers: [1,2,3,4],
            // rightUsers: [5,6,7,8],
            // checked: [],
            // leftChecked: [],
            // rightChecked: [],
            siteManagers: [],
            loginState: props.loginState,
            languageState: props.languageState,
            code: "",
            siteColumns: siteColumns,
            adminColumn: adminColumn,
            siteRequirements: siteRequirements,
        }
    }
    async getManagerSelected(input) {
        const selected = input[0]
        console.log(this.state.siteManagerLinkers)
        this.setState({selectedManager: selected})
        this.setState({
            selectedSites: this.state.siteManagerLinkers.filter(
                (manager) => manager.id === selected
            ).map(
                (manager) => manager.siteID
            )
        })
    }
    // async createSubscription() {
    //     try {
    //         await AdministrationBackendHelper.createSubscription(this.state.subscriptionCreationData, this.state.selectedSites[0])
    //     } catch (error) {
    //         console.log("Error creating subscription: ", error)
    //     }
    //     this.setState({
    //         siteSubscriptions: await AdministrationBackendHelper.getSiteSubscriptionsBySite(this.state.selectedSites[0]),
    //         createSubscriptionMenu: false
    //     })
    // }
    // Called when syncing new sites to selected Site Manager/Sites
    async syncSites() {
        const selectedManager = this.state.selectedManager
        const selectedSites = this.state.selectedSites
        const currentSites = this.state.siteManagerLinkers.filter(
                (manager) => manager.id === selectedManager
            )

        let sitesToRemove = [], sitesToAdd = [];
        // Checks selected sites, and sites owned by siteManager and finds which sites need to be removed
        currentSites.map((siteManager) => {
            if (!selectedSites.includes(siteManager.siteID))
                sitesToRemove.push(siteManager.siteID)
        })
        selectedSites.map((siteID) => {
            if (!currentSites.some((siteManager) => siteManager.siteID === siteID))
                sitesToAdd.push(siteID)
        })
        console.log(sitesToAdd)
        console.log(sitesToRemove)
        for (const siteID in sitesToAdd) {
            const number = this.state.siteManagers.find((manager) => manager.id === selectedManager)
            if (number === null)
                throw new Error("No number")
            else
                AdministrationBackendHelper.createSiteManager(selectedManager, sitesToAdd[siteID], this.state.siteManagers.find((manager) => manager.id === selectedManager).phone_number)
        }
        for (const siteID in sitesToRemove) {
            AdministrationBackendHelper.deleteSiteManager(selectedManager, sitesToRemove[siteID])
        }
        this.setState({
            siteManagerLinkers: await AdministrationBackendHelper.getSiteManagers(),
        })

    }
    // Checks if the User Input is valid, then calls createSite if it is
    checkSiteValid() {
        let anyError = false
        // console.log(this.state.siteCreationData)
        let currentData = this.state.siteCreationErrors
        this.state.siteRequirements.map((requirement)=> {
            if (!requirement.regex.test(this.state.siteCreationData[requirement.id]))
                anyError = true
            currentData[requirement.id]= !requirement.regex.test(this.state.siteCreationData[requirement.id])
        })
        this.setState({
            siteCreationErrors: currentData
        })
        if (!anyError) {
            this.createSite()
        }
        console.log(this.state.siteCreationData)
    }
    //Calls Datastore to create a new site
    async createSite() {
        await AdministrationBackendHelper.createSite(this.state.siteCreationData)
        this.setState({
            siteData: await AdministrationBackendHelper.getSites(),
            createSiteMenu: false
        })
    }

    // Checks if user input is valid, and calls Datastore to update the first selected site if it is
    async updateSite() {
        let anyError = false
        console.log(this.state.siteEditData)
        let currentData = this.state.siteEditErrors
        this.state.siteRequirements.map((requirement)=> {
            if (!requirement.regex.test(this.state.siteEditData[requirement.id]))
                anyError = true
            currentData[requirement.id]= !requirement.regex.test(this.state.siteEditData[requirement.id])
        })
        this.setState({
            siteEditErrors: currentData
        })
        if (!anyError) {
            try {
                await AdministrationBackendHelper.updateSite(this.state.selectedSites[0],this.state.siteEditData)
            } catch (error) {
                console.log("Error saving site", error);
            }
            this.setState({
                editSiteMenu: false,
                siteData: await AdministrationBackendHelper.getSites()
            })
        }
    }
    // Calls datastore to delete selected sites
    async deleteSite() {
        // try {
            for (const site in this.state.selectedSites) {
                await AdministrationBackendHelper.cascadeDeleteSite(this.state.selectedSites[site])
            }
        // } catch (error) {
        //     console.log("Error deleting site", error);
        // }
        this.setState({
            deleteSiteMenu: false
        })
        this.setState({
            siteData: await AdministrationBackendHelper.getSites()
        })
    }
    // async deleteSiteSubscription(){
    //     try {
    //         for (const siteSubscription in this.state.selectedSiteSubscriptions) {
    //             console.log(this.state.selectedSiteSubscriptions[siteSubscription])
    //             await AdministrationBackendHelper.cascadeDeleteSiteSubscription(this.state.selectedSiteSubscriptions[siteSubscription])
    //         }
    //     } catch (e) {
    //         console.log("Error deleting site subscriptions", e)
    //     }
    //     this.setState({
    //         deleteSubscriptionMenu: false
    //     })
    //     this.setState({
    //         siteSubscriptions: await AdministrationBackendHelper.getSiteSubscriptionsBySite(this.state.selectedSites[0])
    //     })
    // }
    not(a, b) {
        return a.filter((value) => b.indexOf(value) === -1);
    }
    intersection(a, b) {
        return a.filter((value) => b.indexOf(value) !== -1);
    }
    render() {
        return (
            <Grid >
                <Grid item>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}>
                        {this.props.strings.siteOwnership}
                    </Typography>
                </Grid>
                <Grid container direction={"row"}>
                    <Grid container xs={6} style = {{ height: "50vh"}} id = "managerGrid" direction={"column"}>
                        <DataGrid
                            rows={this.state.siteManagers}
                            columns={this.state.adminColumn}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            onSelectionModelChange={this.getManagerSelected.bind(this)}
                        />

                    </Grid>
                    <Grid container xs={6} style = {{ height: "50vh"}} id = "siteGrid" >
                        <DataGrid
                            rows={this.state.siteData}
                            columns={this.state.siteColumns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            checkboxSelection
                            // disableSelectionOnClick
                            selectionModel = {this.state.selectedSites}
                            onSelectionModelChange={(input)=>{this.setState({selectedSites: input})}}
                        />
                    </Grid>
                </Grid>
                <Grid container direction={"row"}>
                    <Grid container xs={6}>
                        <Button variant="outlined" onClick={this.syncSites.bind(this)}>{this.props.strings.updateSitesManaged}</Button>
                    </Grid>
                    <Grid container xs={6}>
                        <Grid item>
                            <Button xs={4} variant="outlined" onClick={()=>{this.setState({createSiteMenu: true})}}>
                                {this.props.strings.createNewSite}
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button xs={4} variant="outlined" onClick={async () => {
                                if (this.state.selectedSites.length > 0) {
                                    let siteEditData = {}
                                    const selectedSite = this.state.siteData.find((site) => site.id === this.state.selectedSites[0])
                                    this.state.siteRequirements.map((requirement) => {
                                        Object.assign(siteEditData, {[requirement.id]: selectedSite[requirement.id]})
                                    })
                                    this.setState({
                                        editSiteMenu: true,
                                        // siteSubscriptions: await AdministrationBackendHelper.getSiteSubscriptionsBySite(this.state.selectedSites[0]),
                                        siteEditData: siteEditData
                                    })
                                }
                            }}>
                                {this.props.strings.editSelectedSite}
                            </Button>
                        </Grid>
                        <Button xs={4} variant="outlined" onClick={()=>{this.setState({deleteSiteMenu: true})}}>
                            {this.props.strings.deleteSelectedSites}
                        </Button>
                    </Grid>
                </Grid>
                {/*Dialogs : Create - Edit - Delete Sites*/}
                <Dialog open={this.state.createSiteMenu} onClose={()=>{this.setState({createSiteMenu: false})}} maxWidth={"md"} >
                    <DialogTitle>New Site</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.props.strings.createNewSiteDialog}
                        </DialogContentText>
                        <Grid container direction = "row" spacing = {1}>
                            {this.state.siteRequirements.map((requirement) => (
                                <Grid item xs = {requirement.xs}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id = {requirement.id}
                                        label = {requirement.label}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        error = {this.state.siteCreationErrors[requirement.id]}
                                        onChange={(event)=>{
                                            this.setState({
                                                    siteCreationData: Object.assign({}, this.state.siteCreationData, {[requirement.id]: event.target.value})
                                                }
                                            )
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>{this.setState({createSiteMenu: false})}}>{this.props.strings.cancel}</Button>
                        <Button onClick={this.checkSiteValid.bind(this)}>{this.props.strings.create}</Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={this.state.editSiteMenu} onClose={()=>{this.setState({editSiteMenu: false})}} maxWidth={"md"} >
                    <DialogTitle>{"Edit Site " + this.state.selectedSites[0]}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.props.strings.editSiteDialog}
                        </DialogContentText>
                        <Grid container direction = "row" spacing = {1}>
                            {this.state.siteRequirements.map((requirement) => (
                                <Grid item xs = {requirement.xs}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id = {requirement.id}
                                        label = {requirement.label}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        error = {this.state.siteEditErrors[requirement.id]}
                                        defaultValue = {this.state.siteEditData[requirement.id]}
                                        onChange={(event)=>{
                                            this.setState({
                                                    siteEditData: Object.assign({}, this.state.siteEditData, {[requirement.id]: event.target.value})
                                                }
                                            )
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </DialogContent>
                </Dialog>
                <Dialog open={this.state.deleteSiteMenu} onClose={()=>{this.setState({deleteSiteMenu: false})}} maxWidth={"md"} >
                    <DialogActions>
                        <Grid container direction={"column"} justifyContent={"center"}>
                            <DialogContentText>
                                {this.props.strings.deleteSiteWarning}
                            </DialogContentText>
                            <DialogActions>
                                <Button  onClick={()=>{this.setState({deleteSiteMenu: false})}}>this.props.strings.cancel</Button>
                                <Button  onClick={this.deleteSite.bind(this)}>this.props.strings.delete</Button>
                            </DialogActions>
                        </Grid>

                    </DialogActions>
                </Dialog>

            </Grid>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginState: state.loginState.currentState,
        language: state.languageState.language,
        code: state.languageState.code,
        languageCode: state.languageState.languageCodes,
        strings: state.languageState.strings,
    };
};



export default connect(mapStateToProps)(Administration);
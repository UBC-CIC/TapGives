import React from "react";
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';
import {
    Button,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl,
    Grid, InputLabel, ListItemText, MenuItem, Select,
    TextField
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {DataGrid} from "@mui/x-data-grid";
import {listSiteManagers} from "../../graphql/queries";
import AdministrationBackendHelper from "../Helpers/AdministrationBackendHelper";

const siteColumns = [
    {
        field: 'name',
        headerName: 'Name',
        type: 'string',
        width: 200,
        editable: true,
    },
    {
        field: 'serviceRadius',
        headerName: 'Radius (Km)',
        width: 200,
        editable: true,
    },
    {
        field: 'latitude',
        headerName: 'Latitude',
        width: 200,
        editable: true,
    },
    {
        field: 'longitude',
        headerName: 'Longitude',
        width: 200,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 200,
        editable: true,
    },
]
const adminColumn = [
    {
        field: 'id',
        headerName: 'Manager ID',
        type: 'string',
        width: 200,
        editable: true,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
        editable: true,
    },
]
const siteRequirements = [
    {
        id: "name",
        label: "Site name",
        xs: 12,
        regex: /.+/,
    },
    {
        id:"description",
        label: "Site Description",
        xs: 12,
        regex: /.+/,
    },
    {
        id: "serviceRadius",
        label: "Service Radius (Km)",
        xs: 3,
        regex: /.+/,
    },
    {
        id: "latitude",
        label: "Latitude",
        xs: 3,
        regex: /\d+(\.\d)?/,
    },
    {
        id: "longitude",
        label: "Longitude",
        xs: 3,
        regex: /\d+(\.\d)?/,
    },
    {
        id: "estimatedDaily",
        label: "Daily Total Usage (L)",
        xs: 3,
        regex: /\d+/,
    },
    {
        id: "averageWait",
        label: "Average Wait time (minutes)",
        xs: 4,
        regex: /\d+(\.\d)?/,
    },
    {
        id: "averageLine",
        label: "Average lineup",
        xs: 4,
        regex: /\d+/,
    },
]
const subscriptionRequirements = [
    {
        id: "name",
        label: "Subscription title",
        xs: 6,
        type: "text",
    },
    {
        id: "pricePerMonth",
        label: "Monthly Cost",
        xs: 6,
        type: "number",
    },
    // {
    //     id: "weeklyJerryCans",
    //     label: "Weekly Jerrycans",
    //     xs: 6,
    //     type: "number",
    // },
    {
        id: "softCapVisits",
        label: "Max Site Visits",
        xs: 6,
        type: "number"
    }
]
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
            siteManagerData: await AdministrationBackendHelper.getSiteManagers(),
            siteData: await AdministrationBackendHelper.getSites(),
        })
    }
    constructor(props) {
        super(props);
        const siteCreationData = siteRequirements.map((requirement) => {
            return({
                    [requirement.id]: "",
                    [requirement.id+"Error"]: false
                })
        }).reduce((prev, curr) => {
            return Object.assign(prev,curr)
        })
        // To create a deep copy
        const siteEditData = JSON.parse(JSON.stringify(siteCreationData))
        this.state = {
            selectedSites: [],
            siteData : [],
            siteManagerData : [],
            siteSubscriptions: [],
            selectedSiteSubscriptions: [],
            selectedManager : [],
            createSiteMenu: false,
            siteCreationData: siteCreationData,
            editSiteMenu: false,
            siteEditData : siteEditData,
            deleteSiteMenu: false,
            createSubscriptionMenu: false,
            subscriptionCreationData: {},
            weeklyJerryCans: "",
        }
    }
    async getManagerSelected(input) {
        const selected = input[0]
        console.log(this.state.siteManagerData)
        this.setState({selectedManager: selected})
        this.setState({
            selectedSites: this.state.siteManagerData.filter(
                (manager) => manager.id === selected
            ).map(
                (manager) => manager.siteID
            )
        })
    }
    async createSubscription() {
        try {
            await AdministrationBackendHelper.createSubscription(this.state.subscriptionCreationData, this.state.selectedSites[0])
        } catch (error) {
            console.log("Error creating subscription: ", error)
        }
        this.setState({
            createSubscriptionMenu: false
        })

    }
    // Called when syncing new sites to selected Site Manager/Sites
    async syncSites() {
        const selectedManager = this.state.selectedManager
        const selectedSites = this.state.selectedSites
        const currentSites = this.state.siteManagerData.filter(
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
            console.log(sitesToAdd[siteID])
            AdministrationBackendHelper.createSiteManager(selectedManager, sitesToAdd[siteID])
        }
        for (const siteID in sitesToRemove) {
            AdministrationBackendHelper.deleteSiteManager(selectedManager, sitesToRemove[siteID])
        }
        this.setState({
            siteManagerData: await AdministrationBackendHelper.getSiteManagers(),
        })

    }
    // Checks if the User Input is valid, then calls createSite if it is
    checkSiteValid() {
        let anyError = false
        // console.log(this.state.siteCreationData)
        let currentData = this.state.siteCreationData
        siteRequirements.map((requirement)=> {
            if (!requirement.regex.test(this.state.siteCreationData[requirement.id]))
                anyError = true
            currentData[requirement.id+"Error"]= !requirement.regex.test(this.state.siteCreationData[requirement.id])
        })
        this.setState({
            siteCreationData: currentData
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
            sites: AdministrationBackendHelper.getSites(),
            createSiteMenu: false
        })
    }

    // Checks if user input is valid, and calls Datastore to update the first selected site if it is
    async updateSite() {
        // let anyError = false
        // console.log(this.state.siteEditData)
        // let currentData = this.state.siteEditData
        // siteRequirements.map((requirement)=> {
        //     if (!requirement.regex.test(this.state.siteEditData[requirement.id]))
        //         anyError = true
        //     currentData[requirement.id+"Error"]= !requirement.regex.test(this.state.siteEditData[requirement.id])
        // })
        // this.setState({
        //     siteEditData: currentData
        // })
        // if (!anyError) {
        //     try {
        //         let site = await DataStore.query(Site, this.state.selectedAdmins[0])
        //         console.log(site)
        //         await DataStore.save(
        //             Site.copyOf(site, updated => {
        //                 updated.name= this.state.siteEditData.name;
        //                 updated.description= this.state.siteEditData.description;
        //                 updated.serviceRadius= parseFloat(this.state.siteEditData.serviceRadius);
        //                 updated.latitude= parseFloat(this.state.siteEditData.latitude);
        //                 updated.longitude= parseFloat(this.state.siteEditData.longitude);
        //                 updated.subs= this.state.selectedSubs;
        //                 updated.averageWait= parseInt(this.state.siteEditData.averageWait);
        //                 updated.averageLine= parseInt(this.state.siteEditData.averageLine);
        //                 updated.online= true;
        //             })
        //         )
        //     } catch (error) {
        //         console.log("Error saving site", error);
        //     }
        //     this.setState({
        //         editSiteMenu: false
        //     })
        //     this.setState({
        //         siteData: await DataStore.query(Site)
        //     })
        // }
        //
        //
        // console.log(this.state.siteEditData)
    }
    // Calls datastore to delete selected sites
    async deleteSite() {
        try {
            for (const site in this.state.selectedSites) {
                await AdministrationBackendHelper.deleteSite(this.state.selectedSites[site])
            }
        } catch (error) {
            console.log("Error deleting site", error);
        }
        this.setState({
            deleteSiteMenu: false
        })
        this.setState({
            siteData: await AdministrationBackendHelper.getSites()
        })
    }
    render() {
        return (
            <Grid >
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}>
                    Change site ownership permissions by Site Manager
                </Typography>
                <Grid container direction={"row"}>
                    <Grid container xs={6} style = {{ height: "50vh"}} id = "managerGrid" direction={"column"}>
                        <DataGrid
                            rows={this.state.siteManagerData}
                            columns={adminColumn}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            onSelectionModelChange={this.getManagerSelected.bind(this)}
                        />

                    </Grid>
                    <Grid container xs={6} style = {{ height: "50vh"}} id = "siteGrid" >
                        <DataGrid
                            rows={this.state.siteData}
                            columns={siteColumns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            checkboxSelection
                            // disableSelectionOnClick
                            selectionModel = {this.state.selectedSites}
                            onSelectionModelChange={(input)=>{this.setState({selectedSites: input})
                            console.log(this.state.selectedSites)}}
                        />
                    </Grid>
                </Grid>
                <Grid container direction={"row"}>
                    <Grid container xs={6}>
                        <Button variant="outlined" onClick={this.syncSites.bind(this)}>Update Sites Administrated</Button>
                    </Grid>
                    <Grid container xs={6}>
                        <Button xs={4} variant="outlined" onClick={()=>{this.setState({createSiteMenu: true})}}>
                            Create New Site
                        </Button>
                        <Button xs={4} variant="outlined" onClick={()=>{
                            if (this.state.selectedSites.length > 0)
                                this.setState({editSiteMenu: true})}}>
                            Edit Selected Site
                        </Button>
                        <Button xs={4} variant="outlined" onClick={()=>{this.setState({deleteSiteMenu: true})}}>
                            Delete Selected Sites
                        </Button>
                    </Grid>
                </Grid>
                {/*Dialogs : Create - Edit - Delete Sites*/}
                <Dialog open={this.state.createSiteMenu} onClose={()=>{this.setState({createSiteMenu: false})}} maxWidth={"md"} >
                    <DialogTitle>New Site</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To create a new Site, enter the relevant details and press create
                        </DialogContentText>
                        <Grid container direction = "row" spacing = {1}>
                            {siteRequirements.map((requirement) => (
                                <Grid item xs = {requirement.xs}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id = {requirement.id}
                                        label = {requirement.label}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        error = {this.state.siteCreationData[requirement.id+"Error"]}
                                        onChange={(event)=>{
                                            this.setState({
                                                    siteCreationData: Object.assign({}, this.state.siteCreationData, {[requirement.id]: event.target.value})
                                                }
                                            )
                                        }}
                                    />
                                </Grid>
                            ))}
                            <Grid item xs = {4}>
                                <FormControl style = {{ width: "100%"}}>
                                    <InputLabel id="subscription-label">Subscriptions</InputLabel>
                                    <Select
                                        labelId="subscription-label"
                                        id="subscriptions"
                                        multiple
                                        value={this.state.selectedSubs}
                                        onChange={(event)=>{
                                            const {
                                                target: { value },
                                            } = event;
                                            this.setState({
                                                // On autofill we get a the stringified value.
                                                selectedSubs: typeof value === 'string' ? value.split(',') : value,
                                            });
                                            console.log(value)
                                        }}
                                        style = {{ width: "100%"}}
                                    >

                                        {/*{this.state.subs.map((sub)=> {*/}
                                        {/*    const val = sub.name+" ("+sub.weeklyJerryCans.toString()+"/ $"+sub.pricePerMonth+")"*/}
                                        {/*    return <MenuItem key = {val+"key"} value = {sub.id}>*/}
                                        {/*        {val}*/}
                                        {/*    </MenuItem>*/}
                                        {/*})}*/}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" onClick={()=>{this.setState({createSubscriptionMenu: true})}}>
                            Create New Subscription Model
                        </Button>
                        <Button onClick={()=>{this.setState({createSiteMenu: false})}}>Cancel</Button>
                        <Button onClick={this.checkSiteValid.bind(this)}>Create</Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={this.state.editSiteMenu} onClose={()=>{this.setState({editSiteMenu: false})}} maxWidth={"md"} >
                    <DialogTitle>{"Edit Site " + this.state.selectedSites[0]}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To edit this site, fill in the details and press Edit
                        </DialogContentText>
                        <Grid container direction = "row" spacing = {1}>
                            {siteRequirements.map((requirement) => (
                                <Grid item xs = {requirement.xs}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id = {requirement.id}
                                        label = {requirement.label}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        error = {this.state.siteEditData[requirement.id+"Error"]}
                                        onChange={(event)=>{
                                            this.setState({
                                                    siteEditData: Object.assign({}, this.state.siteEditData, {[requirement.id]: event.target.value})
                                                }
                                            )
                                        }}
                                    />
                                </Grid>
                            ))}
                            <Grid item xs = {4}>
                                <FormControl style = {{ width: "100%"}}>
                                    <InputLabel id="subscription-label">Subscriptions</InputLabel>
                                    <Select
                                        labelId="subscription-label"
                                        id="subscriptions"
                                        multiple
                                        value={this.state.selectedSubs}
                                        onChange={(event)=>{
                                            const {
                                                target: { value },
                                            } = event;
                                            this.setState({
                                                // On autofill we get a the stringified value.
                                                selectedSubs: typeof value === 'string' ? value.split(',') : value,
                                            });
                                            console.log(value)
                                        }}
                                    >

                                        {this.state.selectedSiteSubscriptions.map((sub)=> {
                                            const val = sub.name+" ("+sub.weeklyJerryCans+"/ $"+sub.pricePerMonth+")"
                                            return <MenuItem key = {val+"key"} value = {sub.id}>
                                                {val}
                                            </MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" onClick={()=>{this.setState({createSubscriptionMenu: true})}}>
                            Create New Subscription Model
                        </Button>
                        <Button onClick={()=>{this.setState({editSiteMenu: false})}}>Cancel</Button>
                        <Button onClick={this.updateSite.bind(this)}>Edit</Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={this.state.deleteSiteMenu} onClose={()=>{this.setState({deleteSiteMenu: false})}} maxWidth={"md"} >
                    <DialogActions>
                        <Button onClick={()=>{this.setState({deleteSiteMenu: false})}}>Cancel</Button>
                        <Button onClick={this.deleteSite.bind(this)}>Delete</Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={this.state.createSubscriptionMenu} onClose={()=>{this.setState({createSubscriptionMenu: false})}} maxWidth={"md"} >
                    <DialogTitle>Generate Subscription Model</DialogTitle>
                    <DialogContent>
                        <Grid container direction = "row" spacing = {1}>
                            {subscriptionRequirements.map((requirement) => (
                                <Grid item xs = {requirement.xs}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id = {requirement.id}
                                        label = {requirement.label}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        onChange={(event)=>{
                                            this.setState({
                                                    subscriptionCreationData: Object.assign({}, this.state.subscriptionCreationData, {[requirement.id]: event.target.value})
                                                }
                                            )}}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>{this.setState({createSubscriptionMenu: false})}}>Cancel</Button>
                        <Button onClick={this.createSubscription.bind(this)}>Create</Button>
                    </DialogActions>
                </Dialog>


            </Grid>


        )
    }
}
const EditSite = () => {
    return
}

export default Administration;
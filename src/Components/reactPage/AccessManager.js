import React, {useState} from "react";
import {API, Auth, DataStore, graphqlOperation} from "aws-amplify";
import {
    Box,
    Button,
    Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid, MenuItem, Select,
    TextField
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {DataGrid} from "@mui/x-data-grid";
import { GridRowParams } from '@mui/x-data-grid';
import {listAdministrators, listAdminSiteLinkers, listCustomerSiteLinkers, listSites} from "../../graphql/queries";
import {createAdminSiteLinker, deleteAdminSiteLinker} from "../../graphql/mutations";
import {Administrator, ManagerSiteLinker, Phrase, Site, SiteManager, Sub} from "../../models";
import {CheckBox} from "@material-ui/icons";

const siteColumns = [
    {
        field: 'id',
        headerName: 'Site ID',
        type: 'string',
        width: 200,
        editable: true,
    },
    {
        field: 'serviceRadius',
        headerName: 'Radius',
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
        field: 'latitude',
        headerName: 'Latitude',
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
        headerName: 'Admin ID',
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
    },
    {
        id:"description",
        label: "Site Description",
        xs: 12,
    },
    {
        id: "serviceRadius",
        label: "Service Radius",
        xs: 4,
    },
    {
        id: "latitude",
        label: "Latitude",
        xs: 4,
    },
    {
        id: "longitude",
        label: "Longitude",
        xs: 4,
    },
    {
        id: "averageWait",
        label: "Average Wait time (minutes)",
        xs: 4,
    },
    {
        id: "averageLine",
        label: "Average lineup",
        xs: 4,
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
    }
]
/* TODO:
    1. Add new site
    2. Change admins for each site
    3. Determine which accounts will be admins
    4. Determine which accounts will be AccessManagers
    5. Have one account hardcoded as AccessManager (?)

    OPTIONAL:
    1. Switch between querying all admin-site relationships at the start vs
    querying when clicked (tradeoffs: boot time, user fluidity, server load)
 */
const select = ["site0", "site1"]
class AccessManager extends React.Component {
    async componentDidMount() {
        const managerSiteLinkerPromise = DataStore.query(ManagerSiteLinker)
        const sitePromise = DataStore.query(Site)
        console.log(await sitePromise)
        const managerPromise = DataStore.query(SiteManager)
        await Promise.all([managerSiteLinkerPromise,sitePromise,managerPromise]).then (([managerSiteLinker, site, manager])=>{
            this.setState({
                managerSiteLinkers: managerSiteLinker,
                siteData: site,
                managerData: manager,
            })
        })


    }
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            siteData : [],
            managerData : [],
            selectedAdmin : null,
            openSiteMenu: false,
            siteCreationData: {},
            openSubscriptionMenu: false,
            subscriptionCreationData: {},
            subs: [],
            selectedSubs: [],
        }
        const asyncFunctions = async () => {
            this.setState({
                subs: await DataStore.query(Sub)
            })
        }
        asyncFunctions()
    }
    getManagerSelected(selected) {
        let selectedSites = []
        this.state.managerSiteLinkers.map((linker)=>{
            if (linker.siteManagerID == selected) {
                selectedSites.push(linker.siteID)
            }
        })
        this.setState({
            selected: selectedSites,
            selectedManager: selected,
            open: false
        })
    }
    async updateSites() {
        const selectedsiteManagerID = this.state.selectedManager[0]
        // Get sites that need to be linked
        let linkedSites = this.state.selected.map((selectedSite) => {
            if (!this.state.managerSiteLinkers.some((managerSiteLinker)=>managerSiteLinker.siteManagerID==selectedsiteManagerID && managerSiteLinker.siteID==selectedSite)) {
                return selectedSite
            }
        })
        // Gets sites that we need to remove
        let sitesToRemove = this.state.managerSiteLinkers.map((managerSiteLinker)=>{
            if (managerSiteLinker.siteManagerID == selectedsiteManagerID && !this.state.selected.includes(managerSiteLinker.siteID))
                return managerSiteLinker.id
        })
        // Unlink removed sites
        DataStore.delete(ManagerSiteLinker, (asl) => asl.or((asl) => sitesToRemove.reduce((asl, id) => asl.id("eq",id), asl)))


        // Link new sites
        for (const site in linkedSites) {
            try {
                DataStore.save(
                    new ManagerSiteLinker({
                        siteManagerID: selectedsiteManagerID,
                        siteID: linkedSites[site]
                    })
                )
            } catch (error) {
                console.log("Error saving site: "+selectedsiteManagerID+linkedSites[site], error);
            }
        }
        DataStore.query(ManagerSiteLinker).then((data) => {
            this.setState({
                managerSiteLinkers: data
            })
        })
    }
    handleClickOpen() {
        this.setState({open: true})
    }
    handleClose(event, reason) {
        this.setState({open: false})
    }
    createSite(id) {
        // try {
        //     DataStore.save(
        //         new Site({
        //             siteManagerID: selectedsiteManagerID,
        //             siteID: linkedSites[site]
        //         })
        //     )
        // } catch (error) {
        //     console.log("Error saving site: "+selectedsiteManagerID+linkedSites[site], error);
        // }
        console.log(id)
        this.handleClose()
    }
    async createSubscription() {
        console.log(this.state.subscriptionCreationData)
        try {
            DataStore.save(
                new Sub({
                    id: this.state.subscriptionCreationData.name,
                    name: this.state.subscriptionCreationData.name,
                    pricePerMonth: parseFloat(this.state.subscriptionCreationData.pricePerMonth)
                })
            )
        } catch (error) {
            console.log("Error saving sub", error);
        }
        this.setState({
            openSubscriptionMenu: false
        })
        this.setState({
            subs: await DataStore.query(Sub)
        })

    }
    render() {
        return (
            <Grid>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}>
                    Manage permissions by Administrator
                </Typography>
                <Grid container>
                    <Grid item xs={6} style = {{ height: "50vh"}} id = "adminGrid">
                        <DataGrid
                            rows={this.state.managerData}
                            columns={adminColumn}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            onSelectionModelChange={this.getManagerSelected.bind(this)}
                        />
                    </Grid>
                    <Grid item xs={6} style = {{ height: "50vh"}} id = "siteGrid">
                        <DataGrid
                            rows={this.state.siteData}
                            columns={siteColumns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            checkboxSelection
                            // disableSelectionOnClick
                            selectionModel = {this.state.selected}
                            onSelectionModelChange={(input)=>{this.setState({selected: input})
                            console.log(this.state.selected)}}
                        />
                    </Grid>
                </Grid>
                <Button variant="outlined" onClick={this.updateSites.bind(this)}>Update Sites Administrated</Button>
                <Button variant="outlined" onClick={()=>{this.setState({openSiteMenu: true})}}>
                    Create New Site
                </Button>
                <Dialog open={this.state.openSiteMenu} onClose={()=>{this.setState({openSiteMenu: false})}} maxWidth={"md"} >
                    <DialogTitle>Subscribe</DialogTitle>
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
                                        onChange={(event)=>{
                                            this.setState({
                                                siteCreationData: {
                                                        ...this.state.siteCreationData,
                                                        [this.state.id]: event.target.value
                                                    }
                                                }
                                            )
                                        }}
                                    />
                                </Grid>
                            ))}
                            <Grid item xs = {4}>
                                <Select label = {"Subscriptions"}  multiple>
                                    {this.state.subs.map((sub)=> (
                                        <MenuItem key = {sub.name} value = {sub.name}>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>{this.setState({openSiteMenu: false})}}>Cancel</Button>
                        <Button onClick={()=>{this.setState({openSiteMenu: false})}}>Create</Button>
                    </DialogActions>
                </Dialog>
                <Button variant="outlined" onClick={()=>{this.setState({openSubscriptionMenu: true})}}>
                    Create New Subscription Model
                </Button>
                <Dialog open={this.state.openSubscriptionMenu} onClose={()=>{this.setState({openSubscriptionMenu: false})}} maxWidth={"md"} >
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
                        <Button onClick={()=>{this.setState({openSubscriptionMenu: false})}}>Cancel</Button>
                        <Button onClick={this.createSubscription.bind(this)}>Create</Button>
                    </DialogActions>
                </Dialog>
            </Grid>


        )
    }
}

export default AccessManager;
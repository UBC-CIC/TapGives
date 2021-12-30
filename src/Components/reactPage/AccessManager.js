import React from "react";
import amplifyConfig from "../../aws-exports";
import Amplify, { DataStore, Hub } from 'aws-amplify';
import {
    Button,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid, InputLabel, ListItemText, MenuItem, Select,
    TextField
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {DataGrid} from "@mui/x-data-grid";
import {ManagerSiteLinker, Site, SiteManager, Sub} from "../../models";

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
        xs: 4,
        regex: /.+/,
    },
    {
        id: "latitude",
        label: "Latitude",
        xs: 4,
        regex: /\d+(\.\d)?/,
    },
    {
        id: "longitude",
        label: "Longitude",
        xs: 4,
        regex: /\d+(\.\d)?/,
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
    {
        id: "weeklyJerryCans",
        label: "Weekly Jerrycans",
        xs: 6,
        type: "number",
    },
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
    5. Have one account hardcoded as AccessManager (?)

    OPTIONAL:
    1. Switch between querying all admin-site relationships at the start vs
    querying when clicked (tradeoffs: boot time, user fluidity, server load)
 */
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
        const siteCreationData = siteRequirements.map((requirement) => {
            return({
                    [requirement.id]: "",
                    [requirement.id+"Error"]: false
                })
        }).reduce((prev, curr) => {
            return Object.assign(prev,curr)
        })
        const siteEditData = JSON.parse(JSON.stringify(siteCreationData))
        this.state = {
            selected: [],
            siteData : [],
            managerData : [],
            selectedAdmin : null,
            createSiteMenu: false,
            siteCreationData: siteCreationData,
            editSiteMenu: false,
            siteEditData : siteEditData,
            deleteSiteMenu: false,
            createSubscriptionMenu: false,
            subscriptionCreationData: {},
            subs: [],
            selectedSubs: [],
            weeklyJerryCans: "",
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
            if (linker.siteManagerID === selected) {
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
            if (!this.state.managerSiteLinkers.some((managerSiteLinker)=>managerSiteLinker.siteManagerID===selectedsiteManagerID && managerSiteLinker.siteID===selectedSite)) {
                return selectedSite
            }
        })
        // Gets sites that we need to remove
        let sitesToRemove = this.state.managerSiteLinkers.map((managerSiteLinker)=>{
            if (managerSiteLinker.siteManagerID === selectedsiteManagerID && !this.state.selected.includes(managerSiteLinker.siteID))
                return managerSiteLinker.id
        })
        // Unlink removed sites
        DataStore.delete(ManagerSiteLinker, (asl) => asl.or((asl) => sitesToRemove.reduce((asl, id) => asl.id("eq",id), asl)))


        // Link new sites
        for (const site in linkedSites) {
            try {
                await DataStore.save(
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
    async createSubscription() {
        try {
            await DataStore.save(
                new Sub({
                    id: this.state.subscriptionCreationData.name,
                    name: this.state.subscriptionCreationData.name,
                    pricePerMonth: parseFloat(this.state.subscriptionCreationData.pricePerMonth),
                    weeklyJerryCans: 0,
                })
            )
        } catch (error) {
            console.log("Error saving sub", error);
        }
        this.setState({
            createSubscriptionMenu: false
        })
        this.setState({
            subs: await DataStore.query(Sub)
        })

    }
    checkSiteValid() {
        let anyError = false
        console.log(this.state.siteCreationData)
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
    async createSite() {
        try {
            await DataStore.save(
                new Site({
                    name: this.state.siteCreationData.name,
                    description: this.state.siteCreationData.description,
                    serviceRadius: parseFloat(this.state.siteCreationData.serviceRadius),
                    latitude: parseFloat(this.state.siteCreationData.latitude),
                    longitude: parseFloat(this.state.siteCreationData.longitude),
                    subs: this.state.selectedSubs,
                    averageWait: parseInt(this.state.siteCreationData.averageWait),
                    averageLine: parseInt(this.state.siteCreationData.averageLine),
                    online: true,
                })
            )
        } catch (error) {
            console.log("Error saving site", error);
        }
        this.setState({
            createSiteMenu: false
        })
        this.setState({
            siteData: await DataStore.query(Site)
        })
    }
    async updateSite() {
        let anyError = false
        console.log(this.state.siteEditData)
        let currentData = this.state.siteEditData
        siteRequirements.map((requirement)=> {
            if (!requirement.regex.test(this.state.siteEditData[requirement.id]))
                anyError = true
            currentData[requirement.id+"Error"]= !requirement.regex.test(this.state.siteEditData[requirement.id])
        })
        this.setState({
            siteEditData: currentData
        })
        if (!anyError) {
            try {
                let site = await DataStore.query(Site, this.state.selected[0])
                console.log(site)
                await DataStore.save(
                    Site.copyOf(site, updated => {
                        updated.name= this.state.siteEditData.name;
                        updated.description= this.state.siteEditData.description;
                        updated.serviceRadius= parseFloat(this.state.siteEditData.serviceRadius);
                        updated.latitude= parseFloat(this.state.siteEditData.latitude);
                        updated.longitude= parseFloat(this.state.siteEditData.longitude);
                        updated.subs= this.state.selectedSubs;
                        updated.averageWait= parseInt(this.state.siteEditData.averageWait);
                        updated.averageLine= parseInt(this.state.siteEditData.averageLine);
                        updated.online= true;
                    })
                )
            } catch (error) {
                console.log("Error saving site", error);
            }
            this.setState({
                editSiteMenu: false
            })
            this.setState({
                siteData: await DataStore.query(Site)
            })
        }


        console.log(this.state.siteEditData)
    }
    async deleteSite() {
        try {
            for (const site in this.state.selected) {
                console.log(this.state.selected[site])
                DataStore.delete(Site, this.state.selected[site])
            }
        } catch (error) {
            console.log("Error deleting site", error);
        }
        this.setState({
            deleteSiteMenu: false
        })
        this.setState({
            siteData: await DataStore.query(Site)
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
                    Manage permissions by Administrator
                </Typography>
                <Grid container direction={"row"}>
                    <Grid container xs={6} style = {{ height: "50vh"}} id = "adminGrid" direction={"column"}>
                        <DataGrid
                            rows={this.state.managerData}
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
                            selectionModel = {this.state.selected}
                            onSelectionModelChange={(input)=>{this.setState({selected: input})
                            console.log(this.state.selected)}}
                        />
                    </Grid>
                </Grid>
                <Grid container direction={"row"}>
                    <Grid container xs={6}>
                        <Button variant="outlined" onClick={this.updateSites.bind(this)}>Update Sites Administrated</Button>
                    </Grid>
                    <Grid container xs={6}>
                        <Button xs={4} variant="outlined" onClick={()=>{this.setState({createSiteMenu: true})}}>
                            Create New Site
                        </Button>
                        <Button xs={4} variant="outlined" onClick={()=>{
                            if (this.state.selected.length > 0)
                                this.setState({editSiteMenu: true})}}>
                            Edit Selected Site
                        </Button>
                        <Button xs={4} variant="outlined" onClick={()=>{this.setState({deleteSiteMenu: true})}}>
                            Delete Selected Sites
                        </Button>
                    </Grid>
                </Grid>
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

                                    {this.state.subs.map((sub)=> {
                                        const val = sub.name+" ("+sub.weeklyJerryCans+"/ $"+sub.pricePerMonth+")"
                                        return <MenuItem key = {val+"key"} value = {sub.id}>
                                            {val}
                                        </MenuItem>
                                    })}
                                </Select>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>{this.setState({createSiteMenu: false})}}>Cancel</Button>
                        <Button onClick={this.checkSiteValid.bind(this)}>Create</Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={this.state.editSiteMenu} onClose={()=>{this.setState({editSiteMenu: false})}} maxWidth={"md"} >
                    <DialogTitle>{"Edit Site " + this.state.selected[0]}</DialogTitle>
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

                                    {this.state.subs.map((sub)=> {
                                        const val = sub.name+" ("+sub.weeklyJerryCans+"/ $"+sub.pricePerMonth+")"
                                        return <MenuItem key = {val+"key"} value = {sub.id}>
                                            {val}
                                        </MenuItem>
                                    })}
                                </Select>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
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
                <Button variant="outlined" onClick={()=>{this.setState({createSubscriptionMenu: true})}}>
                    Create New Subscription Model
                </Button>
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

export default AccessManager;
import React, {useState} from "react";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {Button, Container, Grid, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {DataGrid} from "@mui/x-data-grid";
import { GridRowParams } from '@mui/x-data-grid';
import {listAdministrators, listAdminSiteLinkers, listCustomerSiteLinkers, listSites} from "../../graphql/queries";
import {createAdminSiteLinker} from "../../graphql/mutations";

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

        const adminSiteLinkerPromise = API.graphql(graphqlOperation(listAdminSiteLinkers))
        const sitePromise = API.graphql(graphqlOperation(listSites))
        const adminPromise = API.graphql(graphqlOperation(listAdministrators))
        await Promise.all([adminSiteLinkerPromise,sitePromise,adminPromise]).then (([adminSiteLinker, site, admin])=>{
            this.setState({
                adminSiteLinkers: adminSiteLinker.data.listAdminSiteLinkers.items,
                siteData: site.data.listSites.items,
                adminData: admin.data.listAdministrators.items
            })
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            siteData : [
                // {id: "site0", name: "Site 0"},
                // {id: "site1", name: "Site 1"},
                // {id: "site2", name: "Site 2"},
                // {id: "site3", name: "Site 3"},
            ],
            adminData : [
                // {id: "admin0", name: "Admin 0"},
                // {id: "admin1", name: "Admin 1"},
                // {id: "admin2", name: "Admin 2"},
                // {id: "admin3", name: "Admin 3"},
            ],
            selectedAdmin : null
        }
    }
    getAdminSelected(selected) {
        let selectedSites = []
        this.state.adminSiteLinkers.map((linker)=>{
            if (linker.adminID == selected) {
                selectedSites.push(linker.siteID)
            }
        })
        this.setState({
            selected: selectedSites,
            selectedAdmin: selected
        })
    }
    async updateSites() {
        let newAdminSiteLinkers = []
        const linkedSites = this.state.adminSiteLinkers.map((adminSiteLinker)=>{
            console.log(adminSiteLinker)
        })
        for (const selectedSite in this.state.selected) {
            newAdminSiteLinkers.push(API.graphql(graphqlOperation(createAdminSiteLinker, {input: {adminID: this.state.selectedAdmin[0], siteID: this.state.selected[selectedSite]}})))
        }
        await Promise.all(newAdminSiteLinkers)
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
                            rows={this.state.adminData}
                            columns={adminColumn}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            onSelectionModelChange={this.getAdminSelected.bind(this)}
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
                            onSelectionModelChange={(input)=>{this.setState({selected: input})}}
                        />
                    </Grid>
                </Grid>
                <Button variant="outlined" onClick={this.updateSites.bind(this)}>Update Sites Administrated</Button>
            </Grid>


        )
    }
}

export default AccessManager;
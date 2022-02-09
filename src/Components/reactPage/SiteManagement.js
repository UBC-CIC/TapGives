import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import {Auth} from "aws-amplify";
import AdministrationBackendHelper from "../Helpers/AdministrationBackendHelper";

const columns = [
    {
        field: 'siteID',
        headerName: 'Site ID',
        type: 'string',
        width: 200,
        editable: true,
    },
    { field: 'id', headerName: 'Customer ID', width: 200 },
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
        editable: true,
    },
    {
        field: 'siteSubscriptionID',
        headerName: 'subscription',
        width: 200,
        editable: true,
    },
]

class siteManagement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: []
        }
    }
    async getlist() {
        // // username of current user
        const email = (await Auth.currentAuthenticatedUser()).attributes.email;
        const sites = await AdministrationBackendHelper.getSiteIDsBySiteManager(email)
        let totalCustomers = []
        for (const site in sites) {
            totalCustomers.push(...(await AdministrationBackendHelper.getCustomersBySiteFast(sites[site])))
        }
        this.setState({
            customers: totalCustomers
        })
    }
    async componentDidMount() {
        await this.getlist()
    }

    render() {
        return (
            <div style={{ height: "80vh", width: '100%' }}>
                <DataGrid
                    rows={this.state.customers}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        );
    }
}
export default siteManagement
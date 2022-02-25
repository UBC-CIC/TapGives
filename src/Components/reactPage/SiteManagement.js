import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import {Auth} from "aws-amplify";
import AdministrationBackendHelper from "../Helpers/AdministrationBackendHelper";



class siteManagement extends React.Component {

    constructor(props) {
        super(props)
        const columns = [
            {
                field: 'siteID',
                headerName: this.props.siteID,
                type: 'string',
                width: 200,
                editable: true,
            },
            {
                field: 'IDNumber',
                headerName: this.props.customerID,
                width: 200 
            },
            {
                field: 'name',
                headerName: this.props.firstName,
                width: 200,
                editable: true,
            },
        ]
        this.state = {
            customers: [],
            columns: columns,
        }
    }
    async getlist() {
        // // username of current user
        const id = (await Auth.currentAuthenticatedUser()).attributes.sub;
        const sites = await AdministrationBackendHelper.getSiteIDsBySiteManager(id)
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
                    columns={this.state.columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    getRowId={(row) => row.IDNumber+row.siteID} // Because for customers use IDNumber instead of id
                />
            </div>
        );
    }
}
export default siteManagement
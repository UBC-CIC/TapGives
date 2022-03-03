import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import {Auth} from "aws-amplify";
import AdministrationBackendHelper from "../Helpers/AdministrationBackendHelper";
import {connect} from "react-redux";



class siteManagement extends React.Component {

    constructor(props) {
        super(props)
        const columns = [
            {
                field: 'siteID',
                headerName: this.props.strings.siteID,
                type: 'string',
                width: 200,
                editable: true,
            },
            {
                field: 'governmentID',
                headerName: this.props.strings.customerID,
                width: 200 
            },
            {
                field: 'firstName',
                headerName: this.props.strings.firstName,
                width: 200,
                editable: true,
            },
            {
                field: 'lastName',
                headerName: this.props.strings.lastName,
                width: 200,
                editable: true,
            },
        ]
        console.log(props)
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
        console.log(this.state.customers)
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
                    // getRowId={(row) => row.governmentID+row.siteID} // Because for customers use IDNumber instead of id
                />
            </div>
        );
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



export default connect(mapStateToProps)(siteManagement);
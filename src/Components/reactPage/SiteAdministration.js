import React from "react";
import {
    Button,
    Checkbox,
    FormControl,
    Grid,
    InputLabel,
    ListItemText,
    MenuItem, OutlinedInput,
    Select,
    TextField
} from "@material-ui/core";
import { DataGrid } from '@mui/x-data-grid';
import {API, Auth, graphqlOperation} from "aws-amplify";
import {
    getAdministrator,
    listAdminSiteLinkers,
    listCustomers,
    listCustomerSiteLinkers,
    listSites
} from "../../graphql/queries";

const columns = [
        {
            field: 'siteID',
            headerName: 'Site ID',
            type: 'string',
            width: 200,
            editable: true,
        },
        { field: 'customerID', headerName: 'Customer ID', width: 200 },
        {
            field: 'name',
            headerName: 'Name',
            width: 110,
            editable: true,
        },
        {
            field: 'remainingJerryCans',
            headerName: 'Remaining Cans',
            type: 'number',
            width: 200,
            editable: true,
        },
        {
            field: 'weeklyJerryCans',
            headerName: 'Weekly Cans',
            type: 'number',
            width: 200,
            editable: true,
        },
    ]
let rows = []
async function handleChange() {

}


class siteAdministration extends React.Component {
    constructor(props) {
        super(props)
    }
    async extractCustomers(siteList){
        let custList = []
        for (const site in siteList) {
            custList.push(...siteList[site].data.listCustomerSiteLinkers.items)
        }
        let customerList = []
        for (const customer in custList) {
            customerList.push({id: {eq: custList[customer].customerID}})
        }
        customerList = (await API.graphql(graphqlOperation(listCustomers, {filter: {or: customerList}}))).data.listCustomers.items;
        // console.log(customerList)
        for (const customer in custList) { // Iterating through list of customer id + site info
            try {
                custList[customer].name = customerList.find((custInfo)=>{
                    return custList[customer].customerID === custInfo.id
                }).name
            } catch (err) {
                console.log("Failed to match connection to customer: " + err.message)
            }
        }
        return custList
    }
    async getlist() {
        const email = (await Auth.currentAuthenticatedUser()).attributes.email; //username of current user
        // site ids related to admin
        const admin = await API.graphql(graphqlOperation(listAdminSiteLinkers, {filter: {adminID: {eq: email}}}))
        const data = (admin.data.listAdminSiteLinkers.items)
        let siteCustomersPromises = []
        for (const entry in data) {
            console.log(data[entry].siteID)
            siteCustomersPromises.push(API.graphql(graphqlOperation(listCustomerSiteLinkers, {filter: {siteID: {eq: data[entry].siteID}}})))
            // TODO: Handle request when over max limit (unknown limit, but was told its 11 000, or 10mb)
        }
        const out = await Promise.all(siteCustomersPromises)
        rows = await this.extractCustomers(out)
        console.log(rows)
        this.forceUpdate()
    }
    async componentDidMount() {
        await this.getlist()
    }

    render() {
        return (
            <div style={{ height: {}, width: '100%' }}>
                <DataGrid
                    rows={rows}
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
export default siteAdministration
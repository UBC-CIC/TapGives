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
import {API, Auth, DataStore, graphqlOperation} from "aws-amplify";
import {
    getAdministrator,
    listCustomers,
    listCustomerSiteLinkers,
    listSites
} from "../../graphql/queries";
import {Customer, CustomerSiteLinker, ManagerSiteLinker, Site} from "../../models";

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

async function handleChange() {

}


class siteManagement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: []
        }
    }
    async extractCustomers(siteList){
        let custList = []
        for (const site in siteList) {
            custList.push(...siteList[site])
        }
        let customerList = DataStore.query(Customer, (c) =>
            c.or((c) => custList.reduce((c, person) => c.id('eq', person.customerID), c))
        )
        // console.log(customerList)
        for (const customer in custList) { // Iterating through list of customer id + site info
            try {
                custList[customer].name = customerList.find((custInfo)=>{
                    return custList[customer].customerID == custInfo.id
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
        let data = await DataStore.query(ManagerSiteLinker, (linker) => linker.siteManagerID("eq", email))
        let siteCustomersPromises = []
        for (const entry in data) {
            siteCustomersPromises.push(DataStore.query(CustomerSiteLinker, csl => csl.siteID("eq",data[entry].siteID)))
            // TODO: Handle request when over max limit (unknown limit, but was told its 11 000, or 10mb)
        }
        const out = await Promise.all(siteCustomersPromises)

        this.setState({
            rows: await this.extractCustomers(out)
        })
    }
    async componentDidMount() {
        await this.getlist()
    }

    render() {
        return (
            <div style={{ height: "80vh", width: '100%' }}>
                <DataGrid
                    rows={this.state.rows}
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
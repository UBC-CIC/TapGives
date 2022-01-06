import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import {Auth, DataStore} from "aws-amplify";
import {Administrator, Customer, CustomerSiteLinker, ManagerSiteLinker, Site, SiteManager} from "../../models";

const columns = [
    {
        field: 'siteID',
        headerName: 'Site ID',
        type: 'string',
        width: 200,
        editable: true,
    },
    {
        field: 'site',
        headerName: 'Site Name',
        type: 'string',
        width: 200,
        editable: true,
    },
    { field: 'customerID', headerName: 'Customer ID', width: 200 },
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
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

class siteManagement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: []
        }
    }
    async extractCustomers(ownedCustomerSiteLinkers){
        let cleanedLinkers = []
        for (const site in ownedCustomerSiteLinkers) {
            cleanedLinkers.push(...ownedCustomerSiteLinkers[site])
        }
        let customerList = await DataStore.query(Customer, (c) =>
            c.or((c) => cleanedLinkers.reduce((c, person) => c.id('eq', person.customerID), c))
        )
        let managedSiteList = await DataStore.query(Site)
        console.log("")
        console.log("Sitelist", managedSiteList)
        console.log("cleaned linkers", cleanedLinkers)
        console.log(customerList)
        for (const customer in cleanedLinkers) { // Iterating through list of customer id + site info
            try {
                cleanedLinkers[customer] = Object.assign({}, cleanedLinkers[customer], {
                    name: customerList.find((custInfo)=>{
                        return cleanedLinkers[customer].customerID === custInfo.id
                    }).name,
                    site: managedSiteList.find((siteInfo)=>{
                        return cleanedLinkers[customer].siteID === siteInfo.id
                    }).name
                })
            } catch (err) {
                console.log("Failed to match connection to customer: " + err.message)
            }
        }
        return cleanedLinkers
    }
    async getlist() {
        const email = (await Auth.currentAuthenticatedUser()).attributes.email; //username of current user
        const siteManagerID = (await DataStore.query(SiteManager, (siteManager)=> siteManager.name("eq", email)))[0].id
        // site ids owned by site manager
        let data = await DataStore.query(ManagerSiteLinker, (linker) => linker.siteManagerID("eq", siteManagerID))
        let siteCustomersPromises = []
        console.log(data)
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
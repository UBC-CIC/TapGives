import React from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import { DataGrid } from '@mui/x-data-grid';
import {API, Auth, graphqlOperation} from "aws-amplify";
import {getAdministrator, listCustomerSiteLinkers} from "../../graphql/queries";
class siteAdministration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columns : [
                { field: 'id', headerName: 'ID', width: 90 },
                {
                    field: 'name',
                    headerName: 'Name',
                    width: 150,
                    editable: true,
                },
                {
                    field: 'remainingJerryCans',
                    headerName: 'Remaining Cans',
                    type: 'number',
                    width: 110,
                    editable: true,
                },
                {
                    field: 'weeklyJerryCans',
                    headerName: 'Weekly Cans',
                    type: 'number',
                    width: 110,
                    editable: true,
                },
            ]
        }
    }
    async getlist() {
        const returnedUser = await Auth.currentAuthenticatedUser(); //username of current user
        let sites = (await API.graphql(graphqlOperation(getAdministrator, {id: returnedUser.attributes.email}))).data.getAdministrator.sites.items//queries sites that belong to user
        // console.log(JSON.stringify(sites))
        for (const site in sites) {
            // console.log(JSON.stringify(sites[site]))
            const customers = (await API.graphql(graphqlOperation(listCustomerSiteLinkers, {filter: {siteID: {eq: sites[site].id}}}))).data.listCustomerSiteLinkers.items
            console.log(JSON.stringify(customers))
        }
    }
    async componentDidMount() {
        await this.getlist()
    }

    render() {
        return (
            // <DataGrid >
            //     columns = {this.state.columns}
            //     rows = {this.state.rows}
            // </DataGrid>
            <div>temp</div>
        )
    }
}
export default siteAdministration
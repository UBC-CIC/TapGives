import React from "react";
import {Auth, DataStore} from "aws-amplify";
import {Site} from "../../models";
import "./SiteInformation.css"
import Grid from "@material-ui/core/Grid";

class SiteInformation extends React.Component {
    constructor(props) {
        super(props)
        //extracts the /siteInformation/[siteID]
        const url = window.location.pathname
        const siteID = url.substring(17)
        this.state = {
            siteID: siteID,
            site: null
        }
    }
    async componentDidMount() {
        this.setState({
            site: await DataStore.query(Site, this.state.siteID)
        })
    }

    render(){
        return(
            <Grid container direction={"row"} xs={12}>

                <Grid container direction={"column"} xs = {4}>
                    test
                </Grid>
                <Grid container direction={"column"} xs = {4}>
                    test
                </Grid>
                <Grid container direction={"column"} xs = {4}>
                    <div >
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Last month</th>
                                <th>Current month (% change)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>Total Revenue</th>
                                <td>1000</td>
                                <td>2000</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Grid>
            </Grid>

        )

    }
}

export default SiteInformation
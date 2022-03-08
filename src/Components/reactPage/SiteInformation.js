import React from "react";
import {Auth} from "aws-amplify";
import {Site} from "../../models";
import "./SiteInformation.css"
import Grid from "@material-ui/core/Grid";
import { Chart } from "react-google-charts";
const data = [
    ["Quarks", "Leptons", "Gauge Bosons", "Scalar Bosons"],
    [2 / 3, -1, 0, 0],
    [2 / 3, -1, 0, null],
    [2 / 3, -1, 0, null],
    [-1 / 3, 0, 1, null],
    [-1 / 3, 0, -1, null],
    [-1 / 3, 0, null, null],
    [-1 / 3, 0, null, null],
];
const options = {
    title: "Visit History",
    legend: { position: "top", maxLines: 2 },
    // colors: ["#5C3292", "#1A8763", "#871B47", "#999999"],
    interpolateNulls: false,
};
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

        })
    }

    render(){
        return(
            <Grid container direction={"row"} xs={12}>
                <Grid item xs = {12}>
                    <div >
                        <Chart
                            chartType="Histogram"
                            width="100%"
                            height="400px"
                            data={data}
                            options={options}
                        />
                    </div>
                </Grid>
            </Grid>

        )

    }
}

export default SiteInformation
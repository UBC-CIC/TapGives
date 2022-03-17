import React from "react";
import {API, Auth} from "aws-amplify";
import {Site} from "../../models";
import "./SiteInformation.css"
import Grid from "@material-ui/core/Grid";
import { Chart } from "react-google-charts";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@material-ui/core";
import theme from "../../themes";
import * as PropTypes from "prop-types";
import AdministrationBackendHelper from "../Helpers/AdministrationBackendHelper";
import MapComponent from "./MapComponent";
import * as queries from "../../graphql/queries";
import {connect} from "react-redux";

function ThemeProvider(props) {
    return null;
}

ThemeProvider.propTypes = {
    theme: PropTypes.any,
    children: PropTypes.node
};

class SiteInformation extends React.Component {
    constructor(props) {
        super(props)
        const siteRequirements = [
            {
                id: "name",
                label: this.props.strings.siteName,
                xs: 12,
                processor: (input)=>(input),
            },
            {
                id:"description",
                label: this.props.strings.description,
                xs: 12,
                processor: (input)=>(input),
            },
            {
                id:"smsDescription",
                label: this.props.strings.smsDescription,
                xs: 12,
                processor: (input)=>(input),
            },
            {
                id: "nickname",
                label: this.props.strings.nickname,
                xs: 4,
                processor: (input)=>(input),
            },
            {
                id: "serviceRadius",
                label: this.props.strings.serviceRadius,
                xs: 4,
                processor: (input)=>(input),
            },
            {
                id: "latitude",
                label: this.props.strings.latitude,
                xs: 4,
                processor: (input)=>(input),
            },
            {
                id: "longitude",
                label: this.props.strings.longitude,
                xs: 4,
                processor: (input)=>(input),
            },
            {
                id: "avgWaitMinute",
                label: this.props.strings.avgWaitMinute,
                xs: 4,
                processor: (input)=>(input),
            },
            {
                id: "avgLineCount",
                label: this.props.strings.avgLineCount,
                xs: 4,
                processor: (input)=>(input),
            },
            {
                id: "subscriptionFee",
                label: this.props.strings.subscriptionFee,
                xs: 4,
                processor: (input)=>(input),
            },
            {
                id: "expectedJerrycans",
                label: this.props.strings.expectedJerrycans,
                xs: 4,
                processor: (input)=>(input),
            },
        ]
        let graphData = [
            ["Hour", "Visits"],
            [0,0],
            [23,0],
        ];
        // for (let hour = 0; hour < 24; hour++) {
        //     graphData.push([hour, 1150-Math.abs(hour*100-1150)])
        // }
        const graphOptions = {
            title: "Site Visits",
            legend: { position: "bottom" },
            hAxis: {
                title: graphData[0][0],
            },
            vAxis: {
                title: graphData[0][1],
            },
        };
        const siteID = props.siteID

        this.state = {
            siteID: siteID,
            site: null,
            graphData: graphData,
            graphOptions: graphOptions,
            siteData: {},
            siteVisits: [],
            siteRequirements: siteRequirements,
        }
        this.processAthena()
    }
    async processAthena() {
        let data = (await API.graphql({
            query: queries.athenaCall,
            variables: {
                siteID: this.state.siteID,
                year: 2022,
                month: 3,
                day: -1,
                hour: -1,
            }
        })).data.athenaCall
        let split = (data.split('\n')) // last row is just an empty row
        split.pop()
        split.shift()
        let regex = new RegExp(/"/, "g")
        for (let row in split) {
            // in shape string "col", "col",
            split[row] = split[row].replaceAll(regex,"")
            split[row] = split[row].split(",").map((num)=>(parseInt(num)))
        }
        split.sort((hour)=>(hour[0]))
        split.unshift(this.state.graphData[0])
        this.setState({graphData: split})
        console.log(this.state.graphData)
    }
    async componentDidMount() {
        this.setState({
            siteData: await AdministrationBackendHelper.getSite(this.state.siteID),
            siteVisits: await AdministrationBackendHelper.getTransactionsBySite(this.state.siteID),
        })
        console.log(this.state.siteVisits)
    }

    render(){
        return(
            <Grid container direction={"row"} spacing={2} >
                <Grid item xs={6} md={4}>
                    <Paper >
                        <div style ={{width: "100%", height: "800px", overflowY: "scroll"}}>
                            <TableContainer>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" colSpan="100%" >
                                                <div class="title">
                                                    {this.props.strings.siteInformation}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.siteRequirements.map((key) => (
                                            <TableRow>
                                                <TableCell>{key.label}</TableCell>
                                                <TableCell>{this.state.siteData[key.id]}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Paper>

                </Grid>
                <Grid item xs={6} md={4} >
                    <Paper>
                        <Grid container direction={"column"} alignContent={"center"}>
                            <Chart
                                chartType="LineChart"
                                width="100%"
                                height="400px"
                                data={this.state.graphData}
                                options={this.state.graphOptions}
                            />
                            <MapComponent siteID = {this.state.siteID}/>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs = {12} md={4}>

                    <Paper>
                        <div style={{ height: "800px", width: '100%', overflowY: "scroll"}}>
                            <TableContainer>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan="100%">
                                            <div className="title">
                                                {this.props.strings.recentVisits}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Customer Name</TableCell>
                                        <TableCell align="right">Phone Number</TableCell>
                                        <TableCell align="right">Action</TableCell>
                                        <TableCell align="right">Collected Item Type</TableCell>
                                        <TableCell align="right">Collected item Count</TableCell>
                                    </TableRow>
                                </TableHead>
                                {this.state.siteVisits.map((visit)=> (
                                    <TableRow key = {visit.userPhoneNumber}>
                                        <TableCell align="right">{visit.fullName}</TableCell>
                                        <TableCell align="right">{visit.userPhoneNumber}</TableCell>
                                        <TableCell align="right">{visit.action}</TableCell>
                                        <TableCell align="right">{visit.collectedItemType}</TableCell>
                                        <TableCell align="right">{visit.collectedCount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableContainer>
                        </div>
                    </Paper>
                </Grid>
            </Grid>


        )

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



export default connect(mapStateToProps)(SiteInformation);
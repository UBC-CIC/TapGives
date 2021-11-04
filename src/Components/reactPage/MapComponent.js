import React, {Component} from 'react';
import Amplify, {API, Auth, graphqlOperation} from "aws-amplify";
import amplifyConfig from "../../aws-exports";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapPage.css'
import LocationServiceHelper from '../Helpers/LocationServiceHelper'
import {Button, Grid, TextField} from "@material-ui/core";
import * as turf from "@turf/turf";
import {createAdministrator} from "../../graphql/mutations";
import {getAdministrator, getSite, listAdministrators} from "../../graphql/queries";


let map;
let marker;
let credentials;
let locationService;
let count = 0;
const AWS = require("aws-sdk");
const placeIndex = process.env.REACT_APP_PLACE_INDEX_NAME;
const locationHelper = new LocationServiceHelper()
Amplify.configure(amplifyConfig);
mapboxgl.accessToken = 'pk.eyJ1Ijoiampycnl5YWEiLCJhIjoiY2t1c3hibG40MDByaTJubGZrdDk1bzVrOCJ9.O6j5dPECPW8YWjBOb8eR6w';//process.env.accessToken

//Getting current user credentials
async function getLocationService(){
    credentials = await Auth.currentCredentials();
    locationService = new AWS.Location({
        credentials,
        region: amplifyConfig.aws_project_region,
    });
}

//Construct a container to render a map, add navigation (zoom in and out button),
//geolocate(top right button to locate user location) control and drawl tools
async function constructMap(container){
    map = await locationHelper.constructMapWithCenter(container,[-123.14229959999999, 49.2194576 ])
    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
        })
    );

    marker = new mapboxgl.Marker()
    map.resize()

}
//Used by createMarker to create a circle around the marker to indicate range of well
function createCircle(lng, lat, radius) {
    const center = [lng,lat]
    const options = {steps: 50, units: 'kilometers', properties: {foo: 'bar'}};
    const circle = turf.circle(center, radius, options);
    const name = "polygon"+String(count++)
    try {
        map.addSource(name, {type: "geojson", data:circle});

        map.addLayer({
            "id": name,
            "type": "fill",
            "source": name,
            "paint": {
                "fill-color": "blue",
                "fill-opacity": 0.25
            }
        });
    } catch (e) {
        map.on("load", ()=> {
            map.addSource(name, {type: "geojson", data:circle});

            map.addLayer({
                "id": name,
                "type": "fill",
                "source": name,
                "paint": {
                    "fill-color": "blue",
                    "fill-opacity": 0.25
                }
            });
        })
    }



}
//Generates a Marker with a clickable description on the map
function createMarker(lng, lat, description, radius) {
    if (isNaN(lng)) {
        lng = map.getCenter().lng
        lat = map.getCenter().lat
    }
    console.log(String(lng)+String(lat)+String(description)+String(radius))
    createCircle(lng, lat, radius ?radius:5)
    const marker2 = new mapboxgl.Marker({ color: 'black'})
        .setLngLat([lng, lat])
        .addTo(map);
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        description?description:'No Information'
    );
    marker2.setPopup(popup);
    return marker2;
}
//Triggers when search button is pressed
//reads the content from the search bar, makes an API request to location services
//flies to the location found on the map view.
function searchAndUpdateMapview(map, text){
    let longitude = -123.11335999999994;
    let latitude = 49.260380000000055;
    locationService.searchPlaceIndexForText(
        {
            IndexName: placeIndex,
            Text: text,
            MaxResults: 1,
            BiasPosition: [longitude, latitude]
        },
        (err, response) => {
            if (err) {
                console.error(err)
            }
            else if (response&&response.Results.length>0) {
                longitude = response.Summary.ResultBBox[0]
                latitude = response.Summary.ResultBBox[1]
                marker.setLngLat([longitude, latitude])
                marker.addTo(map)
                map.flyTo({
                    center: [longitude, latitude],
                    essential: true,
                    zoom: 12,
                });
            }
        }
    )
}

function locateAllWells (data){
    const wells = data.getAdministrator.sites.items
    for (const well in wells) {
        console.log(JSON.stringify(wells[well]))
        createMarker(wells[well].longitude, wells[well].latitude, wells[well].description, wells[well].serviceRadius)
    }

}
class mapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBarText: "",
        };
    }

    async componentDidMount() {
        // get current user credentials
        await getLocationService();
        //make map
        await constructMap("map")
        map.resize();

        const returnedUser = await Auth.currentAuthenticatedUser();
        const admin = await API.graphql(graphqlOperation(getAdministrator, {id: returnedUser.attributes.email}))
        locateAllWells(admin.data)
    }

    updateInputText=(e)=>{
        this.setState({
            searchBarText:e.target.value
        });
    }
    handleSearch=()=>{
        searchAndUpdateMapview(map, this.state.searchBarText)
    }

    render(){
        const disableButton=this.state.searchBarText.length===0
        return (
            <Grid direction={"column"} alignItems="center" justify={"center"} >
                <div id={"sbContainer"}>
                    <TextField id="textInput" label="Enter location" type="outlined" value={this.state.text} onChange={e=>this.updateInputText(e)}/>
                    <Button disabled={disableButton} id={'navBtn'} variant="contained" color="primary" style={{textTransform: 'none'}} onClick={this.handleSearch} >
                        Search
                    </Button><Button variant="contained" color="primary" style={{textTransform: 'none'}} onClick={createMarker} >
                        Circle
                    </Button>
                </div>
                <div id="map"></div>
            </Grid>

        )
    }
}

export default mapComponent;
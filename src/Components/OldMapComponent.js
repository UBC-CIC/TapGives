import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import './MapPage.css'
import {Signer} from "@aws-amplify/core";
import * as turf from "@turf/turf";

let map;
const AWS = require("aws-sdk");
let count = 0;


// configuration
const identityPoolId = "us-east-1:80d6e63f-8475-4101-a3a3-792d6bb8f8ef"; // Cognito Identity Pool ID
const mapName = process.env.REACT_APP_MAP_NAME; // Amazon Location Service Map Name
mapboxgl.accessToken = 'pk.eyJ1Ijoiampycnl5YWEiLCJhIjoiY2t1c3hibG40MDByaTJubGZrdDk1bzVrOCJ9.O6j5dPECPW8YWjBOb8eR6w';//process.env.accessToken

// extract the region from the Identity Pool ID
AWS.config.region = identityPoolId.split(":")[0];

// instantiate a Cognito-backed credential provider
const credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: identityPoolId,
});

function transformRequest(url, resourceType) {
    if (resourceType === "Style" && !url.includes("://")) {
        // resolve to an AWS URL
        url = `https://maps.geo.${AWS.config.region}.amazonaws.com/maps/v0/maps/${url}/style-descriptor`
        console.log(url)
    }

    if (url.includes("amazonaws.com")) {
        // only sign AWS requests (with the signature as part of the query string)
        return {
            url: Signer.signUrl(url, {
                access_key: credentials.accessKeyId,
                secret_key: credentials.secretAccessKey,
                session_token: credentials.sessionToken,
            }),
        };
    }

    // don't sign
    return { url };
}

/**
 * Initialize a map.
 */
async function initializeMap(container) {
    // load credentials and set them up to refresh
    await credentials.getPromise();

    // Initialize the map
    map = new mapboxgl.Map({
        container: "mapContainer",
        center: [-123.1187, 49.2819], // initial map centerpoint
        zoom: 10, // initial map zoom
        style: mapName,
        transformRequest,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-left");

}
function createCircle(lng, lat) {
    const center = [lng,lat]
    const radius = 1;
    const options = {steps: 50, units: 'kilometers', properties: {foo: 'bar'}};
    const circle = turf.circle(center, radius, options);
    const name = "polygon"+String(count++)
    map.addSource(name, {type: "geojson", data:circle});

    map.addLayer({
        "id": name,
        "type": "fill",
        "source": name,
        "paint": {
            "fill-color": "blue",
            "fill-opacity": 0.6
        }
    });
}
function createMarker(lng, lat) {
    if (isNaN(lng)) {
        lng = map.getCenter().lng
        lat = map.getCenter().lat
    }
    createCircle(lng, lat)
    const marker2 = new mapboxgl.Marker({ color: 'black'})
        .setLngLat([lng, lat])
        .addTo(map);
}

class OldMapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 4,
            lng: 4,
            zoom: 10,
            circles: 0
        }
    }

    async componentDidMount() {
        // map = mapComponent(mapContainer.current)
        // get current user credentials
        // make map
        await initializeMap("mapContainer")
        map.on("move", ()=>{
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            })
        })
    }



    render(){
        return (
            <div>
                <div className="sidebar">
                    Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
                </div>
                <div id = "mapContainer" />
                <button id="circle" onClick={createMarker}>Circle</button>
            </div>
        );
    }

}

export default OldMapComponent;
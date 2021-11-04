import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import logo from "../../logo.svg";
import MapComponent from '../../Components/reactPage/MapComponent'
function ReactTemplatePage(props) {
    const theme = useTheme();

    return(
                    <MapComponent />
    )
}


export default ReactTemplatePage;
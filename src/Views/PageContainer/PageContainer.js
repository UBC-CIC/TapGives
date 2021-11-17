import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Route, Switch, useHistory} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../../Components/Navbar/Navbar";
import { connect } from "react-redux";
import {updateMenuState} from "../../Actions/menuActions";
import MapComponent from '../../Components/reactPage/MapComponent'
import SiteAdministration from '../../Components/reactPage/SiteAdministration'
import AccessManager from '../../Components/reactPage/AccessManager'
import DataStoreTest from '../../Components/reactPage/DataStoreTest'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    drawerPaper: {
        width: 240,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


function PageContainer(props) {
    const { menuEnabled, updateMenuState } = props;
    const classes = useStyles();
    const history = useHistory();


    /*
    * Handles closing side menu if an event occurs
    * */
    const handleSideMenuClose = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        updateMenuState(false);
    }


    {/* Example side menu is provided below */}
    const list = () => (
        <div
            className={classes.drawerContainer}
            onClick={handleSideMenuClose(false)}
            onKeyDown={handleSideMenuClose(false)}
        >
            <List>
                <ListItem button key={"home"} onClick={() => history.push("/home")}>
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary={"Home"}/>
                </ListItem>
                <ListItem button key={"siteAdmin"} onClick={() => history.push("/siteAdmin")}>
                    <ListItemIcon><DashboardIcon/></ListItemIcon>
                    <ListItemText primary={"Site Administration"}/>
                </ListItem>
                <ListItem button key={"accessManager"} onClick={() => history.push("/accessManager")}>
                    <ListItemIcon><DashboardIcon/></ListItemIcon>
                    <ListItemText primary={"Access Manager"}/>
                </ListItem>
                <ListItem button key={"dataStoreTest"} onClick={() => history.push("/dataStoreTest")}>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary={"DataStore Test"} />
                </ListItem>
            </List>
            <Divider/>
            {/*<List>*/}
            {/*    {['Inactive', 'Inactive', 'Inactive'].map((text, index) => (*/}
            {/*        <ListItem button key={text}>*/}
            {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
            {/*            <ListItemText primary={text} />*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
        </div>
    );

    return(<Grid container>
        {/* Navbar component, set side menu button parameter -->
        button updates redux state to show/hide left sidebar */}
        <Navbar showSideMenuButton={true} />
        {/* App content example below with sidebar */}
        {/* Side menu component */}
        <Drawer
            anchor={'left'} open={menuEnabled} onClose={handleSideMenuClose}
            style={{zIndex: 0}}
            classes={{
                paper: classes.drawerPaper,
            }}
            ModalProps={{ onBackdropClick: handleSideMenuClose() }}
        >
            <Toolbar />
            {/* Side menu items added for rendering */}
            {list()}
        </Drawer>
        <main className={classes.content}>
            {/* Routes are added here if you need multiple page views. otherwise this Switch can be deleted and replaced
            with your app's contents */}
            <Switch>
                <Route exact path={"/"} component={MapComponent} />
                <Route exact path={"/home"} component={MapComponent} />
                <Route exact path={"/siteAdmin"} component={SiteAdministration} />
                <Route exact path={"/accessManager"} component={AccessManager} />
                <Route exact path={"/dataStoreTest"} component={DataStoreTest} />
            </Switch>
        </main>
    </Grid>)
}

const mapStateToProps = (state) => {
    return {
        menuEnabled: state.appState.showSideBar,
    };
};

const mapDispatchToProps = {
    updateMenuState,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
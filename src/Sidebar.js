import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, ListItemText, IconButton } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import {withStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
const styles = theme => ({
    sidebar:{
        width:300
    },
    drawerPaper: {
        width: 300
    },
    drawerHeader:{
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    menuHeader:{
        paddingTop: theme.spacing(5),
    },
    subList:{
        padding: 0,
        paddingLeft: theme.spacing(4),
    },
    subListGroup:{
        paddingBottom:theme.spacing(2),
    }
})
class Sidebar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props;
        return (
            
            <React.Fragment key="Menu">
                <Drawer className={classes.sidebar} open={this.props.drawerOpen} anchor="left" classes={classes.drawerPaper} onClick={() => {this.props.drawerToggle()}}>
                    <div className={classes.sidebar}>
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={() => {this.props.drawerToggle()}}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <Typography align="center" className={classes.menuHeader}>Header</Typography>
                        <ListItem button key="m1" component={NavLink} to="/m1" activeClassName="Mui-selected" exact>
                            <ListItemText primary="menu"/>
                        </ListItem>
                        <div className={classes.subListGroup}>
                        <ListItem button className={classes.subList} key="sub1" component={NavLink} to="/sub1" activeClassName="Mui-selected" exact>
                            <ListItemText secondary="menu"/>
                        </ListItem>
                        <ListItem button className={classes.subList} key="sub2" component={NavLink} to="/sub2" activeClassName="Mui-selected" exact>
                            <ListItemText secondary="menu"/>
                        </ListItem>
                        <ListItem button className={classes.subList} key="sub3" component={NavLink} to="/sub3" activeClassName="Mui-selected" exact>
                            <ListItemText secondary="menu"/>
                        </ListItem>
                        <ListItem button className={classes.subList} key="sub4" component={NavLink} to="/sub4" activeClassName="Mui-selected" exact>
                            <ListItemText secondary="menu"/>
                        </ListItem>
                        <ListItem button className={classes.subList} key="sub5" component={NavLink} to="/sub5" activeClassName="Mui-selected" exact>
                            <ListItemText secondary="menu"/>
                        </ListItem>
                        <ListItem button className={classes.subList} key="sub6" component={NavLink} to="/sub6" activeClassName="Mui-selected" exact>
                            <ListItemText secondary="menu"/>
                        </ListItem>
                        </div>
                        <ListItem button key="m2" component={NavLink} to="/m2" activeClassName="Mui-selected" exact>
                            <ListItemText primary="menu"/>
                        </ListItem>
                    </div>
                </Drawer>
            </React.Fragment>    
        )
    };
}

Sidebar.propTypes = {

};

export default withStyles(styles,{withTheme:true})(Sidebar);
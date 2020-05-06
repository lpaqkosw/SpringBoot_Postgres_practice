import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import Sidebar from './Sidebar'
import {Dialog,DialogTitle,DialogContent,DialogContentText,TextField,DialogActions} from '@material-ui/core/';
const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      login: {
        position: "absolute",
        right: 0,
        height: '100%'
      }
});
class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        }
       

    render() {
        const {classes} = this.props;
        let logInOut;
        if(this.props.loggedin){
            logInOut = <Button color="inherit" className={classes.login} onClick={this.props.handleLogout}>Logout</Button>
        }
        else{
           logInOut = <Button color="inherit" className={classes.login} onClick={this.props.handleLoginWindow}>Login</Button>
        }
        return (
            <React.Fragment>
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {this.props.drawerToggle()}}>
                    <MenuIcon />
                </IconButton>
                <Tab label="Topic" className={classes.topic}></Tab>
                <Tab label="Topic" className={classes.topic}></Tab>
                {logInOut}
                </Toolbar>
            </AppBar>
        </div>
        <Sidebar drawerOpen={this.props.drawerOpen} drawerToggle={this.props.drawerToggle}/>

        {/* Login */}
        <Dialog open={this.props.loginWindow} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title" style={{textAlign:'center'}}>Login</DialogTitle>
                    <DialogContent>
                    <TextField
                            autoFocus
                            margin="normal"
                            id="login"
                            label="ID"
                            type="login"
                            onChange={this.props.handleIdChange}
                            style={{display:'block',margin:'5px'}}
                            error={this.props.textError}
                    />
                     <TextField
                            margin="normal"
                            id="login"
                            label="Password"
                            type="password"
                            onChange={this.props.handlePwChange}
                            error={this.props.textError}
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.props.handleLoginWindow}>
                            Cancel
                        </Button>
                        <Button color="primary" onClick={this.props.handleLogin}>
                            Login
                        </Button>
                    </DialogActions>
                </Dialog>
        </React.Fragment>
        );
    }
}

HeaderMenu.propTypes = {

};

export default withStyles(styles, {withTheme: true})(HeaderMenu);
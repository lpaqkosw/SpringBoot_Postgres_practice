import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    loginPaper:{
        height: 'auto',
        maxWidth:'60vw',
        margin:'auto',
        marginTop:'3rem',
        minWidth:'35vw',
    },
    registerForms:{
        margin: theme.spacing(5),
        display:'flex',
        maxWidth:'30 vw',

        
    }
    
})

class LoginForm extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.loginPaper} style={{alignItems:'center'}}>
                <div>
                    <Typography display="block" variant="h3">Create your account</Typography>
                </div>
                <TextField
                            autoFocus
                            required
                            id="login"
                            label="ID"
                            type="login"
                            variant="outlined"
                            onChange={this.props.handleIdChange}
                            error={this.props.textError}
                            className={classes.registerForms}
                />
                <TextField
                            required
                            id="login"
                            label="Password"
                            type="password"
                            variant="outlined"
                            onChange={this.props.handleIdChange}
                            error={this.props.textError}
                            className={classes.registerForms}
                />

            </div>
        );
    }
}

LoginForm.propTypes = {

};

export default withStyles(styles,{withTheme:true})(LoginForm);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const styles = theme => ({
    loginPaper:{
        height: 'auto',
        maxWidth:'70vw',
        margin:'auto',
        marginTop:'3rem',
        minWidth:'35vw',
    },
    registerForms:{
        margin: theme.spacing(3),
        display:'flex',
        maxWidth:'30vw',
    },
    regButton:{
    margin:theme.spacing(3)
    }
})

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputID:"",
            inputPW:"",
            invalidID:false,
            regsuccess:false
        }

    }

    idInput = (e) => {this.setState({inputID:e.target.value}); console.log(this.state.inputID)};
    pwInput = (e) => this.setState({inputPW:e.target.value});
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.loginPaper} style={{textAlign:'center'}}>
                <div>
                    <Typography display="block" variant="h3" style={{margin:'5%'}}>Create your account</Typography>
                </div>
                <div style={{display:'block'}}>
                <TextField
                            autoFocus
                            required
                            id="login"
                            label="ID"
                            type="login"
                            variant="outlined"
                            onChange={this.idInput}
                            error={this.state.invalidID}
                            className={classes.registerForms}
                            style={{display:'inline-block'}}
                />
                </div>
                <div style={{display:'block'}}>
                <TextField
                            required
                            id="login"
                            label="Password"
                            type="password"
                            variant="outlined"
                            onChange={this.pwInput}
                            className={classes.registerForms}
                            style={{display:'inline-block'}}
                />
                </div>
                <Button variant='contained' color='primary' className={classes.regButton}>Register</Button>
            </div>
        );
    }
}

LoginForm.propTypes = {

};

export default withStyles(styles,{withTheme:true})(LoginForm);
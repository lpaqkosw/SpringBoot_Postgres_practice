import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sub3 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const divstyle={
            display:'flex',
        }
        const style={
            flex:2,
            backgroundColor:'black',
            margin:'5vw',
            width:'5vw',
            height:'5vh'

        }
        return (
            <div style={divstyle}>
            <div style={style}>
            </div>
            <div style={style}>
            </div>
            <div style={style}>
            </div>
            </div>
        );
    }
}

Sub3.propTypes = {

};

export default Sub3;
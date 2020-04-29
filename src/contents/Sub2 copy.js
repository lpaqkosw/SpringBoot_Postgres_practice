import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Divider, Typography, ListItem } from '@material-ui/core';
import { Container, Draggable } from 'react-smooth-dnd';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import {applyDrag} from '../utils/util';
import {withStyles} from "@material-ui/core/styles";
const styles = theme => ({
    paperdiv:{
        display:'flex',
        margin:'10vw'
    },
    paper:{
        flex: 2,
        margin: theme.spacing(3),
        height: '50vh'
    },
    
})
class Sub2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item1:[
                {id:11,name:"aa"},
                {id:12,name:"bb"},
                {id:13,name:"cc"},
                {id:14,name:"dd"},
                {id:15,name:"ee"},
            ],
            item2:[
                {id:21,name:"aa"},
                {id:22,name:"bb"},
                {id:23,name:"cc"},
                {id:24,name:"dd"},
                {id:25,name:"ee"},
            ]
            

        }
    }


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.paperdiv}>
                
                <Paper elevation={3} className={classes.paper}>
                    <div style={{color:'skyblue'}}>
                        <Typography variant="overline" color="initial">asdfasdf</Typography>
                    </div>
                    <List>
                    <Container groupName="1" getChildPayload={i => this.state.item1[i]} onDrop={e => {console.log('removed from item1: '+e.removedIndex);console.log('added to item1: '+e.addedIndex);this.setState({ item1: applyDrag(this.state.item1, e) })}}>
                        {this.state.item1.map((item,i) =>
                            <Draggable key={item.id}>
                                <Divider/>
                                <ListItem>
                                    <ListItemText primary={item.name} />                        
                                </ListItem>
                                <Divider/>
                            </Draggable> 
                        )}
                    </Container>
                    </List>
                    <Divider/>
                </Paper>
                
                
                <Paper elevation={3} className={classes.paper}>
                    <div style={{color:'skyblue'}}>
                        <Typography variant="overline" color="initial">asdfasdf</Typography>
                    </div>
                    <List>
                    <Container groupName="1" getChildPayload={i => this.state.item2[i]} onDrop={e => {console.log('removed from item2: '+e.removedIndex);console.log('added to item2: '+e.addedIndex);this.setState({ item2: applyDrag(this.state.item2, e) })}}>
                        {this.state.item2.map((item,i) =>
                            <Draggable key={item.id}>
                                <Divider/>
                                <ListItem>
                                    <ListItemText primary={item.name} />                        
                                </ListItem>
                                <Divider/>
                            </Draggable> 
                        )}
                    </Container>
                    </List>
                    <Divider/>

                </Paper>
                
                
                <Paper elevation={3} className={classes.paper}></Paper>
                
            </div>
        );
    }
}

Sub2.propTypes = {

};

export default withStyles(styles,{withTheme:true})(Sub2);
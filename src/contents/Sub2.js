import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Divider, Typography, ListItem } from '@material-ui/core';
import { Container, Draggable } from 'react-smooth-dnd';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import {applyDrag} from '../utils/util';
import {withStyles} from "@material-ui/core/styles";
import transitions from '@material-ui/core/styles/transitions';
const styles = theme => ({
    paperdiv:{
        display:'flex',
        margin:'auto',
        height: 'auto',
        width:'auto',
        maxWidth:'70vw',
        minWidth:'35vw'
    },
    paperNew:{
        flex: 2,
        margin: theme.spacing(3),
        height: 'auto',
        backgroundColor: '#ff8080',
        maxWidth:'25vw',
        
    },
    paperInprogress:{
        flex: 2,
        margin: theme.spacing(3),
        height: 'auto',
        backgroundColor: '#ffff80',
        maxWidth:'25vw',
        
    },
    paperDone:{
        flex: 2,
        margin: theme.spacing(3),
        height: 'auto',
        backgroundColor: '#8080ff',
        maxWidth:'25vw',
    },
    slotsNewTODO:{
        flex:1,
        margin: '0.5vw',

    },
    slots:{
        flex:1,
        margin: '0.5vw'
    },
    slots:{
        flex:1,
        margin: '0.5vw'
    },

    slotsOnDrag:{
        flex:1,
        margin: '0.5vw',
        opacity: '0.7'
         
    },

    slotsOnDrop:{
        flex:1,
        margin: '0.5vw',
        opacity:'1'
    },

    dropPlaceholder:{
        borderRadius: '5px',
        background: 'lightred',
        margin: theme.spacing(3),
        width: 'auto',
        height: 'auto',
    },
    typostyle:{
        colorPrimary:'#ffff80'
    },
    DateInProgress:{
        fontSize:'0.01rem',
        marginLeft:'1vw',
        textAlign:'justified',
        paddingBottom:'1vh',
        position:'relative'
    },
    DateDone:{
        fontSize:'0.01rem',
        marginLeft:'1vw',
        textAlign:'justified',
        paddingBottom:'0.1vh',
        position:'relative'
    }
    
})
class Sub2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item1:[
                {id:11,name:"aa",startDate:"",endDate:""},
                {id:12,name:"bb",startDate:"",endDate:""},
                {id:13,name:"cc",startDate:"",endDate:""},
                {id:14,name:"dd",startDate:"",endDate:""},
                {id:15,name:"ee",startDate:"",endDate:""},
            ],
            item2:[
                {id:21,name:"aa",startDate:"2020-20-20",endDate:""},
                {id:22,name:"bb",startDate:"2012-23-20",endDate:""},
                {id:23,name:"cc",startDate:"1010-20-20",endDate:""},
                {id:24,name:"dd",startDate:"1234-56-78",endDate:""},
                {id:25,name:"ee",startDate:"1234-56-78",endDate:""},
            ],

            item3:[

            ]
            

        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.paperdiv}>
                
                <Paper elevation={3} className={classes.paperNew}>
                    <div style={{color:'#ff1a1a'}}>
                        <Typography variant="button" color="button" className={classes.fontsmall}>TODOS</Typography>
                    </div>
                    <List>
                    <Container groupName="1" dropPlaceholder={true} getChildPayload={i => this.state.item1[i]} onDrop={e => {e.payload.startDate="";e.payload.endDate="";console.log('removed from item1: '+e.removedIndex);console.log('added to item1: '+e.addedIndex);console.log(e.payload);this.setState({ item1: applyDrag(this.state.item1, e) })}}>
                        {this.state.item1.map((item,i) =>
                            <Draggable key={item.id}>
                               <Paper elevation={2} className={classes.slotsNewTODO}>
                                    <Typography variant="h6" color="textPrimary">{item.name}<span style={{position:'relative' ,margin:'1vh 1vw 1vh 1vw',height: '10px',width: '10px',backgroundColor: '#ff0000',borderRadius: '50%', display:'inline-block',float:'right'}}></span></Typography>
                                </Paper>
                            </Draggable> 
                        )}
                    </Container> 
                    </List>
                </Paper>
                
                
                <Paper elevation={3} className={classes.paperInprogress}>
                    <div style={{color:'#ffaf1a'}}>
                        <Typography variant="button">IN PROGRESS</Typography>
                    </div>
                    <List>
                    <Container groupName="1" dropPlaceholder={true} getChildPayload={i => this.state.item2[i]} onDrop={e => 
                        {if(e.payload.startDate===""){const date = new Date(); const fdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();e.payload.startDate=fdate};e.payload.endDate="";console.log('removed from item2: '+e.removedIndex);console.log('added to item2: '+e.addedIndex);console.log(e.payload);this.setState({ item2: applyDrag(this.state.item2, e) }
                        )
                        }}>
                        {this.state.item2.map((item,i) =>
                            <Draggable key={item.id}>
                                <Paper elevation={2} className={classes.slots}>
                                    <Typography variant="h6" color="textPrimary">{item.name}<span style={{position:'relative' ,margin:'1vh 1vw 1vh 1vw',height: '10px',width: '10px',backgroundColor: '#ffff00',borderRadius: '50%', display:'inline-block',float:'right'}}></span></Typography>
                                    <Typography color="textSecondary" className={classes.DateDone}>{item.startDate+"  ~  "+ item.endDate}</Typography>
                                </Paper>
                                <p></p>
                            </Draggable> 
                        )}
                        
                    </Container>
                    </List>

                </Paper>
                
                
                <Paper elevation={3} className={classes.paperDone}>
                    <div style={{color:'#4d4dff'}}>
                        <Typography variant="button" >DONE</Typography>
                    </div>
                    <List>
                    <Container groupName="1" dropPlaceholder={true} getChildPayload={i => this.state.item3[i]} onDrop={e => {if(e.payload.endDate===""){const date = new Date(); const fdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();e.payload.endDate=fdate};console.log('removed from item3: '+e.removedIndex);console.log('added to item3: '+e.addedIndex);console.log(e.payload);this.setState({ item3: applyDrag(this.state.item3, e) })}}>
                        {this.state.item3.map((item,i) =>
                            <Draggable key={item.id}>
                                <Paper elevation={2} className={classes.slots}>
                                    <Typography variant="h6" color="textPrimary">{item.name}<span style={{position:'relative' ,margin:'1vh 1vw 1vh 1vw',height: '10px',width: '10px',backgroundColor: '#0000ff',borderRadius: '50%', display:'inline-block',float:'right'}}></span></Typography>
                                    
                                    <Typography color="textSecondary" className={classes.DateDone}>{item.startDate+"  ~  "+item.endDate}</Typography>
                                    
                                </Paper>
                            </Draggable> 
                        )}
                    </Container>
                    </List>

                </Paper>
                
            </div>
        );
    }
}

Sub2.propTypes = {

};

export default withStyles(styles,{withTheme:true})(Sub2);
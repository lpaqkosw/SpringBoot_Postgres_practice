import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Paper, Divider, Typography, ListItem, Dialog } from '@material-ui/core';
import { Container, Draggable } from 'react-smooth-dnd';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import {applyDrag , getPayload1, getPayload2, getPayload3,getTrashPayload} from '../utils/util';
import {withStyles} from "@material-ui/core/styles";
import transitions from '@material-ui/core/styles/transitions';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
const styles = theme => ({
    paperdiv:{
        display:'flex',
        margin:'auto',
        height: 'auto',
        width:'auto',
        maxWidth:'70vw',
        minWidth:'35vw',
        
    },
    paperNew:{
        flex: 2,
        margin: '1vw',
        marginTop: theme.spacing(3),
        backgroundColor: '#ff8080',
        maxWidth:'25vw',
        
        
    },
    paperInprogress:{
        flex: 2,
        margin: '1vw',
        height: 'auto',
        marginTop: theme.spacing(3),
        backgroundColor: '#ffff80',
        maxWidth:'25vw',
        
    },
    paperDone:{
        flex: 2,
        margin: '1vw',
        height: 'auto',
        marginTop: theme.spacing(3),
        backgroundColor: '#8080ff',
        maxWidth:'25vw',
    },
    slots:{
        flex:1,
        margin: '0.2rem'
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
        fontSize:'0.3rem',
        marginLeft:'0.5rem',
        textAlign:'justified',
        paddingBottom:'0.1vh',
        position:'relative'
    },
    AddFab:{
        margin: theme.spacing(3),
    },
    slotfonts:{
        fontSize:'1.5vw',
    },
    trashFab:{
        position:'fixed',
        right:'0',
        bottom:'0',
    },
    fontsmall:{
        fontSize:'0.8rem'
    }
    
})
class Sub2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item1:[
               
            ],
            item2:[
            ],

            item3:[

            ],
            textfield:"",
            dialogOpen:false,
            fabOpen:false,
            trashOpen:false,
            onTrash:false,
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleFabClose = this.handleFabClose.bind(this);
        this.handleFabCancel = this.handleFabCancel.bind(this);
        
    }

    componentDidMount(){
        if(this.props.loggedin===false || this.props.token===""){
            console.log("no fetch");
            return;
        }
        else{
            const token = 'Bearer '+this.props.token
            const requestOption = {
                method:'POST',
                headers:{'Content-Type':'application/json','Accept':'*/*','Authorization':token},
                body:JSON.stringify({"token":this.props.token})
            }
                
            
        fetch('http://175.119.109.254:3001/gettodo',requestOption)
        .then(response=> response.json())
        .then(data => {
            var todo = [];
            var inprogress = [];
            var done =[];
            console.log(data);
            if(data.item1 !== undefined){
                todo=JSON.parse(data.item1);
                console.log("item1 updated");
                console.log(todo);
            }
            if(data.item2 !== undefined){
                inprogress=JSON.parse(data.item2);
                console.log("item2 updated");
                console.log(inprogress);
            }
            if(data.item3 !== undefined){
                done = JSON.parse(data.item3);
                console.log("item3 updated");
                console.log(done);
            }
            // console.log(data);
            // console.log(inprogress);
            // console.log(todo);
            // console.log(this.state.item1);
            this.setState({item1:todo, item2:inprogress, item3:done});
        })
        .catch(error=>{
            console.error("error!",error);
        })    
        }
    }

    componentWillUnmount(){
        if(this.props.token===""){
            console.log("no fetch");
            return;
        }
        else{
            const token = 'Bearer '+this.props.token
            const requestOption = {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({'token':token,'item1':JSON.stringify(this.state.item1),'item2':JSON.stringify(this.state.item2),'item3':JSON.stringify(this.state.item3)})
            }
            fetch('http://175.119.109.254:3001/savetodo',requestOption)
            .then(response=> response.json())
            .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            console.error("error!",error);
        })    
        }
    }

    handleFabClose(a){
        console.log(a);
        var text = this.state.textfield;
        console.log(text);
        var newTODO={
            id:Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            name:""+this.state.textfield,
            startDate:"",
            endDate:""
        }
        if(text !== undefined){
            console.log("text = "+text);
            this.setState({item1:[...this.state.item1,newTODO],dialogOpen:!this.state.dialogOpen,textfield:""});
        }
        else{
        }
    
        return;
    }
    handleFabCancel(a){
        this.setState({dialogOpen:!this.state.dialogOpen});
        return;
    }

    handleTextChange(a){
        console.log(a.target.value);
        this.setState({textfield:a.target.value});
    }

    
    render() {
        const {classes} = this.props;
        let fab;
        if(this.props.loggedin===false){
            fab = null;
        }
        if(this.props.loggedin===true){
            fab=<Fab color="secondary" size="small" className={classes.AddFab} open={this.state.dialogOpen} onClick={() => {this.setState({dialogOpen:!this.state.dialogOpen})}}>
            <AddIcon/>
        </Fab>
        }
        let trash;
        if(this.state.trashOpen===false){
            trash = null;
        }
        else{
            trash =  <Fab color="secondary" style={{position:'fixed', right:'0',bottom:'0'}} size="large" className={classes.AddFab} open={this.state.trashOpen}>
                <Container style={{opacity:'0',height:'150%',width:'300%', backgroundColor:'grey',position:'absolute',zIndex:"99", top:'18%'} }groupName="1" onDragStart={()=>this.setState({trashOpen:true})} dropPlaceholder={true} onDrop={() => this.setState({trashOpen:false})}>

                </Container>    
                <DeleteForeverIcon style={{position:'absolute',zIndex:"1"}}/>
            </Fab>
        }
        
        return (
            <Fragment>
            <div className={classes.paperdiv}>
                {/* Column1 */}
                <Paper elevation={3} className={classes.paperNew}>
                    <div style={{color:'#ff1a1a'}}>
                        <Typography variant="button" className={classes.fontsmall}>TODOS</Typography>
                    </div>
                    <List>
                    <Container groupName="1" dropPlaceholder={true} getChildPayload={i => this.state.item1[i]} onDragStart={()=>this.setState({trashOpen:true})} onDrop={e => {
                        var p1 = getPayload1(e);
                        // console.log(p1);
                        // console.log('removed from item1: '+p1.removedIndex);
                        // console.log('added to item1: '+p1.addedIndex);
                        // console.log(p1.payload);
                        this.setState({ item1: applyDrag(this.state.item1, p1),trashOpen:false })
                        }}>
                        {this.state.item1.map((item,i) =>
                            <Draggable key={item.id}>
                               <Paper elevation={2} className={classes.slots}>
                                   <table>
                                        <tr>
                                            <td width='100%'>
                                            <Typography variant="h6" color="textPrimary" className={classes.slotfonts} >{item.name}</Typography>
                                            </td>
                                            <td>
                                            <span style={{position:'relative' ,margin:'0.5rem',height: '0.4rem',width: '0.4rem',backgroundColor: '#ff0000',borderRadius: '50%', display:'inline-block',float:'right'}}></span>
                                            </td>
                                        </tr>
                                   </table>
                                </Paper>
                            </Draggable> 
                        )}
                    </Container> 
                    {fab}
                    </List>
                </Paper>
                
                {/* Column2 */}
                <Paper elevation={3} className={classes.paperInprogress}>
                    <div style={{color:'#ffaf1a'}}>
                        <Typography variant="button" className={classes.fontsmall}>IN PROGRESS</Typography>
                    </div>
                    <List>
                    <Container groupName="1" dropPlaceholder={true} getChildPayload={i => this.state.item2[i]} onDragStart={()=>this.setState({trashOpen:true})} onDrop={e => {
                        const p2=getPayload2(e);
                        // console.log('removed from item2: '+p2.removedIndex);
                        // console.log('added to item2: '+p2.addedIndex);
                        // console.log(p2.payload);
                        this.setState({ item2: applyDrag(this.state.item2,p2),trashOpen:false })
                        }}>
                        {this.state.item2.map((item,i) =>
                            <Draggable key={item.id}>
                                <Paper elevation={2} className={classes.slots}>
                                    <table>
                                        <tr>
                                            <td width='100%'>
                                            <Typography variant="h6" color="textPrimary" className={classes.slotfonts}>{item.name}</Typography>
                                            </td>
                                            <td>
                                            <span style={{position:'relative' ,margin:'0.5rem',height: '0.4rem',width: '0.4rem',backgroundColor: '#ffff00',borderRadius: '50%', display:'inline-block',float:'right'}}></span>
                                            </td>
                                        </tr>
                                        <tr colspan='2'>
                                            <td><Typography color="textSecondary" className={classes.DateDone}>{item.startDate+"  ~  "+ item.endDate}</Typography></td>
                                        </tr>
                                    </table>
                                    
                                    
                                </Paper>
                            </Draggable> 
                        )}
                    </Container>
                    </List>
                </Paper>
                
                {/* Column3 */}
                <Paper elevation={3} className={classes.paperDone}>
                    <div style={{color:'#4d4dff'}}>
                        <Typography variant="button" >DONE</Typography>
                    </div>
                    <List>
                    <Container groupName="1" dropPlaceholder={true} onDragStart={()=>this.setState({trashOpen:true})} getChildPayload={i => this.state.item3[i]} onDrop={e => {
                        const p3 = getPayload3(e);
                        // console.log('removed from item3: '+p3.removedIndex);
                        // console.log('added to item3: '+p3.addedIndex);
                        // console.log(p3.payload);
                        this.setState({ item3: applyDrag(this.state.item3, p3),trashOpen:false })
                        }}>
                        {this.state.item3.map((item,i) =>
                            <Draggable key={item.id}>
                                <Paper elevation={2} className={classes.slots}>
                                    <table>
                                        <tr>
                                            <td width='100%'><Typography variant="h6" color="textPrimary" className={classes.slotfonts}>{item.name}</Typography></td>
                                            <td><span style={{position:'relative' ,margin:'0.5rem',height: '0.4rem',width: '0.4rem',backgroundColor: '#0000ff',borderRadius: '50%', display:'inline-block',float:'right'}}></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan='2'><Typography color="textSecondary" className={classes.DateDone}>{item.startDate+"  ~  "+item.endDate}</Typography></td>
                                        </tr>
                                    </table>
                                    
                                    
                                </Paper>
                            </Draggable> 
                        )}
                    </Container>
                    </List>
                </Paper>

                

                {/* Dialog */}
                <Dialog open={this.state.dialogOpen} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add TODO</DialogTitle>
                    <DialogContent>
                         <DialogContentText>
                         Enter new TODO
                        </DialogContentText>
                    <TextField
                            autoFocus
                            margin="dense"
                            id="topic"
                            label="New Topic"
                            type="topic"
                            onChange={this.handleTextChange}
                            fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleFabCancel}>
                            Cancel
                        </Button>
                        <Button color="primary" onClick={this.handleFabClose}>
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
                
                
                
            </div>
            {trash}
             {/* <Fab color="secondary" style={{position:'fixed', right:'0',bottom:'0'}} size="large" className={classes.AddFab} open={this.state.trashOpen} onClick={() => {this.setState({dialogOpen:!this.state.dialogOpen})}}>
                <Container style={{opacity:'0',height:'150%',width:'300%', backgroundColor:'grey',position:'absolute',zIndex:"99", top:'18%'} }groupName="1" onDragStart={()=>this.setState({trashOpen:true})} dropPlaceholder={true}>

                </Container>    
                <DeleteForeverIcon style={{position:'absolute',zIndex:"1"}}/>
            </Fab> */}
        </Fragment> 
        );
    }
}

Sub2.propTypes = {

};

export default withStyles(styles,{withTheme:true})(Sub2);
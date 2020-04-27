import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Draggable } from 'react-smooth-dnd';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {applyDrag} from '../utils/util';
import { Divider } from '@material-ui/core';
import {Container as MaterialContainer} from '@material-ui/core/Container';
class Sub1 extends Component {
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
        const groupStyle = {
            display:'flex',
            width:'20vw'
          };

        const divstyle={
            flex:1,
            margin: '5vh 5vw'
        }
        return (
            <div style={divstyle}>
                <List>
             
                    <Container groupName="1" getChildPayload={i => this.state.item1[i]} onDrop={e => {console.log('removed from item1: '+e.removedIndex);console.log('added to item1: '+e.addedIndex);this.setState({ item1: applyDrag(this.state.item1, e) })}}>
                        {this.state.item1.map((item,i) =>
                            <Draggable key={item.id}>
                                <ListItem>
                                    <ListItemText primary={item.name} />                        
                                </ListItem>
                            </Draggable> 
                        )}
                    </Container>
                
                    
                

                
                    <Container groupName="1" getChildPayload={i => this.state.item2[i]} onDrop={e => {console.log('removed from item2: '+e.removedIndex);console.log('added to item2: '+e.addedIndex);this.setState({ item2: applyDrag(this.state.item2, e) })}}>
                        {this.state.item2.map((item,i) =>
                            <Draggable key={item.id}>
                                <ListItem>
                                    <ListItemText primary={item.name} />                        
                                </ListItem>
                            </Draggable> 
                        )}
                    </Container>
                   
                </List>
            </div>
        );
    }
}

Sub1.propTypes = {

};

export default Sub1;
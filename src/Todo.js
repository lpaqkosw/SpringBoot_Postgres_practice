import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import { Container, Draggable } from "react-smooth-dnd";
import {applyDrag} from './utils/util';

class Todo extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <List>
                    <Container dragHandleSelector=".drag-handle" lockAxis="y" onDrop={}>
                        {items.map(({ id, text }) => (
                            <Draggable key={id}>
                            <ListItem>
                                <ListItemText primary={text} />
                                <ListItemSecondaryAction>
                                <ListItemIcon className="drag-handle">
                                    <DragHandleIcon />
                                </ListItemIcon>
                                </ListItemSecondaryAction>
                            </ListItem>
                            </Draggable>
                        ))}
                    </Container>
                </List>
            </div>
        );
    }
}

Todo.propTypes = {

};

export default Todo;
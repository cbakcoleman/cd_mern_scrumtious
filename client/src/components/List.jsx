import './style.css'
import React, {useState, useEffect} from 'react';
import {Card, CssBaseline} from '@mui/material';
import axios from 'axios';
import Title from './Title';
import Task from './Task';
import InputContainer from './InputContainer';
import {Droppable, Draggable, DragDropContext} from 'react-beautiful-dnd';


const List = ({list}) => {
    console.log(list);
    console.log(list.tasks);

    return (
        <div >
            
            <Card  className={"card "}>
                <CssBaseline/>
                <Title title={list.title} listId={list.id}/>
                <Droppable droppableId={list.id }>
                    { (provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} >
                        {list.tasks.map( (task, index) => {
                            return(
                                <Task key={task.id} task={task} index={index}/>
                            )
                        })}
                        {provided.placeholder}
                    </div>)}
                </Droppable>
                <div></div>
                <InputContainer listId={list.id} type="task"/>
            </Card>
        </div>
    )
}

export default List
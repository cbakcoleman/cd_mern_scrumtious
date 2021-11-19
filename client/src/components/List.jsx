import './style.css'
import React, {useState, useEffect} from 'react';
import {Card, CssBaseline} from '@mui/material';
import axios from 'axios';
import Title from './Title';
import Task from './Task';
import InputContainer from './InputContainer';


const List = ({list}) => {
    console.log(list);
    console.log(list.tasks);

    return (
        <div >
            <Card  className={"card "}>
                <CssBaseline/>
                <Title title={list.title} listId={list.id}/>
                {list.tasks.map( (task) => {
                    return(
                        <Task key={task.id} task={task} />
                    )
                })}

                <div></div>
                <InputContainer listId={list.id} type="task"/>
            </Card>
        </div>
    )
}

export default List
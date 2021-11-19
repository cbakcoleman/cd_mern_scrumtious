import './style.css'
import React, {useState, useEffect} from 'react';
import {Card, CssBaseline} from '@mui/material';
import axios from 'axios';
import Title from './Title';
import Task from './Task';
import InputContainer from './InputContainer';


const List = ({list}) => {


    console.log(list);
    console.log(list.title);
    console.log(list.tasks);
    return (
        <div >
            <Card  className={"card"}>
                <CssBaseline/>
                <Title title={list.title}/>
                {
                    list.tasks.map( (task, i) => {
                        return(
                            <Task key={task._id} task={task}/>
                        )
                    })
                }
                <div></div>
                <InputContainer/>
            </Card>
        </div>
    )
}

export default List
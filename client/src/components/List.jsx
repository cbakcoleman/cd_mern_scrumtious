import './style.css'
import React from 'react';
import {Card, CssBaseline} from '@mui/material';
import Title from './Title';
import Task from './Task';
import InputContainer from './InputContainer';



const List = (props) => {
    
    return (
        <div >
            <Card  className={"card"}>
                <CssBaseline/>
                <Title />
                <Task />
                <Task />
                <Task />
                <Task />
                <div></div>
                <InputContainer/>
            </Card>
        </div>
    )
}

export default List
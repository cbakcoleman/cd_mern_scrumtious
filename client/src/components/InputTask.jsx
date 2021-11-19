import { Button, Card, InputBase, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear'
import React,{ useState } from 'react';
import './style.css';

const InputTask = ({setOpen}) => {
    return (
        <div>
            <div className={"addTask"}>
                <Card className={"input"}>
                    <InputBase 
                        onBlur={ ()=> setOpen(false)}
                        multiline 
                        fullWidth
                        placeholder="Enter task"
                    />
                </Card>
            </div>
            <div >
                <Button className={"button"} onClick={ () =>setOpen(false) }>Add Task</Button>
                <IconButton onClick={ ()=> setOpen(false)}>
                    <ClearIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default InputTask
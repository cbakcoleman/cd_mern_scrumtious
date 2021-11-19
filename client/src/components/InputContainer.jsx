import { Card, Collapse } from '@mui/material';
import React, {useState} from 'react';
import InputTask from './InputTask';

const InputContainer = ({listId, type}) => {
    const [open, setOpen] = useState(false);
    return (
        <div >
            <Collapse in={open}>
                <InputTask setOpen={setOpen} listId={listId} type={type}/>
            </Collapse>
            <Collapse in={!open}>
                <div className={"editTitleContainer"} elevation={0} onClick={ () => setOpen(!open)}>
                    <h3 clasName={"editTitle"}>{type === "task" ? "Add a Task +" : "Add a List +" }</h3>
                </div>
            </Collapse>
        </div>
    )
}

export default InputContainer
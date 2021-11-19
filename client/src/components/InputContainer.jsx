import { Card, Collapse } from '@mui/material';
import React, {useState} from 'react';
import InputTask from './InputTask';

const InputContainer = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Collapse in={open}>
                <InputTask setOpen={setOpen}/>
            </Collapse>
            <Collapse in={!open}>
                <div className={"editTitleContainer"} elevation={0} onClick={ () => setOpen(!open)}>
                    <h3 clasName={"editTitle"}>Add a Task + </h3>
                </div>
            </Collapse>
        </div>
    )
}

export default InputContainer
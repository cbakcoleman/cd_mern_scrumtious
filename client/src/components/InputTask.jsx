import { Button, Card, InputBase, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear'
import React,{ useState, useContext } from 'react';
import StoreApi from '../utils/StoreApi';
import axios from 'axios';
import './style.css';

const InputTask = ({setOpen, listId}) => {
    const [content, setContent] = useState(null);
    const {addNewTasks} = useContext(StoreApi);
    
    const btnConfirm = () => {
        addNewTasks(content, listId);
        setContent("");
        setOpen(false);
    }

    const handleBlur = () => {
        setOpen(false);
        setContent("");
    }

    return (
        <div>
            <div className={"addTask"}>
                <Card className={"input"}>
                    <InputBase 
                        onChange={ (e) => setContent(e.target.value)}
                        onBlur={ handleBlur }
                        multiline 
                        fullWidth
                        placeholder="Enter task"
                        value={content}
                    />
                </Card>
            </div>
            <div >
                <Button className={"button"} onClick={ btnConfirm }>Add Task</Button>
                <IconButton >
                    <ClearIcon/>
                </IconButton>
            </div>
        
        </div>
    )
}

export default InputTask
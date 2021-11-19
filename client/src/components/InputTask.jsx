import { Button, Card, InputBase, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear'
import React,{ useState, useContext } from 'react';
import StoreApi from '../utils/StoreApi';
import axios from 'axios';
import './style.css';

const InputTask = ({setOpen, listId, type}) => {
    const [content, setContent] = useState(null);
    const {addNewTasks, addNewLists} = useContext(StoreApi);
    
    const btnConfirm = () => {
        if (type === "task"){
            addNewTasks(content, listId);
            setContent("");
            setOpen(false);
        } else {
            addNewLists(content);
            setContent("");
            setOpen(false);
        }
    }

    


    return (
        <div>
            <div className={"addTask"}>
                <Card className={"input"}>
                    <InputBase 
                        onChange={ (e) => setContent(e.target.value)}
                        onBlur={ () => setOpen(false) }
                        multiline 
                        fullWidth
                        placeholder={type === "task" ? "Enter task":"Enter list title"}
                        value={content}
                    />
                </Card>
            </div>
            <div >
                <Button className={"button"} onClick={ btnConfirm }>
                    {type === "task" ? "Add Task": "Add List"}
                </Button>
                <IconButton >
                    <ClearIcon/>
                </IconButton>
            </div>
        
        </div>
    )
}

export default InputTask
import { Button, Card, InputBase, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear'
import React,{ useState } from 'react';
import axios from 'axios';
import './style.css';

const InputTask = ({setOpen}) => {
    const [content, setContent] = useState("");

    const btnConfirm = () => {

        setOpen(false);
    }



    return (
        <div>
            <form >
                <div className={"addTask"}>
                    <Card className={"input"}>
                        
                        <InputBase 
                            onChange={(e) => setContent(e.target.value)}
                            onBlur={ ()=> setOpen(false)}
                            multiline 
                            fullWidth
                            placeholder="Enter task"
                            value={content}
                        />
                        
                    </Card>
                </div>
                <div >
                    <Button className={"button"} onClick={ () =>setOpen(false) }>Add Task</Button>
                    <IconButton onClick={ btnConfirm}>
                        <ClearIcon/>
                    </IconButton>
                </div>
            </form>
        </div>
    )
}

export default InputTask
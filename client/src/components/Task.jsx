import React from 'react';
import {Card, CssBaseline} from '@mui/material';

const Task = ({task}) => {
    return (
        <div className={"task"}>
            <Card className={"task"} >
            &#9744; {task.content}
            </Card>
        </div>
    )
}

export default Task
import React from 'react';
import {Card, CssBaseline} from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({task, index}) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            { (provided) => (
                <div className={"task"}
                    ref={provided.innerRef} 
                    {...provided.dragHandleProps} 
                    {...provided.draggableProps}
                >
                    <Card className={"task"} >
                    &#9744; {task.content}
                    </Card>
                </div>
            )}
        </Draggable>
    )
}

export default Task
import './style.css'
import React from 'react';
import {Card, CssBaseline} from '@mui/material';
import Title from './Title';



const List = (props) => {
    
    return (
        <div>
            <Card className={"card"}>
                <Title />
            </Card>
        </div>
    )
}

export default List
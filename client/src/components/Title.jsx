import './style.css'
import { InputBase } from '@mui/material';

import React, {useState} from 'react';


const Title = (props) => {
    const [open, setOpen] = useState(false);


    return (
        <div>
            {
                open ?(
                    <div className={"input"}>
                        <InputBase value="Todo" 
                       
                        fullWidth
                        onBlur={ () => setOpen(!open)}/>
                    </div>
                ) : (
                    <div className={"editTitleContainer"}>
                        <h3 onClick={ () => setOpen(!open)} className={"editTitle"}>To Do</h3>
                        &#x2630;
                    </div>
                )
            }
        </div>
    )
}

export default Title
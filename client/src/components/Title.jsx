import './style.css'
import { InputBase } from '@mui/material';

import React, {useState} from 'react';


const Title = ({title}) => {
    const [open, setOpen] = useState(false);


    return (
        <div>
            {
                open ?(
                    <div className={"input"}>
                        <InputBase value={title}
                        fullWidth
                        onBlur={ () => setOpen(!open)}/>
                    </div>
                ) : (
                    <div className={"editTitleContainer"}>
                        <h3 onClick={ () => setOpen(!open)} className={"editTitle"}>{title}</h3>
                        &#x2630;
                    </div>
                )
            }
        </div>
    )
}

export default Title
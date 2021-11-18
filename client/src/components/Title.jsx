import { InputBase } from '@mui/material';
import React, {useState} from 'react';

const Title = (props) => {
    const [open, setOpen] = useState(false);


    return (
        <div>
            {
                open ?(
                    <div>
                        <InputBase value="Todo" />
                    </div>
                ) : (
                    <div>
                        <h3 onClick={ () => setOpen(!open)}>To Do</h3>
                    </div>
                )
            }
        </div>
    )
}

export default Title
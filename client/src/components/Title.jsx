import './style.css'
import { InputBase } from '@mui/material';
import StoreApi from '../utils/StoreApi';
import React, {useState, useContext} from 'react';


const Title = ({title, listId}) => {
    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const {updateListTitle} = useContext(StoreApi);

    const handleOnChange = (e) => {
        setNewTitle(e.target.value);
    }
    const handleBlur = () => {
        updateListTitle(newTitle, listId);
        setOpen(false);
    }


    return (
        <div>
            {
                open ?(
                    <div className={"input"}>
                        <InputBase value={newTitle}
                        fullWidth
                        onBlur={ handleBlur}
                        onChange={handleOnChange}/>
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
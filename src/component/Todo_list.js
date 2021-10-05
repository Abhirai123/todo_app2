import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Todo_list = (props) => {
    const [delitem, setCut] = useState(false)

    const cutItem = ()=>{
        setCut(true)
    }
    return (
        <div className="delitem">
            <li style={{textDecoration: delitem ?"line-through" : "none"}}>{props.text}</li>
            <IconButton color="secondary" aria-label="delete" onClick={cutItem}>
               <DeleteIcon />
            </IconButton>
            
        </div>
    )
}

export default Todo_list

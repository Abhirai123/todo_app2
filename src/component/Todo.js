import React, { useState } from 'react'
import Todo_list from './Todo_list';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const Todo = () => {

    const [item, setItem] = useState();
    const [itemlist, setList] = useState([]);

    const  getValue=(e)=>{
        setItem(e.target.value)
    }

    const add=()=>{
        setList((prev)=>{
            return [...prev, item]
        })

        setItem("")
    }

    const deleteItem = (id)=>{
        setList((prev)=>{
            return prev.filter((arr, index)=>{
                return index !== id
            })
        })
    }
    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input type="text" placeholder="Add Item.." onChange={getValue} value={item} required/>
                <Button className="green" variant="contained" color="success" onClick={add}>
                <AddIcon />
              </Button>
                <ul>
                   {
                       itemlist.map((item,index)=>{
                           return  <Todo_list text={item} index={index} id={index} onSubmit={deleteItem} />
                       })
                   }
                </ul>
                
            </div>
        </div>
    )
}

export default Todo

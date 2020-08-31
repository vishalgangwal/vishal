import React, { useState } from 'react';
import './todo.css';
import InputList from './imputlist.js'

function Todo_List(){
const [valuemy, setValue ]= useState("");
const [items, setItems]= useState([]);

function handleChange(event){
const newvalue= event.target.value;
setValue(newvalue);
}    
function handleClick(event){
    setItems((revItem)=>{ return [...revItem, valuemy] })
    setValue('');
}
function deleteItem(id){
    setItems(preval=>{
    return    preval.filter((item,index)=>{
        return index!==id
    })    
    })

}



return(
<div className="Box">
<h3 className="heading">Todo-List</h3>
<input type="text" placeholder="enter content..." onChange={handleChange} value={valuemy} />
<button type="submit" onClick={handleClick} >Add</button>
{items.map((listItem,index) => <InputList key={index} id={index} myit={listItem} onChecked={deleteItem} /> )}

</div>
);



}

export default Todo_List;
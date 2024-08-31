import React from "react";
import "./Todo.css";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
const TodoCards=({title,body,id,delId,display,updateId,toBeUpdate})=>{
    return (
     <div className="p-3 todo-card">
        <div>
            <h5>{title}</h5>
            <p className="todo-card-p">{body.split("",77)}...</p>
        </div>
        <div className="d-flex justify-content-around ">
            <div className="card-icon-head px-2 py-1" onClick={()=>{display("block");toBeUpdate(updateId);}} >
            <GrDocumentUpdate  className="icons"/>
            Update
            </div>
        <div className="card-icon-head px-2 py-1 text-danger" onClick={()=>delId(id)}>
        <MdDelete className="icons del"/>
        Delete
        </div>
            
        </div> 
    </div>
    )
}
export default TodoCards;
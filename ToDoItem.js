import React from 'react';
import Delete from '@material-ui/icons/Delete';

function ToDoItem(props){
   const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
   }
   return(
      <div className='todo-item'>
         <div className='test'>
            <input type="checkbox" id={props.item.id} checked={props.item.completed} 
            onChange={()=>props.handleChange(props.item.id)}/>
            <label for={props.item.id}/>
            <p style={props.item.completed ? completedStyle:null}>{props.item.text}</p>
         </div>
         <input type="image" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" className='todo-delete-item' onClick={()=>props.deleteTask(props.item)}/>
      </div>
   )
}
export default ToDoItem;
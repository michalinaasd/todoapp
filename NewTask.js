import React, {useEffect} from 'react';

function NewTask(props){
  
   useEffect(()=>{
      const input = document.getElementById('newTask');
      input.addEventListener("keypress", handleKeyPress);
      return()=>{
         input.removeEventListener("keypress", handleKeyPress);
      }
   })
   const handleKeyPress = (e) =>{
      if(e.key === 'Enter'){
         props.addNewTask(document.getElementById('newTask'))
      }
   }
   return(
      <div className="todo-add">
         <input id='newTask'/>
         <button class='add-button' onClick={()=>props.addNewTask(document.getElementById('newTask'))}>add</button>
      </div>
   )
}

export default NewTask;
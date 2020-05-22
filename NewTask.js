import React from 'react';

function NewTask(props){
   return(
      <div className="todo-add">
         <input id='newTask' />
         <button onClick={()=>props.addNewTask(document.getElementById('newTask').value)}>add</button>
      </div>
   )
}

export default NewTask;
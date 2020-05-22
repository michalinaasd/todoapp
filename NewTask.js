import React from 'react';

function NewTask(props){
   return(
      <div className="todo-add">
         <input />
         <button onClick={()=>props.addNewTask()}>add</button>
      </div>
   )
}

export default NewTask;
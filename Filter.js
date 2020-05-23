import React from 'react'

function Filter(props){
   return(
      <div className="todo-filter">
         <input id='cb1'type="checkbox" onChange={()=>props.filterCompleted()}/>
         <label for='cb1'/>
         <p>hide completed</p>
      </div>
   )
}

export default Filter;
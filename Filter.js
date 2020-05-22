import React from 'react'

function Filter(props){
   return(
      <div className="todo-filter">
         <input type="checkbox" onChange={()=>props.filterCompleted()}/>
         <p>hide completed</p>
      </div>
   )
}

export default Filter;
import React from 'react';
import ToDoItem from './ToDoItem';
import task from './task';
import NewTask from './NewTask';

class App extends React.Component{
   constructor(){
      super()
      this.state = {
         todos: task
      }
      this.handleChange = this.handleChange.bind(this)
      this.addNewTask = this.addNewTask.bind(this)
   }
   
   handleChange(id){
      this.setState(prevState =>{
         const updatedTodos = prevState.todos.map( todo=>{
            if(todo.id === id){
               todo.completed = !todo.completed;

            }
            return todo
         })
         return{
            todos: updatedTodos
         }
      })
   }

   addNewTask(){
      const newItem = [
         {
            id: 66,
            text: 'asd',
            completed: false
         }
      ]
      const items = [...this.state.todos, newItem];
      this.setState({
         todos: items
      })
   }

   render(){
      const todoItems = this.state.todos.map(item => <ToDoItem item={item}
      handleChange={this.handleChange}/>)
      return(
         <div className='todo-list'>
            {todoItems}
            <NewTask addNewTask={this.addNewTask}/>
         </div>
         
      )
   }
}

export default App;
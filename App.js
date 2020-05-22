import React from 'react';
import ToDoItem from './ToDoItem';
import task from './task';
import NewTask from './NewTask';
import Filter from './Filter';

class App extends React.Component{
   constructor(){
      super()
      this.state = {
         todos: task,
         filtered: false,
         prevTodos: []
      }
      this.handleChange = this.handleChange.bind(this)
      this.addNewTask = this.addNewTask.bind(this)
      this.filterCompleted = this.filterCompleted.bind(this)
   }
   
   filterCompleted(){
      if(this.state.filtered == false){
         const filtered = this.state.todos.filter(function (value, index, arr){
            return value.completed === false;
         });

         this.setState({
            prevTodos: this.state.todos,
            todos: filtered,
            filtered: true
         })
      }else{
         this.setState({
            todos: this.state.prevTodos,
            filtered: false
         })
      }
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

   addNewTask(input){
      const newItem =
         {
            id: Math.random(),
            text: input,
            completed: false
         };
      //const items = [...this.state.todos, newItem];
      this.state.todos.push(newItem);
      this.setState({
         todos: this.state.todos

      }
      )
   }

   render(){
      const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}
      handleChange={this.handleChange}/>)
      return(
         <div className='todo-list'>
            <Filter filterCompleted={this.filterCompleted}/>
            {todoItems}
            <NewTask addNewTask={this.addNewTask}/>
         </div>    
      )
   }
}

export default App;
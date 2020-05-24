import React from 'react';
import ToDoItem from './ToDoItem';
import task from './task';
import NewTask from './NewTask';
import Filter from './Filter';
import Navbar from './Navbar';
import EmptyList from './EmptyList';

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
      this.deleteTask = this.deleteTask.bind(this)
   }
   deleteTask(item){
      this.state.todos.splice(this.state.todos.indexOf(item),1);
      if(this.state.filtered==true){
         this.state.prevTodos.splice(this.state.todos.indexOf(item),1);
      }
      this.setState({
         todos: this.state.todos,
         prevTodos: this.state.prevTodos
      })
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
            text: input.value,
            completed: false
         };
      //const items = [...this.state.todos, newItem];
      this.state.todos.push(newItem);
      if(this.state.filtered==true){
         this.state.prevTodos.push(newItem);

      }
      input.value="";
      this.setState({
         todos: this.state.todos
      }
      )
   }

   render(){
      if(this.state.todos.length === 0){
         return(
            <div className='todo-list'>
               <Navbar />
               <Filter filterCompleted={this.filterCompleted}/>
               <div className='todo'>
                  <div className='todo-items'>
                     <EmptyList />
                  </div>
                     <NewTask addNewTask={this.addNewTask}/>
               </div>
            </div>
         )
      }else{
         const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}
         handleChange={this.handleChange} deleteTask={this.deleteTask}/>)
         return(
            <div className='todo-list'>
               <Navbar />
               <Filter filterCompleted={this.filterCompleted}/>
               <div className='todo'>
                  <div className='todo-items'>
                     {todoItems}
                  </div>
                     <NewTask addNewTask={this.addNewTask}/>
               </div>
            </div>
         )
      }
     
     
   }
}

export default App;
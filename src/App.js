import './Style.css'
import React from 'react';
import Tasks from './Tasks';
import {useState} from 'react'
import Message from './Message';
import { createContext } from 'react';
export const TestContext=createContext();
function App() {
 


  
const[todo,setTodo]=useState([
  {
    task:"Buy Groceries",
    date:"2024-02-08"
  },
  {
    task:"Pay Bills",
    date:"2024-02-08"
  }
]) 

const[newTask,setNewTask]=useState({
  todotask:"",
  tododate:""

})


const handleInput=(e)=>{
  return(
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    })
  )
}



const handleAdd=()=>{
return(



  setTodo([...todo,{date:newTask.tododate, task:newTask.todotask}]),
  setNewTask({
    todotask:'',
    tododate:''
  })
)
}



const handleDelete = (taskToDelete) => {
  const updatedTodo = todo.filter(item => item.task !== taskToDelete);
  setTodo(updatedTodo);
};



  return (
   <>
   <TestContext.Provider value={{todo,handleDelete}}>
  <div className="container mt-5">
    <div className="heading">
       <h1 className="text-center fw-bold">To Do App</h1>
       </div>
    <div className="row bg-primary">
        <div className="col-6">
          <input  className='m-2 w-75 'type='text' placeholder="Enter the task" name='todotask' onChange={handleInput} value={newTask.todotask} />
        </div>
        <div className="col-4 d-flex justify-content-center">
          <input type="date" className="m-2" name='tododate' onChange={handleInput} value={newTask.tododate}/>
        </div>
        <div className="col-2 d-flex justify-content-center ">
          <button className=" btn btn-success m-2" onClick={handleAdd} >Add</button>
        </div> 
      </div>
      { (todo.length >0) ? <Tasks/> : <Message/>}  
  </div>
  </TestContext.Provider>
   </>
  );
}

export default App;

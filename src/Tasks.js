import React, { useContext } from 'react'
import {TestContext} from './App'
function Tasks(props) {
const {todo,handleDelete} =useContext(TestContext);

  

  
  return (
   <>
  <div className="row mt-2">
    <div className="col-6 ">
      {todo.map((item) => (
        <div key={item.id} className="my-3 fw-bold">
          {item.task}
        </div>
      ))}
    </div>
    <div className="col-4 ">
      
         {todo.map((item) => (
          <div key={item.id} className="my-3 d-flex justify-content-center fw-bold">
            {item.date}
          </div>
        ))}
      
    </div>
    <div className="col-2 ">
            {todo.map((item)=>{
              return(
                <div className='m-1 d-flex justify-content-center'>
                   <button type="button " className="btn btn-danger " onClick={() => handleDelete(item.task)}>
                Delete
              </button></div>
                
              )
            })}


       
    </div>

    </div>




   </>
  );
}

export default Tasks

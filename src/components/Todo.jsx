import React from 'react'
import './Todo.css'
import { useState , useEffect } from 'react'
import axios from 'axios'


function Todo({ alreadyChecked, todo, getTodoValue, printTodoValue,inputValue, children, remove, AllTasks, CompletedTask}) {

   // const [isChecked, setIsChecked] = useState(false);


    return (
        <div className="todo">

       <div> {children}</div>

      <div className="todo-input">
         <form onSubmit={printTodoValue} >
            <input onChange={getTodoValue} type="text" value={inputValue} type="text" placeholder="Create a new todo..."></input>
            <button type='submit'></button>
         </form>
      </div>

        <div>
      </div>


      <div className="todos">
        <ul >
            {todo.map((el) => (
            <li key={el.id}>

               <input onClick={alreadyChecked} type="checkbox" defaultChecked={el.completed} ></input>
               <p className='text'> {el.id} {el.title} </p>
               <input style={{border: 'none'}} className='remove' onClick={remove} ></input>


               
            </li> 
            ))}



         </ul>


      </div>

     
      <div className="footer">
         <p >All Tasks</p><input value={AllTasks} /> 
         <p >Completed Tasks</p><input value={CompletedTask} /> 
      </div>
        
    </div>

    )
}

export default Todo;

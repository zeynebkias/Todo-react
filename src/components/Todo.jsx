import React from 'react'
import './Todo.css'
import { useState , useEffect } from 'react'
import axios from 'axios'


function Todo({ todo, getTodoValue, printTodoValue,inputValue, children}) {
    

    return (
        <div className="todo">

       <div> {children}</div>

      <div className="todo-input">
         <form onSubmit={printTodoValue} >
            <input onChange={getTodoValue} type="text" value={inputValue} type="text" placeholder="Create a new todo..."></input>
            <button></button>
         </form>
       
      </div>



        <div>


        
        
      </div>


      <div className="todos">
        <ul id="simpleList">
            {todo.map((el) => (<li key={el.id}> {el.title} </li>))}
         </ul>




         </div>
        
    </div>

    )
}

export default Todo;

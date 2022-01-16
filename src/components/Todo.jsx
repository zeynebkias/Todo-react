import React from 'react'
import './Todo.css'
import { useState , useEffect } from 'react'
import OneTodo from './OneTodo'
import axios from 'axios'


function Todo({ alreadyChecked, todo, children}) {

    return (
        <div className="todo">
       <div> {children}</div>

        <div>
      </div>


      <div className="todos">
        <ul  >
            {todo.map((el) => (
               <  OneTodo key={el.id} title={el.title} completed={el.completed} alreadyChecked={alreadyChecked}/> 

            ))}
         </ul>
      </div>

     
     
        
    </div>

    )
}

export default Todo;

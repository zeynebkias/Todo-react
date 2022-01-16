import React from 'react'
import './Todo.css'

import { useState , useEffect } from 'react'

function Form({getTodoValue, inputValue,printTodoValue}) {


    return (
        <div className="todo-input">
         <form onSubmit={printTodoValue} >
            <input onChange={getTodoValue} type="text" value={inputValue} type="text" placeholder="Create a new todo..."></input>
            <button type='submit'></button>
         </form>
      </div>
    )
}

export default Form

import React from 'react'

function oneTodo({title, CompletedTask, completed}) {
    return (
        <div>
            <li >
            <input type="checkbox" ></input>
               <p className='text'> {title} </p>
               <input style={{border: 'none'}} className='remove' onClick={CompletedTask} defaultChecked={completed}></input>
             </li>

        </div>
    )
}

export default oneTodo;

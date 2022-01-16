import React from 'react'
import './Todo.css'
import { useState , useEffect } from 'react'


function DarkComponent() {

    const [darkTheme, setDarkTheme] = useState(false) // to change the mood

    return (
        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
        <nav></nav> 

        <div className="header">
        <h1>Todo</h1>
        <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}><img/> </button>
        </div>
        </div>
    )
}

export default DarkComponent;

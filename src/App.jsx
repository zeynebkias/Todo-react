import './App.css'
import Todo from './components/Todo'
import { useState , useEffect } from 'react'
import axios from 'axios'
import sun from '../src/imgs/icon-sun.svg'
import moon from '../src/imgs/icon-moon.svg'



function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  const [todoList , setTodo] = useState([])
  const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos') 
        .then (res => {
              setTodo(res.data.slice(0,7))
        
        })
        },[])


    const getTodoValue = (e) => {
          setInputValue(e.target.value)
        }

    const printTodoValue = (e) => {
          e.preventDefault()
          let id = todoList.length+1
          todoList.push({ id: id, title: inputValue})
          setInputValue("") // clean the inputValue 
        }



  return (
<div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <nav></nav> 
  <div className="container">
  <div className="header">
    <h1>Todo</h1>
    
    <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}><img/> </button>
  </div>
    <Todo printTodoValue={printTodoValue} getTodoValue={getTodoValue} inputValue={inputValue} todo={todoList} />
   </div>



</div>
       
  )
}

export default App


































// className="theme" src={moon} alt="theme-icon" 

{/* <ul>
           {todoList.map((todo) =>(<li key={todo.id}>{todo.title}</li>))} 
       </ul> */}
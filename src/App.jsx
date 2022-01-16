import './App.css'
import Todo from './components/Todo'
import { useState , useEffect } from 'react'
import axios from 'axios'
import Footer from './components/Footer'
import DarkComponent from './components/DarkComponent'
import Form from './components/Form'
import sun from '../src/imgs/icon-sun.svg'
import moon from '../src/imgs/icon-moon.svg'





function App() {

  // const [darkTheme, setDarkTheme] = useState(false) // to change the mood
  const [todoList , setTodo] = useState([]) // show the TODO list
  const [inputValue, setInputValue] = useState("") // to get the input value
  const [CompletedTask, setCompletedTask] = useState(0) 



// get the DATA by using useEffect hook
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos') 
        .then (res => {
              setTodo(res.data.slice(2,10))

//condition

for (let i = 0; i < res.data.slice(2, 10).length; i++) {
  if (res.data[i].completed) {
    setCompletedTask((CompletedTask) => CompletedTask + 1) 
  }}  


  })
  },[])



// count the tasks
  const alreadyChecked = (e) => {
    if (e.currentTarget.checked) { // taks already checked
      setCompletedTask((CompletedTask) => CompletedTask +1) 
    }
    else {
      setCompletedTask((CompletedTask) => CompletedTask - 1)
    }
  }

  // remve items
  // const remove = (e) => {
    
  //  };



// get the input Value
    const getTodoValue = (e) => {
          setInputValue(e.target.value)
        }


// print the input Value

    const printTodoValue = (e) => {
          e.preventDefault()
          let id = todoList.length+1
          // todoList.push({ id: id, title: inputValue})
          setTodo([ ...todoList, { id: id, title: inputValue}])

          setInputValue("") // clean the inputValue 
        }



  return (
    <div>
{/* <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <nav></nav>  */}
      <DarkComponent/>


    <Form printTodoValue={printTodoValue} getTodoValue={getTodoValue} inputValue={inputValue}/>


  <div className="container">
  
    <Todo  todo={todoList} alreadyChecked={alreadyChecked} /> 
    
   <Footer  AllTasks={todoList.length} CompletedTask={CompletedTask}/>

   </div>

   

</div>
       
  )
}

export default App;


































// className="theme" src={moon} alt="theme-icon" 

{/* <ul>
           {todoList.map((todo) =>(<li key={todo.id}>{todo.title}</li>))} 
       </ul> */}
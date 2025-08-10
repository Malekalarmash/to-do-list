import './App.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState([])

  // Handle add to do
  function addTodo(title){
    const newTodo = {
      title, 
      key: Date.now() 
    }
    setTodoList([...todoList, newTodo])
  }
  return (
    <>
      <h1>My todos</h1>
      <TodoForm onAddTodo= {addTodo}/>
      <TodoList todoList={todoList} />
    </>
  )
}

export default App

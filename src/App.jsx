import './App.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { useState } from 'react'

function App() {
  const [newTodo, setNewTodo] = useState('Walk the Dog')
  return (
    <>
      <h1>My todos</h1>
      <TodoList />
      <p>{newTodo}</p>
      <TodoForm />
    </>
  )
}

export default App

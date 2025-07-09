import './App.css'

function App() {
  const todos = [
    { id: 1, title: 'review Resources'},
    { id: 2, title: 'take notes'},
    { id: 3, title: 'code out app'}
  ]
  console.log(todos)

  return (
    <>
      <h1>My todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

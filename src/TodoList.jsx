import TodoListItem from "./TodoListItem";

function TodoList (){
    const todos = [
        { id: 1, title: 'review Resources'},
        { id: 2, title: 'take notes'},
        { id: 3, title: 'code out app'}
      ]
    return (
      <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoListItem key={todo.id} todo={todo}/>
        </li>
      ))}
    </ul>
    )
}
export default TodoList;
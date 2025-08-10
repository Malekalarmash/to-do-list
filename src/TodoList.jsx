import TodoListItem from "./TodoListItem";

function TodoList ({todoList}){
    return (
      <ul>
      {todoList.map(todo => (
        <li key={todo.id}>
          <TodoListItem key={todo.id} todo={todo}/>
        </li>
      ))}
    </ul>
    )
}
export default TodoList;
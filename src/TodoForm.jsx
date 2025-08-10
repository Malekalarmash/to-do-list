import { useRef } from "react"


function TodoForm ({onAddTodo}){
    const todoTitleInput = useRef('')
    function handleAddTodo(event){
        event.preventDefault()
        const title = event.target.title.value
        onAddTodo(title)
        console.log(title)
        event.target.title.value = ""
        todoTitleInput.current.focus()        
    }
    return(
        <>
        <form onSubmit={handleAddTodo}>
        <label htmlFor = "TodoTitle">Todo</label>
            <input
                name="title"
                type = "text"
                id = "TodoTitle"
                ref={todoTitleInput}
            />
        <button type = "submit">Add Todo</button>    
        </form>
        </>

    )
}
export default TodoForm;
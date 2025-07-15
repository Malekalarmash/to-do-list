function TodoForm (){
    return(
        <>
        <form>
        <label htmlFor = "TodoTitle">Todo</label>
            <input
                type = "text"
                id = "TodoTitle"
            />
        <button type = "submit">Add Todo</button>    
        </form>
        </>

    )
}
export default TodoForm;
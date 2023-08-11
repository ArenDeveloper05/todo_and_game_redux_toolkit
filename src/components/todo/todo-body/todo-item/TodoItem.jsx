import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { checkTodo, deleteTodo } from "../../../../redux/slices/todosSlice";


const TodoItem = ({item}) => {
    const dispatch = useDispatch();

    const deleteTodoFunction = useCallback(() => {
        dispatch(deleteTodo({id: item.id }))
    },[item.id, dispatch])

    const checkTodoFunction = useCallback(() => {
        dispatch(checkTodo({id: item.id}))
    },[item.id, dispatch])
    

  return (
    <div className="todo-body-item">
        <h1>{item.title}</h1>
        <button onClick={deleteTodoFunction}>Delete</button>
        <button onClick={checkTodoFunction}>{item.isChecked? "Done": "Check"}</button>
    </div>
  )
}

export default TodoItem
import { useSelector } from "react-redux"
import TodoItem from "./todo-item/TodoItem";

const TodoBody = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="todo-body">
        {
            todos && todos.map((item) => {
                return <TodoItem item={item} key={item.id}/>
            })
        }
    </div>
  )
}

export default TodoBody
import TodoBody from "./todo-body/TodoBody"
import TodoHead from "./todo-head/TodoHead"
// SCSS
import "./Todo.scss"

const Todo = () => {
  return (
    <div className="todo">
        <TodoHead/>
        <TodoBody/>
    </div>
  )
}

export default Todo
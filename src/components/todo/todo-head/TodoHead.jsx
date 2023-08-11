import { useCallback, useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/slices/todosSlice";

const TodoHead = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const clearInputValue = useCallback(() => {
        setInputValue("")        
    },[])

  return (
    <div className="todo-head">
        <input 
            type="text" 
            value={inputValue}  
            onChange={(e) => {
                setInputValue(e.target.value)
            }}/> 
        <button onClick={() => {
            if(inputValue.trim()){
                dispatch(addTodo({title: inputValue}));
                clearInputValue();
            }
           
        }}>Add todo</button>
    </div>
  )
}

export default TodoHead
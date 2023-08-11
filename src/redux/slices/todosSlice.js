import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    todos: []
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, {payload}) => {
            state.todos.push({
                id: Math.random(),
                title: payload.title,
                isChecked: false
            })
        },
        deleteTodo: (state, {payload}) => {
            state.todos = state.todos.filter((item) => item.id !== payload.id )
        },
        checkTodo: (state, {payload}) => {
            state.todos = state.todos.map(item => {
                if(item.id === payload.id){
                    return {
                        ...item,
                        isChecked: !item.isChecked
                    }
                }
                return item 
            })
        }

    }
})



export const {addTodo, deleteTodo,checkTodo} = todosSlice.actions;
export default todosSlice.reducer;


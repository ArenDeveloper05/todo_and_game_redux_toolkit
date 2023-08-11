import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux/slices/todosSlice"
import gameReducer from "../redux/slices/gameSlice"


const store = configureStore({
    reducer: {
        todos: todosReducer,
        game: gameReducer
    }
})

export default store
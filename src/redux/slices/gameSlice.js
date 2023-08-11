import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    data: {
        top: 0,
        left: 0,
        speed: 10
    }
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        left(state){
            state.data.left -= state.data.speed
        },
        right(state){
            state.data.left += state.data.speed
        },
        top(state){
            state.data.top -= state.data.speed
        },
        bottom(state){
            state.data.top += state.data.speed
        },
        changeSpeed(state){
            state.data.speed += 10
        }

    }
})



export const {left, top, right, bottom, changeSpeed} = gameSlice.actions;
export default gameSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState : { counter: 10},
    reducers : {
        increment: state => {state.counter += 1},
        decrement: state => {state.counter -= 1},
        incrementBy: (state, value) => {state.counter += value.payload},
        decrementBy: (state, value) => {state.counter -= value.payload}}
})

export const {increment, decrement, incrementBy, decrementBy} = counterSlice.actions
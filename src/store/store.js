import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./slices/apis";
import { counterSlice } from "./slices/counter";
import { pokeSlice } from "./slices/pokemon";


export const store = configureStore({
    reducer:{
        value: counterSlice.reducer,
        pokemons: pokeSlice.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware)
})

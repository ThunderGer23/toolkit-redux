import { createSlice } from '@reduxjs/toolkit';

export const pokeSlice = createSlice({
   name: 'pokemon',
   initialState : {
       page: 0,
       pokemon: '',
       abilities: [],       
       tipo: [],
       stats: [],
       isLoading: false},
   reducers : {
       startLoadingPokemons: state => {state.isLoading = true},
       setPokemon: (state, action) => {
        state.isLoading = false
        state.page = action.payload.page
        state.pokemon = action.payload.pokemon
        state.abilities = action.payload.abilities
        state.tipo = action.payload.tipo
        state.stats = action.payload.stats
       }}
})

export const {startLoadingPokemons, setPokemon} = pokeSlice.actions
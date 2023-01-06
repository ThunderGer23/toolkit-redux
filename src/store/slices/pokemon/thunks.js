import { pokemonAPI } from '../../../api/PokemonAPI'
import { setPokemon, startLoadingPokemons } from './pokeSlice'

export const getPokemons = (page = 0) => {
  return async ( dispatch, getState ) => {
    dispatch(startLoadingPokemons())
        // TODO: Peticion HTTP
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=${ page * 10}`)
        // const data = await resp.json()
        const {data} = await pokemonAPI.get(`pokemon/${page+1}`)
    dispatch(setPokemon({pokemon: data, abilities: data.abilities, tipo: data.types, stats: data.stats, page: page+1  }))
  }
}

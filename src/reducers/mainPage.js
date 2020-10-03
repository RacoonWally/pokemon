import {
    FETCH_POKEMON_LIST_START,
    FETCH_POKEMON_LIST_ERROR,
    FETCH_POKEMON_LIST_SUCCESS,
    SET_CURRENT_PAGE,
    FETCH_ALL_POKEMON_SUCCESS
} from '../actonTypes'

const initialState = {
    mainPage: {}
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_POKEMON_LIST_SUCCESS: {
            const {pokemonList, count, countArray} = payload;
            return {
                ...state,
                loading: false,
                pokemonList,
                count,
                countArray
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: payload
            };
        }
        case FETCH_POKEMON_LIST_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload.error
            }
        }
        case FETCH_POKEMON_LIST_START: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_ALL_POKEMON_SUCCESS: {
            const {allPokemonList} = payload;
            return {
                ...state,
                allPokemonList
            }
        }
        default:
            return state;
    }
}

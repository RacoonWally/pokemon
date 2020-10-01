import {
    FETCH_POKEMON_LIST_ERROR,
    FETCH_POKEMON_LIST_SUCCESS,
    SET_CURRENT_PAGE
} from '../actonTypes'

const initialState = {
    mainPage: {
        pokemonList: [],
        count: 1,
        currentPage: 1,
        perPage:10,
        countArray: [1]
    }
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_POKEMON_LIST_SUCCESS:{
            const {pokemonList, count, countArray} = payload;
            return {
                ...state,
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
                error: payload.error
            }
        }
        default: return state;
    }
}

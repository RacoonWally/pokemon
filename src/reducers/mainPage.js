import {
    FETCH_POKEMON_LIST_START,
    FETCH_POKEMON_LIST_ERROR,
    FETCH_POKEMON_LIST_SUCCESS,
    SET_CURRENT_PAGE, FETCH_POKEMON_ITEM_SUCCESS
} from '../actonTypes'

const initialState = {
    mainPage: {
        // pokemonList: [],
        // count: 1,
        // currentPage: 1,
        // perPage:10,
        // countArray: [1],
        // loading: false,
        // imageUrl: ''
    }
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_POKEMON_LIST_SUCCESS:{
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
        case FETCH_POKEMON_LIST_START:{
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_POKEMON_ITEM_SUCCESS:{
            const imageUrl = payload;
            return {
                ...state,
                imageUrl
            }
        }
        default: return state;
    }
}

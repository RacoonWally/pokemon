import {
    FETCH_POKEMON_LIST_ERROR,
    FETCH_POKEMON_LIST_START,
    FETCH_POKEMON_LIST_SUCCESS,
    SET_CURRENT_PAGE,
    FETCH_POKEMON_ITEM_ERROR,
    FETCH_POKEMON_ITEM_START,
    FETCH_POKEMON_ITEM_SUCCESS
} from '../actonTypes'

import {
    fetchPokemonListApi,
    fetchPokemonItemApi,
    _apiBase
} from "../service";
import {
    getPagesCount,
    pagesArr,
    getImageUrl
} from "../selectors";


export const fetchPokemonList = (data) => async dispatch => {
    dispatch({
        type: FETCH_POKEMON_LIST_START
    });

    try {
        const pokemonList = await fetchPokemonListApi(data - 1);
        const count = await getPagesCount(pokemonList.count);
        const countArray = await pagesArr(count);
        dispatch({
            type: FETCH_POKEMON_LIST_SUCCESS,
            payload: {
                pokemonList,
                count,
                countArray
            }
        })
    } catch (e) {
        dispatch({
            type: FETCH_POKEMON_LIST_ERROR,
            payload: e,
            error: true
        })
    }
};

export const setCurrentPage = (data) => (dispatch) => {
    dispatch({
        type: SET_CURRENT_PAGE,
        payload: data
    })
};


export const fetchPokemonItem = (id) => async dispatch => {
    dispatch({
        type: FETCH_POKEMON_ITEM_START
    });
    try {
        const pokemon = await fetchPokemonItemApi(`${_apiBase}/${id}`);
        dispatch({
            type: FETCH_POKEMON_ITEM_SUCCESS,
            payload: {pokemon}
        })
    } catch (e) {
        dispatch({
            type: FETCH_POKEMON_ITEM_ERROR,
            payload: e,
            error: true
        })
    }
};

import {
    FETCH_POKEMON_LIST_ERROR,
    FETCH_POKEMON_LIST_START,
    FETCH_POKEMON_LIST_SUCCESS,
    SET_CURRENT_PAGE
} from '../actonTypes'

import {fetchPokemonListApi} from "../service";
import {
    getPagesCount,
    pagesArr
} from "../selectors";

export const fetchPokemonList = (data) => async dispatch => {
    dispatch({
        type: FETCH_POKEMON_LIST_START
    });

    try {
        const pokemonList = await fetchPokemonListApi(data);
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

export const setCurrentPage = (data) => (dispatch) =>{
    dispatch({
        type: SET_CURRENT_PAGE,
        payload: data
    })
};

import {
    FETCH_POKEMON_ITEM_START,
    FETCH_POKEMON_ITEM_ERROR,
    FETCH_POKEMON_ITEM_SUCCESS
} from '../actonTypes'

const initialState = {
    itemPage: {}
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_POKEMON_ITEM_SUCCESS: {
            const {pokemon} = payload;
            return {
                ...state,
                pokemon
            }
        }
        case FETCH_POKEMON_ITEM_START:{
            return {
                loading: true
            }
        }
        case FETCH_POKEMON_ITEM_ERROR:{
            return {
                error: payload.error
            }
        }
        default:
            return state
    }
}

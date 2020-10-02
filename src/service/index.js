const _apiBase = 'https://pokeapi.co/api/v2/pokemon?';

export const LIMIT = 16;


export const fetchPokemonListApi = async (offset) => {
    const data = await fetch(`${_apiBase}limit=${LIMIT}&offset=${offset}`);
    if (!data.ok) {
        throw new Error(`Error ${data.statusText}`)
    }

    return await data.json();
};

export const fetchPokemonItemApi = async (url) => {
    const data = await fetch(url);
    if (!data.ok) {
        throw new Error(`Error ${data.statusText}`)
    }

    return await data.json();
};

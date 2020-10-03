export const _apiBase = 'https://pokeapi.co/api/v2/pokemon';

export const LIMIT = 16;


export const fetchPokemonListApi = async (offset, limit= LIMIT) => {
    const data = await fetch(`${_apiBase}?limit=${limit}&offset=${offset}`);
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

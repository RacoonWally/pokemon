const _apiBase = 'https://pokeapi.co/api/v2/pokemon?';

export const LIMIT = 50;


export const fetchPokemonListApi = async (offset) => {
    const data = await fetch(`${_apiBase}limit=${LIMIT}&offset=${offset}`);
    if(!data.ok){
        throw new Error(`Error ${data.statusText}`)
    }

    return await data.json();
};

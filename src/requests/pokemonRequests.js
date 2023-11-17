import instance from './axios';

export const fetchPokemons = async pages => {
  try {
    const { data } = await instance.get(`pokemon?limit=${pages * 10}`);
    return data.results;
  } catch (error) {
    console.error('Error fetching random Pokémon:', error);
  }
};

export const getPokemonById = async id => {
  try {
    const { data } = await instance.get(`/pokemon/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonByName = async name => {
  try {
    const { data } = await instance.get(`/pokemon/${name}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getEvolutionChainByName = async name => {
  try {
    const { data } = await instance.get(`/pokemon-species/${name}`);
    const response = await instance.get(data.evolution_chain.url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

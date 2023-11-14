import instance from './axios';

export const getPokemonById = async id => {
  try {
    const response = await instance.get(`/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonByName = async name => {
  try {
    const response = await instance.get(`/pokemon/${name}`);
    return response.data;
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

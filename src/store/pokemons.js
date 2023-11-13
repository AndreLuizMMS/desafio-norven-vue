import instance from '@/requests/axios';

const state = {
  Homepokemons: [],
  favoritePokemons: []
};

const getters = {
  getPokemons: state => state.Homepokemons,
  getFavitedPokemons: state => state.favoritePokemons
};

const mutations = {
  setHomePokemons(state, pokemons) {
    state.Homepokemons = pokemons;
  }
};

const actions = {
  async fetchPokemons({ commit }, pages) {
    try {
      const response = await instance.get(`pokemon?limit=${pages * 10}`);
      commit('setHomePokemons', response.data.results);
    } catch (error) {
      console.error('Error fetching random Pokémon:', error);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

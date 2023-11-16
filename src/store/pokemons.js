import instance from '@/requests/axios';

const state = {
  favoritePokemons: []
};

const getters = {
  getFavitedPokemons: state => state.favoritePokemons
};

const mutations = {

};

const actions = {
  async fetchPokemons({ commit }, pages) {
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

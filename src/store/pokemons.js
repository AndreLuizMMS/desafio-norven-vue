const state = {
  favoritePokemons: []
};

const getters = {
  getFavoritePokemons: state => state.favoritePokemons
};

const mutations = {
  addToFavorite(state, payload) {
    const isAlreadyFavorited = state.favoritePokemons.some(
      pokemon => pokemon.id === payload.id
    );

    if (!isAlreadyFavorited) {
      state.favoritePokemons.push({
        ...payload,
        url: `https://pokeapi.co/api/v2/pokemon/${payload.id}`
      });
    }
  },
  removeFavorite(state, payload) {
    const removed = state.favoritePokemons.filter(el => el.id !== payload.id);
    state.favoritePokemons = removed;
  }
};

export default {
  state,
  getters,
  mutations
};

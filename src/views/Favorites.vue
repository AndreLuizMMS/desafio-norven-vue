<template>
  <div class="favorites-wrap" v-if="favorites.length > 0">
    <h1>Favoritos</h1>
    <PokemonList :pokemons="favorites" />
  </div>
  <div class="favorites-wrap" v-else>
    <h1 class="not-found">Nenhum Pokemon Adicionado</h1>
    <router-link to="/" tag="a" class="back-to-home"> Voltar </router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import PokemonList from '@/components/pokemons/PokemonList.vue';

export default {
  components: {
    PokemonList
  },
  methods: {
    checkIfFavorite(pokemon) {
      return this.isFavorite(pokemon);
    }
  },
  computed: {
    favorites() {
      return this.$store.getters.getFavoritePokemons;
    }
  },
  mounted() {
    const pokemonToCheck = { id: 1, name: 'Pikachu' };
    const isFavorite = this.checkIfFavorite(pokemonToCheck);
    console.log(`${pokemonToCheck.name} is in favorites: ${isFavorite}`);
  }
};
</script>

<style>
.favorites-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

h1 {
  font-weight: 400;
}

.back-to-home {
  text-decoration: underline;
}
</style>

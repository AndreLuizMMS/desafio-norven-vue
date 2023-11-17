<template>
  <div class="list-wrap">
    <PokemonCard v-for="(pokemon, i) in pokemons" :key="i" :pokemon="pokemon" />
  </div>
</template>

<script>
import PokemonCard from './PokemonCard.vue';

export default {
  props: ['pokemons'],
  components: {
    PokemonCard
  },
  data() {
    return {
      pages: 1
    };
  }
};
</script>

<style lang="scss">
.list-wrap {
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>

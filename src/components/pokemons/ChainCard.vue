<template>
  <transition name="fade">
    <router-link :to="`/pokemon/${pokemon.id}`" class="router-link">
      <div class="card-wrap-chain">
        <img
          :src="
            pokemon.sprites.other.dream_world.front_default ??
            pokemon.sprites.front_default
          "
          alt=""
          class="pokemon-img"
        />
        <div class="info">
          <div>
            <p class="name">{{ capitalize(pokemon.name) }}</p>
            <p class="id">n°{{ pokemon.id }}</p>
          </div>
          <div class="type">
            <Types :types="pokemon.types" />
          </div>
        </div>
      </div>
    </router-link>
  </transition>
</template>

<script>
import { getPokemonByName } from '@/requests/pokemonRequests';

export default {
  props: ['pokemonName'],
  data() {
    return {
      pokemon: {}
    };
  },
  methods: {
    capitalize(string) {
      if (typeof string !== 'string') return '';
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async fecthData() {
      const data = await getPokemonByName(this.pokemonName);
      this.pokemon = data;
    }
  },
  watch: {
    pokemonName() {
      this.fecthData();
    }
  },
  async mounted() {
    this.fecthData();
  }
};
</script>

<style lang="scss">
.router-link {
  height: 100%;
}

.card-wrap-chain {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: black;
}

.info {
  display: flex;

  .name {
    font-size: 1.44rem;
  }
}

.pokemon-img {
  width: 6rem;
}
</style>

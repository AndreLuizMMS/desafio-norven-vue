<template>
  <div class="next-prev-wrapper">
    <a v-if="pokemonId > 1" :href="`/pokemon/${prevPokemon.id}`" class="pokemon-link">
      <button class="pokemon-btn">
        Anterior <span class="pokemon-number">N°{{ prevPokemon.id }}</span>
      </button>
    </a>
    <a :href="`/pokemon/${nextPokemon.id}`" class="pokemon-link">
      <button class="pokemon-btn">
        Próximo <span class="pokemon-number">N°{{ nextPokemon.id }}</span>
      </button>
    </a>
  </div>
</template>

<script>
import { getPokemonById } from '@/requests/pokemonRequests';

export default {
  props: ['pokemonId'],
  data() {
    return {
      nextPokemon: {},
      prevPokemon: {}
    };
  },
  methods: {
    async setNextPokemon() {
      this.nextPokemon = await getPokemonById(Number(this.pokemonId) + 1);
    },
    async setPrevPokemon() {
      if (this.pokemonId > 1) {
        this.prevPokemon = await getPokemonById(Number(this.pokemonId) - 1);
      }
    },
    capitalize(string) {
      if (typeof string !== 'string') return '';
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  async mounted() {
    this.setPrevPokemon();
    this.setNextPokemon();
  }
};
</script>

<style lang="scss">
.pokemon-link {
  text-decoration: none;
}

.next-prev-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40rem;
}

.pokemon-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;

  background: rgba(0, 108, 221, 0.93);
  border: 1px solid transparent;
  color: white;
  font-size: 1.3rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: white;
    border: 1px solid rgba(0, 108, 221, 0.93);
    color: black;
  }
}

.pokemon-number {
  color: rgba(0, 0, 0, 0.5);
}
</style>

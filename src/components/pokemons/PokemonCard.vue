<template>
  <div class="card-wrap">
    <img :src="pokemonData.sprites.front_default" alt="" class="pokemon-img" />
    <div class="info">
      <div>
        <p class="id">N° {{ pokemonData.id }}</p>
        <p class="name">{{ capitalize(pokemon.name) }}</p>
      </div>
      <div class="type">
        <Types :types="pokemonData.types" />
      </div>
    </div>
  </div>
</template>

<script>
import instance from '@/requests/axios';
import Types from './Types.vue';

export default {
  props: ['pokemon'],
  components: {
    Types
  },
  data() {
    return {
      pokemonData: {}
    };
  },
  methods: {
    capitalize(string) {
      if (typeof string !== 'string') return '';
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  async mounted() {
    const response = await instance.get(`${this.pokemon.url}`);
    this.pokemonData = response.data;
  }
};
</script>

<style lang="scss" scoped>
.card-wrap {
  display: flex;
  align-items: center;
  padding-block: 0.5rem;

  background: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}

.pokemon-img {
  width: 10rem;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  .id {
    font-weight: bold;
    color: gray;
  }

  .name {
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>

<template>
  <transition name="fade">
    <router-link :to="`/pokemon/${pokemonData.id}`" class="router-link">
      <div class="card-wrap">
        <img
          :src="pokemonData.sprites.other.dream_world.front_default"
          alt=""
          class="pokemon-img"
        />
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
    </router-link>
  </transition>
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
  transition: 0.2s;

  &:hover {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 1);
    transform: scale(1.025);
  }
}

.pokemon-img {
  width: 12rem;
  height: 12rem;
  object-fit: fill;
  border-radius: 8px 0 0 8px; // Optional: Add border-radius to match the container's rounded corners
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

.router-link {
  text-decoration: none;
  color: black;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

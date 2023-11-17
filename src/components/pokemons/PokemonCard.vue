<template>
  <transition name="fade">
    <div class="card-wrap">
      <div class="section">
        <div class="favorite">
          <button
            class="add"
            @click="addToFavorite()"
            v-if="!isFavorite"
            type="button
            "
          >
            <img src="@/assets/white-star.png" alt="" />
          </button>
          <button class="remove" @click="removeFavorite()" v-else>
            <img src="@/assets/trash.png" alt="" />
          </button>
        </div>
        <router-link
          :to="`/pokemon/${pokemonData.id}`"
          class="router-link"
          v-if="pokemonData"
        >
          <img
            :src="
              pokemonData.sprites.other.dream_world.front_default ??
              pokemonData.sprites.front_default
            "
            class="pokemon-img"
          />
        </router-link>
      </div>
      <router-link
        :to="`/pokemon/${pokemonData.id}`"
        class="router-link"
        v-if="pokemonData"
      >
        <div class="info">
          <div>
            <p class="id">N° {{ pokemonData.id }}</p>
            <p class="name">{{ capitalize(pokemon.name) }}</p>
          </div>
          <div class="type">
            <Types :types="pokemonData.types" />
          </div>
        </div>
      </router-link>
    </div>
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
    },
    async fetchData() {
      const response = await instance.get(`${this.pokemon.url}`);
      this.pokemonData = response.data;
    },
    addToFavorite() {
      this.$store.commit('addToFavorite', {
        name: this.pokemonData.name,
        id: this.pokemonData.id
      });
    },
    removeFavorite() {
      this.$store.commit('removeFavorite', {
        name: this.pokemonData.name,
        id: this.pokemonData.id
      });
    }
  },
  computed: {
    isFavorite() {
      const favorites = this.$store.getters.getFavoritePokemons;
      return favorites.some(pokemon => this.pokemonData.id === pokemon.id);
    }
  },
  watch: {
    async pokemon() {
      this.fetchData();
    }
  },
  async mounted() {
    this.fetchData();
  }
};
</script>

<style lang="scss" scoped>
.favorite {
  .add {
    display: flex;
    align-items: center;
    padding: 0.5rem;

    background: rgba(0, 108, 221, 0.93);
    border: 1px solid transparent;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      border: 1px solid black;
      color: black;
      transform: scale(1.1);
    }

    img {
      width: 0.8rem;
    }
  }

  .remove {
    display: flex;
    align-items: center;
    padding: 0.5rem;

    background: #dc2626;
    border: 1px solid transparent;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      border: 1px solid black;
      color: black;
      transform: scale(1.1);
    }
    img {
      width: 0.8rem;
    }
  }
}

.section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.card-wrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
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

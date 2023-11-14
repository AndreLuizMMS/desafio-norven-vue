<template>
  <div class="home-wrapper">
    <div class="header">
      <label for="query">Nome ou Número</label>
      <input type="text" name="query" placeholder="Pesquisar" />
      <div class="buttons">
        <button>Buscar</button>
        <button>Limpar</button>
        <button @mouseenter="hoverButton(true)" @mouseleave="hoverButton(false)">
          Aleatório
          <img :src="shuffleImageSrc" class="shuffle-img" />
        </button>
      </div>
    </div>
    <PokemonList :pokemons="pokemons" />
    <footer>
      <button class="load-more-btn" @click="pageIncerment()">Carregar mais</button>
    </footer>
  </div>
</template>

<script>
import PokemonList from '../components/pokemons/PokemonList.vue';

export default {
  components: {
    PokemonList
  },
  data() {
    return {
      isHovered: true,
      page: 2
    };
  },
  methods: {
    async hoverButton(isHovered) {
      this.isHovered = isHovered;
    },
    async fetchPokemons() {
      this.$store.dispatch('fetchPokemons', this.page);
    },
    pageIncerment() {
      this.page++;
      this.fetchPokemons();
      console.log(this.page);
    }
  },
  computed: {
    shuffleImageSrc() {
      return this.isHovered
        ? require('../assets/black-shuffle.png')
        : require('../assets/white-shuffle.png');
    },
    pokemons() {
      return this.$store.getters.getPokemons;
    }
  },
  async mounted() {
    this.fetchPokemons();
  }
};
</script>

<style lang="scss">
.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;

  label {
    font-weight: bold;
    font-size: 1.5rem;
  }

  input {
    background-color: #f7f7f9;
    border: none;
    border-radius: 5px;
    padding: 0.8rem 2rem;
    width: 90%;
    margin-top: 1rem;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    outline: none;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;

      background: rgba(0, 108, 221, 0.93);
      border: 1px solid transparent;
      color: white;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background: white;
        border: 1px solid rgba(0, 108, 221, 0.93);
        color: black;
      }
    }

    .shuffle-img {
      width: 1.5rem;
    }
  }
}

footer {
  margin-top: 2rem;
}

.load-more-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem 2rem;

  background: rgba(0, 108, 221, 0.93);
  border: 1px solid transparent;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: white;
    border: 1px solid rgba(0, 108, 221, 0.93);
    color: black;
  }
}
</style>

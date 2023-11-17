<template>
  <div class="home-wrapper">
    <form class="input-box" @submit.prevent="queryPokemons()">
      <div class="header">
        <label for="query">Pesquisar por nome</label>
        <Autocomplete
          :items="pokemonNames"
          @autocomplete-selected="handleAutocompleteSelection"
        />
        <div class="buttons">
          <button type="submit">Buscar</button>
        </div>
      </div>
    </form>

    <PokemonList :pokemons="pokemons" v-if="pokemons.length > 0" />

    <footer>
      <button v-if="pokemons.length > 1" class="load-more-btn" @click="pageIncerment()">
        Carregar mais
      </button>
      <button v-else class="load-more-btn" @click="pageIncerment()">Limpar</button>
    </footer>
  </div>
</template>

<script>
import Autocomplete from '../components/Autocomplete.vue';
import PokemonList from '../components/pokemons/PokemonList.vue';

import { names } from '@/data/pokemonNames';
import { fetchPokemons } from '@/requests/pokemonRequests';

export default {
  components: {
    Autocomplete,
    PokemonList
  },
  data() {
    return {
      pages: 2,
      search: '',
      pokemons: [],
      isHovered: true,
      pokemonNames: names()
    };
  },
  methods: {
    async queryPokemons() {
      if (this.search.length > 1) {
        this.pokemons = [
          {
            name: this.search,
            url: `https://pokeapi.co/api/v2/pokemon/${this.search}`
          }
        ];
      }
    },
    async fetchPokemons() {
      const data = await fetchPokemons(this.pages);
      this.pokemons = data;
    },
    hoverButton(isHovered) {
      this.isHovered = isHovered;
    },
    pageIncerment() {
      this.pages++;
      this.fetchPokemons();
    },
    clearQuery() {
      this.search = '';
    },
    handleAutocompleteSelection(selectedResult) {
      this.search = selectedResult;
    }
  },
  async mounted() {
    this.fetchPokemons();
    console.log(names());
  }
};
</script>

<style lang="scss">
.input-box {
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
}

.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
}

.header {
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;

  label {
    font-size: 1.5rem;
  }

  input {
    background-color: #f7f7f9;
    border: none;
    border-radius: 5px;
    padding: 0.8rem 2rem;
    width: 90%;
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

<template>
  <div>
    <div class="about-wrapper" v-if="currentPokemon">
      <header>
        <NextPrevious :pokemonId="pokemonId" />
      </header>

      <div class="about-card">
        <div class="title">
          <span class="name">{{ capitalize(currentPokemon.name) }}</span>
          <span class="num">N° {{ currentPokemon.id }}</span>
        </div>

        <div class="pokemon-info-wrapper">
          <div class="info-sec">
            <div class="img-wra">
              <img
                :src="
                  currentPokemon.sprites.other.dream_world.front_default ??
                  currentPokemon.sprites.front_default
                "
                alt=""
              />
            </div>
            <div class="info-card">
              <InfoCard :pokemon="currentPokemon" />
              <br />
              <Types
                :types="currentPokemon.types"
                class="lg-types"
                :key="currentPokemon.id"
              />
            </div>
          </div>

          <div class="info-sec">
            <EvolutionChain :pokemonName="currentPokemon.name" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="not-found-wrapper">
      <h1 class="not-found">Pokemon não encontrado</h1>
      <router-link to="/" tag="a" class="back-to-home"> Voltar </router-link>
    </div>
  </div>
</template>

<script>
import Types from '@/components/pokemons/Types.vue';
import InfoCard from '../components/pokemons/InfoCard.vue';
import NextPrevious from '@/components/pokemons/NextPrevious.vue';
import EvolutionChain from '@/components/pokemons/EvolutionChain.vue';

import { getPokemonById } from '@/requests/pokemonRequests';

export default {
  data() {
    return {
      currentPokemon: {}
    };
  },
  components: {
    Types,
    InfoCard,
    NextPrevious,
    EvolutionChain
  },
  methods: {
    capitalize(string) {
      if (typeof string !== 'string') return '';
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  computed: {
    pokemonId() {
      return this.$route.params.id;
    }
  },
  async mounted() {
    this.currentPokemon = await getPokemonById(this.pokemonId);
  }
};
</script>

<style scoped lang="scss">
.not-found-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .back-to-home {
    text-decoration: underline;
  }

  .not-found {
    font-weight: 400;
    margin-block: 1rem;
  }
}
.lg-types {
  font-size: 2rem;
  font-weight: bold;
}

.about-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 4rem;
  height: 100vh;
}

.title {
  display: flex;
  align-items: baseline;
  gap: 2rem;

  .name {
    font-size: 3rem;
    font-weight: bold;
  }
  .num {
    font-size: 2rem;
    color: gray;
  }
}

.about-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: #faf6f6;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 2rem;
}

.pokemon-info-wrapper {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-between;
  gap: 2rem;
}

.info-sec {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;
}
</style>

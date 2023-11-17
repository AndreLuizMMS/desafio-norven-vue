<template>
  <div class="evolution-chain-wrap" v-if="pokemonEvolution.length > 1">
    <header>
      <span class="header-title">Evoluções</span>
    </header>

    <div class="cards-wrapper">
      <ChainCard
        v-for="(evolution, i) in pokemonEvolution"
        :key="i"
        :pokemonName="evolution.name"
      />
    </div>
  </div>
  <div class="evolution-chain-wrap" v-else>
    <span class="no-evolution">Nenhuma Evolução</span>
  </div>
</template>

<script>
import ChainCard from './ChainCard.vue';

import { getEvolutionChainByName } from '@/requests/pokemonRequests';

export default {
  props: ['pokemonName'],
  components: {
    ChainCard
  },
  data() {
    return {
      pokemonEvolution: []
    };
  },
  methods: {
    async setEvolutionChain() {
      const data = await getEvolutionChainByName(this.pokemonName);
      var evoChain = [];
      var evoData = data.chain;

      do {
        var evoDetails = evoData['evolution_details'][0];
        evoChain.push({
          name: evoData.species.name,
          min_level: !evoDetails ? 1 : evoDetails.min_level
        });
        evoData = evoData['evolves_to'][0];
      } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

      this.pokemonEvolution = evoChain;
    }
  },
  watch: {
    async pokemonName() {
      await this.setEvolutionChain();
    }
  },
  async mounted() {
    await this.setEvolutionChain();
  }
};
</script>

<style lang="scss">
.no-evolution {
  font-size: 1.2rem;
}

.header-title {
  font-size: 2rem;
}

.evolution-chain-wrap {
  background: #fefefe;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
}

.cards-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

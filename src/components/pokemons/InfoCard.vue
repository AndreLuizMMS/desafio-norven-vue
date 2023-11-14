<template>
  <div class="info-card-wrapper">
    <div v-for="(pokemonStat, i) in pokemonStats" :key="i" class="stat-wrapper">
      <span class="stat-name">{{ capitalize(pokemonStat.stat.name) }}</span>
      <span class="stat-value"> {{ pokemonStat.base_stat }} <span>p</span> </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pokemon'],
  data() {
    return {};
  },
  methods: {
    capitalize(string) {
      if (typeof string !== 'string') return '';
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  computed: {
    pokemonStats() {
      return this.pokemon.stats;
    }
  }
};
</script>

<style lang="scss">
.info-card-wrapper {
  background: rgba(0, 108, 221, 0.93);
  width: 20rem;
  border-radius: 5px;
  box-shadow: 1px 1px 5px black;
  color: white;
}

.stat-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  font-size: 1.4rem;

  .stat-name {
    font-weight: bold;
  }

  .stat-value {
    span {
      font-size: 1rem;
    }
  }
}
</style>

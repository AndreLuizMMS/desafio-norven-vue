<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background: #fafafa;
}
</style>

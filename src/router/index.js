import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Favorites from '../views/Favorites.vue';
import PokemonAbout from '../views/PokemonAbout.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home, name:'Home-page' },
  { path: '/favoritos', component: Favorites, name:'Favoritos-page' },
  { path: '/pokemon/:id', component: PokemonAbout, name:'Pokemon-about' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

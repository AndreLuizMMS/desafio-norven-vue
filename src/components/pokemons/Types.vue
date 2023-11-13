<template>
  <div class="type">
    <p v-for="type in types" :key="type" :class="getTypeClass(type.type.name)">
      {{ type.type.name }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['types'],
  methods: {
    getTypeClass(typeName) {
      const typeClassMap = {
        fire: 'fire',
        water: 'water',
        poison: 'poison',
        normal: 'normal',
        electric: 'electric',
        bug: 'bug',
        ground: 'ground',
        flying: 'flying',
        fighting: 'fighting',
        psychic: 'psychic',
        steel: 'steel',
        ice: 'ice',
        ghost: 'ghost',
        rock: 'rock',
        grass: 'grass'
      };

      return typeClassMap[typeName] || '';
    }
  }
};
</script>

<style lang="scss">
.type {
  display: flex;
  flex-direction: column;
  gap: 7px;
  p {
    padding: 0.1em 0.3rem;
    border-radius: 5px;
  }
}

.grass {
  background: rgb(155, 204, 80);
}
.fire {
  background: rgb(253, 125, 36);
}
.water {
  background: rgb(69, 146, 196);
}
.poison {
  background: rgb(185, 127, 201);
}
.normal {
  background: rgb(164, 172, 175);
}
.electric {
  background: rgb(238, 213, 53);
}
.bug {
  background: rgb(114, 159, 63);
}
.ground {
  background-image: linear-gradient(rgb(247, 222, 63) 50%, rgb(171, 152, 66) 50%);
}
.flying {
  background-image: linear-gradient(rgb(61, 199, 239) 50%, rgb(189, 185, 184) 50%);
}
.fighting {
  background: rgb(213, 103, 35);
}
.psychic {
  background: rgb(243, 102, 185);
}
.steel {
  background: rgb(158, 183, 184);
}
.ice {
  background: rgb(81, 196, 231);
}
.ghost {
  background: rgb(123, 98, 163);
}
.rock {
  backdrop-filter: rgb(163, 140, 33);
}
</style>

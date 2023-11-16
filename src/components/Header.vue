<template>
  <header>
    <div class="button-wrapper">
      <router-link to="/" tag="div">
        <img src="../assets/pokedexLogo.png" alt="" class="logo" />
      </router-link>
      <router-link to="/favorites" tag="button">
        Meus favoritos
        <img src="../assets/white-star.png" alt="" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
$red: rgb(211, 43, 43);

.button-wrapper {
  background: $red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  .logo {
    width: 10rem;
    cursor: pointer;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;

    background: rgba(0, 108, 221, 0.93);
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      padding: 0.6rem;
    }

    img {
      width: 1rem;
    }
  }
}
</style>

<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <main>
    <left-nav />
    <router-view />
  </main>
</template>

<script>
import LeftNav from './components/LeftNav.vue';

export default {
  components: {
    'left-nav': LeftNav
  }
}
</script>

<style>
main {
  display: grid;
  grid-template-columns: 25% 75%;
  height: 100vh;
  overflow: hidden;
}
</style>

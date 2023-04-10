<template>
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
}

@media (max-width: 575.98px) {
  main {
    grid-template-columns: 100%;
  }

  main>*:first-child {
    display: none;
  }
}
</style>

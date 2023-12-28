<template>
  <Header />
  <main>
    <slot />
  </main>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'LayoutBase',

  components: {
    Header,
  },
};
</script>

<style scoped></style>

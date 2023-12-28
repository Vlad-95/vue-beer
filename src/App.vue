<template>
  <LayoutBase>
    <RouterView> </RouterView>
  </LayoutBase>
</template>

<script>
import LayoutBase from './components/LayoutBase.vue';

export default {
  name: 'App',

  components: {
    LayoutBase,
  },

  setup() {},
};
</script>

<style scoped></style>

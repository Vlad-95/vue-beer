<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiWrapper',
};
</script>

<style scoped>
.wrapper {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>

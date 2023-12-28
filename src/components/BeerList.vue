<template>
  <div class="beer-list">
    <UiWrapper>
      <div class="beer-list__wrap">
        <BeerListItem
          v-for="beer in beers"
          :beer="beer"
        />
      </div>
    </UiWrapper>
  </div>
</template>

<script>
import UiWrapper from './UIElems/UiWrapper.vue';
import BeerListItem from './BeerListItem.vue';

export default {
  name: 'BeerList',

  components: {
    UiWrapper,
    BeerListItem,
  },

  props: {
    beers: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.beer-list {
  padding: 40px 0;

  .beer-list__wrap {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }
}
</style>

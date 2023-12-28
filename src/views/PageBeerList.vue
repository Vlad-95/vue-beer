<template>
  <BeerList
    v-if="beers"
    :beers="beers"
  />
</template>

<script>
import { onMounted, ref } from 'vue';

import { getBeers } from '../components/api/beerApi';

// import UiLoading from '../components/UIElems/UiLoading.vue';
// import Uiwrapper from '../components/UIElems/Uiwrapper.vue';
import BeerList from '../components/BeerList.vue';

export default {
  name: 'PageBeerList',

  components: {
    BeerList,
    // UiLoading,
    // Uiwrapper,
  },

  setup() {
    const beers = ref(null);
    onMounted(async () => {
      beers.value = (await getBeers()).data;

      console.log(beers.value);
    });

    return {
      beers,
    };
  },
};
</script>

<style scoped></style>

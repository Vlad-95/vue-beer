<template>
  <BeerDetail :beer="beer" />
</template>

<script>
import { ref, onMounted } from 'vue';

import { getBeer } from '../components/api/beerApi';

import BeerDetail from '../components/BeerDetail.vue';

export default {
  name: 'PageBeerDetail',

  components: {
    BeerDetail,
  },

  props: {
    beerId: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const beer = ref(null);

    onMounted(async () => {
      beer.value = (await getBeer(props.beerId)).data[0];
    });

    return {
      beer,
    };
  },
};
</script>

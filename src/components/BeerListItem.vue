<template>
  <RouterLink
    class="item"
    :to="{ name: 'beerDetail', params: { beerId: beer.id } }"
    :key="beer.id"
  >
    <div class="image">
      <img
        :src="beer.image_url"
        alt=""
      />
    </div>

    <div class="content">
      <div class="content__name">{{ beer.name }}</div>
      <div class="content__descr">Alc {{ beer.abv }}</div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: 'BeerListItem',

  props: {
    beer: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.item {
  width: 100%;
  position: relative;
  padding: 15px;

  &:hover {
    .content {
      opacity: 1;
    }
  }

  .image {
    position: relative;
    padding-top: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      max-width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .content {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: 0.3s;

    .content__name {
      color: #fff;
    }

    .content__descr {
      color: #fff;
    }
  }
}
</style>

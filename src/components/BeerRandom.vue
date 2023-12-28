<template>
  <div class="random">
    <UiWrapper>
      <div class="random__title">Рандомный товар</div>
      <div class="random__refresh">
        <button @click="setItem">Другой товар</button>
      </div>
      <template v-if="beer">
        <div class="random__wrap">
          <div
            class="image"
            :class="{ empty: !beer.image_url }"
          >
            <img
              v-if="beer.image_url"
              :src="beer.image_url"
              alt=""
            />
          </div>

          <div class="content">
            <div class="content__name">{{ beer.name }}</div>
            <div class="content__descr">
              <div class="wysiwyg">
                <p>{{ beer.description }}</p>
              </div>
            </div>
            <div class="content__btns">
              <RouterLink
                :to="{ name: 'beerDetail', params: { beerId: beer.id } }"
              >
                Подробнее
              </RouterLink>
              <RouterLink :to="{ name: 'beersList' }"> Продукция </RouterLink>
            </div>
          </div>
        </div>
      </template>
      <UiError v-else-if="error" />
      <UiLoading v-else />
    </UiWrapper>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

import { getRandomBeer } from './api/beerApi';

import UiWrapper from './UIElems/UiWrapper.vue';
import UiLoading from './UIElems/UiLoading.vue';
import UiError from './UIElems/UiError.vue';

export default {
  name: 'BeerRandom',

  components: {
    UiWrapper,
    UiLoading,
    UiError,
  },

  setup() {
    const beer = ref(null);
    const error = ref(false);

    onMounted(() => {
      setItem();
    });

    // Methods
    const setItem = async () => {
      error.value = false;
      beer.value = null;

      const result = await getRandomBeer();

      if (result.status == 200) {
        beer.value = result.data[0];
      } else {
        beer.value = null;
        error.value = true;
      }

      console.log(beer.value);
    };

    return {
      beer,
      setItem,
      error,
    };
  },
};
</script>

<style scoped>
.random {
  padding: 40px 0;

  .random__title {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }

  .random__refresh {
    margin-bottom: 10px;
    text-align: center;
  }

  .random__wrap {
    display: grid;
    grid-template-columns: 300px auto;
    gap: 40px;
    margin-top: 40px;
  }

  .image {
    width: 300px;
    padding-top: 100%;
    position: relative;

    &.empty {
      background-color: #808080;
    }

    & img {
      position: absolute;
      left: 0;
      top: 0;
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .content {
    .content__name {
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: 700;
    }

    .content__descr {
      margin-bottom: 20px;
    }

    .content__btns {
      display: flex;
      align-items: center;
      gap: 15px;

      & a {
        text-decoration: none;
        border: 1px solid #000;
        background-color: #000;
        padding: 10px;
        color: #fff;
      }
    }
  }
}
</style>

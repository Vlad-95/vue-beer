<template>
  <div class="beer-detail">
    <UiWrapper>
      <div
        v-if="beer"
        class="beer-detail__wrap"
      >
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

        <div class="info">
          <div class="info__title">
            {{ beer.name }} <span>{{ beer.tagline }}</span>
          </div>

          <div class="chars">
            <div class="chars__item">
              <div class="key">Alc</div>
              <div class="value">{{ beer.abv }}</div>
            </div>

            <div class="chars__item">
              <div class="key">Впервые сварено</div>
              <div class="value">{{ beer.first_brewed }}</div>
            </div>

            <div class="chars__item">
              <div class="key">pH</div>
              <div class="value">{{ beer.ph }}</div>
            </div>

            <div class="chars__block">
              <div class="name">Ингридиенты (Солод)</div>

              <div
                class="chars__item"
                v-for="item in beer.ingredients.malt"
              >
                <div class="key">{{ item.name }}</div>
                <div class="value">
                  {{ item.amount.value }}, {{ item.amount.unit }}
                </div>
              </div>
            </div>

            <div class="chars__block">
              <div class="name">Ингридиенты (Дрожжи)</div>

              <div class="chars__item">
                <div class="key">{{ beer.ingredients.yeast }}</div>
                <div class="value"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="wysiwyg">
            <h2>Описание</h2>
            <p>{{ beer.description }}</p>

            <h2>Сочетается с</h2>
            <ul>
              <li v-for="item in beer.food_pairing">
                {{ item }}
              </li>
            </ul>

            <h2>Советы пивоврам</h2>
            <p>{{ beer.brewers_tips }}</p>
          </div>

          <div class="content__back">
            <RouterLink :to="{ name: 'beersList' }">Назад к списку</RouterLink>
          </div>
        </div>
      </div>
      <UiLoading v-else />
    </UiWrapper>
  </div>
</template>

<script>
import UiWrapper from './UIElems/UiWrapper.vue';
import UiLoading from './UIElems/UiLoading.vue';

export default {
  name: 'BeerDetail',

  components: {
    UiWrapper,
    UiLoading,
  },

  props: {
    beer: {
      type: Object,
      reqiured: true,
    },
  },

  setup(props) {
    console.log(props.beer);
  },
};
</script>

<style scoped>
.beer-detail {
  padding: 40px 0;

  .beer-detail__wrap {
    display: grid;
    grid-template-areas:
      'image info'
      'content content';
    grid-template-columns: 300px auto;
  }

  .image {
    grid-area: image;
    width: 300px;
    height: 300px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info {
    grid-area: info;

    .info__title {
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 20px;

      & span {
        font-size: 17px;
        font-weight: 400;
      }
    }
  }

  .chars {
    .chars__item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid #000;

      .key {
        font-size: 17px;
        font-weight: 600;
      }
    }

    .chars__block {
      padding: 30px 0;

      .name {
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
    }
  }

  .content {
    grid-area: content;

    .content__back {
      text-align: center;
      margin-top: 40px;

      & a {
        display: inline-block;
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

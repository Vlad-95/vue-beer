<template>
  <header class="header">
    <UiWrapper>
      <div class="header__wrap">
        <RouterLink
          :to="{ name: 'index' }"
          class="logo"
        >
          <img
            src="../assets/vue.svg"
            alt=""
          />
        </RouterLink>

        <ul class="menu">
          <li class="menu__item">
            <RouterLink
              :to="{ name: 'beersList' }"
              class="menu__link"
            >
              Продукция
            </RouterLink>
          </li>

          <li class="menu__item">
            <a
              href="javascript:;"
              class="menu__link"
            >
              Элемент меню
            </a>
          </li>
        </ul>
      </div>
    </UiWrapper>
  </header>
</template>

<script>
import UiWrapper from './UIElems/UiWrapper.vue';

export default {
  name: 'Header',

  components: {
    UiWrapper,
  },
};
</script>

<style scoped>
.header {
  padding: 10px 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  .header__wrap {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .logo {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .menu {
    display: flex;
    padding: 0;
    list-style: none;
    color: #000;
    gap: 15px;

    .menu__link {
      color: #000;
      text-decoration: none;
    }
  }
}
</style>

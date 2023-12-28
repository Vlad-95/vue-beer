import { createWebHistory, createRouter } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/PageMain.vue'),
  },

  {
    path: '/beers',
    name: 'beersList',
    component: () => import('../views/PageBeerList.vue'),
  },

  {
    path: '/beers/:beerId',
    name: 'beerDetail',
    component: () => import('../views/PageBeerDetail.vue'),
    props: (to) => ({
      beerId: +to.params.beerId,
    }),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomeView.vue'),
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: () => import('./views/UserDetails.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

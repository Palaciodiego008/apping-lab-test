import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeView.vue';
import UserDetails from './views/UserDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

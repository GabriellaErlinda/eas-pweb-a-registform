import { createRouter, createWebHistory } from 'vue-router';
import PendaftaranView from '../views/PendaftaranView.vue';
import StatusView from '../views/StatusView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PendaftaranView',
      component: PendaftaranView,
    },
    {
      path: '/status',
      name: 'StatusView',
      component: StatusView,
    },
  ],
});

export default router;
// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './component/home.vue';
import profile from './component/profile.vue';

const routes = [  
  { path: '/', name: 'Home', component: Home },
  { path: '/profile', name: 'profile', component: profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

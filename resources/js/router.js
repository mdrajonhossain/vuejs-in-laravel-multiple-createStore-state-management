import { createRouter, createWebHistory } from 'vue-router';
import Home from './component/home.vue';
import Profile from './component/profile.vue';

const routes = [  
  { path: '/', name: 'Home', component: Home, meta: { title: 'Home Page' } },
  { path: '/profile', name: 'Profile', component: Profile, meta: { title: 'Profile Page' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

 

export default router;

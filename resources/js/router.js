import { createRouter, createWebHistory } from 'vue-router';
import Home from './component/home.vue';
import Profile from './component/profile.vue';
import { ref, watchEffect } from 'vue';

// Define routes
const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'Home Page' } },
  { path: '/profile', name: 'Profile', component: Profile, meta: { title: 'Profile Page' } },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});



const isAuthenticated = ref(true);
watchEffect(() => {
  if (isAuthenticated.value) {
    router.push({ name: 'Profile' });
  } else {
    router.push({ name: 'Home' });
  }
});



export default router;

import { defineStore } from 'pinia';
import router from '../router';

export const useUserStore = defineStore('user', {
  state: () => ({
    header: 'header test',
    body: 'body2',
    footer: 'footer',
    name: 'Welcome',
    filename: 'mouse'
  }),
  
  actions: {
    adme(a) {
      if (router.currentRoute.value.name === 'Home') {
        router.push({ name: 'Profile' });
    } else {
      router.push({ name: 'Home' });
    }
      
    }
  }
});




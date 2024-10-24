// main.js
import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './component/app.vue';
import router from './router';

const appInstance = createApp(App);

const pinia = createPinia();
appInstance.use(pinia);
appInstance.use(router);

appInstance.mount('#app');

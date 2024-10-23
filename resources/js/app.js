// main.js
import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './component/app.vue';

const appInstance = createApp(App);

const pinia = createPinia();
appInstance.use(pinia);

appInstance.mount('#app');

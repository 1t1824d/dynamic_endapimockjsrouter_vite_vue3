import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './mock/index';
import { registerDynamicRoutes } from './router';

const app = createApp(App);

app.use(createPinia())
app.use(router)

// 在应用挂载前注册动态路由
registerDynamicRoutes().then(() => {
    app.mount('#app');
});
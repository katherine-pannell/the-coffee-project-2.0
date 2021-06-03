import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollactive from 'vue-scrollactive'

Vue.use(VueScrollactive);

createApp(App).use(router).mount('#app')

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import { registerScrollSpy } from 'vue3-scroll-spy'

const app = createApp(App)

registerScrollSpy(app)

app.use(router)


app.mount('#app')

import { createApp } from 'vue'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import './assets/css/main.css'
import './assets/css/icon.css'
import App from './App.vue'
import store from './store'
import { createPinia } from 'pinia'
import router from './router'
import installElementPlus from './plugins/element'
const app = createApp(App)
installElementPlus(app)
// app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.use(store)
app.mount('#app')

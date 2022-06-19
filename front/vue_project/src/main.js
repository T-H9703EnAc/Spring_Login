import App from './App.vue'
import router from './router/router.js'
import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

createApp(App).use(router).mount('#app')
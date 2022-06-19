import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/login/Login.vue'
import Content from '../pages/contents/Content.vue'

const routes = [
    { 
        path: '/', 
        name: 'Home',
        component: Home
    },
    { 
        path: '/login', 
        name: 'Login',
        component: Login
    },
    { 
        path: '/content', 
        name: 'Content',
        component: Content
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
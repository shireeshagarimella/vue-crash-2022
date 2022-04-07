import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'

const routes = [
    {
        path: '/',
        name: 'Home',
        componenet: Home,
    },
    {
        path: '/about',
        name: 'About',
        componenet: About,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router 

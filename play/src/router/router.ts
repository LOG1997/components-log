import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '@/Layout/index.vue';
import Home from '@/views/Home/index.vue';

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: Home,
                name: 'Home'
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
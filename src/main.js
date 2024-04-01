import { createApp } from 'vue'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import App from './App.vue'
import './assets/main.css'

import Home from "./Pages/Home.vue";
import Menu from "./Pages/Menu.vue";
import Page from "./Pages/Page.vue";
import Info from "./Pages/Info.vue";

const app = createApp(App)

const routes = [
    { path: '/', name:'Home', component: Home },
    { path: '/menu', name:'Menu', component: Menu},
    { path: '/menu/:dish', name:'Page', component: Page},
    { path: '/menu/:dish/:recipes', name:'Info', component: Info},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})



app.use(router)

app.mount('#app')







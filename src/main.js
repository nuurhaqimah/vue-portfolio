import { createApp } from 'vue'
import App from './App.vue' 

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Projects from '../pages/Projects.vue'
import NotFound from '../pages/NotFound.vue'


const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/projects', component: Projects },
        { path: '/contact', component: Contact },
        { path: '/:pathMatch(.*)*', component: NotFound }
      ]
    })

    // Create the app and start it
    const app = createApp(App)
    app.use(router)
    app.mount('#app')   

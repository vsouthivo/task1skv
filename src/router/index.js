import { createRouter, createWebHistory } from 'vue-router'
import HelloComponentVue from '@/views/HelloComponent.vue'
import ShowComponentVue from '@/views/ShowComponent.vue'
import EditUpdateComponentVue from '@/views/Edit&updateComponent.vue'


const routes = [
  {
    path: '/',
    name: 'HelloComponentVue',
    component: HelloComponentVue
  },
  {
    path: '/show',
    name: 'ShowComponentVue',
    component: ShowComponentVue
  },
  {
    path: '/edit&update',
    name: 'EditUpdateComponentVue',
    component: EditUpdateComponentVue
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

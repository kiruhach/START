import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CatalogPage from '../views/CatalogPage.vue';
import ServicesPage from '../views/ServicesPage.vue';
import News from '../views/News.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/catalog', 
    name: 'Catalog', 
    component: CatalogPage 
  },
  { 
    path: '/services', 
    name: 'Services', 
    component: ServicesPage 
  },
  {
    path: '/news',
    name: 'News',
    component: News
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

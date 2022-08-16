import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/singleProduct',
    name: 'singleProduct',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/singleProduct.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/cart.vue')
  },
  {
    path: '/Profil',
    name: 'Profil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/profil.vue')
  },
  {
    path: '/PersonnelInfo',
    name: 'PersonnelInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/personalInfo.vue')
  },
  {
    path:'/singleCategorie',
    name:'singleCategorie',
    component:()=> import ('../views/singleCategorie')
  },
  {
    path:'/Checkout',
    name:'Checkout',
    component:()=> import ('../views/checkout.vue')
  },
  {
    path:'/payement',
    name:'payement',
    component:()=> import ('../views/payement.vue')
  },
  {
    path:'/EditCart',
    name:'EditCart',
    component:()=> import ('../views/editcart.vue')
  },
  {
    path:'/signIn',
    name:'signIn',
    component:()=> import ('../views/signIn.vue')
  },
  {
    path:'/SignUp',
    name:'SignUp',
    component:()=> import ('../views/singnUp.vue')
  },
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

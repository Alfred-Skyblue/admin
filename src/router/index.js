import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/home.vue'
import Admin from '../page/admin/admin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/admin',
    children: [
      {
        path: '/admin',
        name: 'admin',
        component: Admin
      },
      {
        path: '/business',
        name: 'business',
        component: () => import('Page/business.vue')
      },
      {
        path: '/duty',
        name: 'duty',
        component: () => import('Page/duty.vue')
      },
      {
        path: '/enterprise',
        name: 'enterprise',
        component: () => import('Page/enterprise.vue')
      },
      {
        path: '/field',
        name: 'field',
        component: () => import('Page/field.vue')
      },
      {
        path: '/log',
        name: 'log',
        component: () => import('Page/log.vue')
      },
      {
        path: '/module',
        name: 'module',
        component: () => import('Page/module.vue')
      },
      {
        path: '/organization',
        name: 'organization',
        component: () => import('Page/organization.vue')
      },
      {
        path: '/product',
        name: 'product',
        component: () => import('Page/product.vue')
      },
      {
        path: '/staff',
        name: 'staff',
        component: () => import('Page/staff.vue')
      },
      {
        path: '/system',
        name: 'system',
        component: () => import('Page/system.vue')
      },
      {
        path: '/dictionaries',
        name: 'dictionaries',
        component: () => import('Page/dictionaries.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('Page/login')
  }
]

const router = new VueRouter({
  routes
})

export default router

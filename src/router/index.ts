import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/stores/user'
import Dashboard from '@/views/Dashboard/Dashboard.vue'


export const routes: Array<RouteRecordRaw> = [
  { 
    path: '/',
    redirect: { name: 'marketplace' } 
  },
  {
    path: '/landing',
    component: () => import('@/views/Pages/Landing.vue'),
    name: 'landing',
    meta: {
      layout: 'PageLayout',
    },
  },
  {
    path: '/login',
    component: () => import('@/views/Auth/Login.vue'),
    name: 'login',
    meta: {
      layout: 'AuthLayout',
    },
  },
  {
    path: '/market-place',
    component: () => import('@/views/Pages/MarketPlace.vue'),
    name: 'marketplace',
    meta: {
      layout: 'PageLayout',
    },
  },
  {
    path: '/forgot-password',
    component: () => import('@/views/Auth/ForgotPassword.vue'),
    name: 'forgot-password',
    meta: {
      layout: 'AuthLayout',
    },
  },
  {
    path: '/register',
    component: () => import('@/views/Auth/Register.vue'),
    name: 'register',
    meta: {
      layout: 'AuthLayout',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  const userStore = useUserStore()
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth)
  if (requiresAuth && !userStore.isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router

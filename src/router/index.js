import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Registration from '@/views/Registration.vue'
import Login from '@/views/Login.vue'
import ToDoList from '@/views/toDoList.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { reuireAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { reuireAuth: true }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
    meta: { layout: 'LoginLayout', reuireAuth: false }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: 'LoginLayout', reuireAuth: false }
  },
  {
    path: '/toDoList',
    name: 'toDoList',
    component: ToDoList,
    meta: { reuireAuth: true }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/test'),
    meta: { reuireAuth: false }
  },
  {
    path: '/test/:id',
    name: 'test1',
    component: () => import(/* webpackChunkName: "about" */ '../views/test/_id.vue'),
    meta: { reuireAuth: false }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.reuireAuth) && !store.state.isAuth) {
    console.log('if')
    next({ name: '/Login' })
  } else {
    console.log('else')
    next()
  }

  // if (to.matched.some(record => record.meta.reuireAuth)) {
  //   console.log('outer if')
  //   if (!store.state.isAuth) {
  //     console.log('redirect login')
  //     next({ name: '/Login' })
  //   } else {
  //     console.log('inner else')
  //     next()
  //   }
  // } else {
  //   console.log('outer else')
  // next()
  // }
})
export default router

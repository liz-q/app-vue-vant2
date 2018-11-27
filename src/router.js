import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    name: 'collect',
    path:'/collect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/Collect.vue'),
    meta:{
      title:'收钱'
    }
  },
  {
    name:'set-money',
    component:() => import('./views/SetMoney.vue'),
    meta:{
      title:'设置金额'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || `/${route.name || ''}`;
});

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});


router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;

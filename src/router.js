import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import Away from './views/Away.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/away',
      name: 'away',
      component: Away,
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import resultComp from '../components/results.vue'
Vue.component('results',resultComp)

import searchPage from '../components/searchPage.vue'
Vue.component('search',searchPage)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'startPage',
      component: searchPage
    },
    {
      path: '/results/',
      name: 'Results',
      component: resultComp
    }
  ], mode: "history"
})

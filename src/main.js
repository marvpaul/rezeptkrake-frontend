/**
 * In this file all required components will be loaded
 * A Vuex Store is defined for communication with several components
 * Also the main app is loaded into vue here :)
 */
import Vue from 'vue'
import Vuex from 'vuex';

import App from './App'
import router from './router'



import navigation from './components/navigation.vue'
Vue.component('navigation',navigation)

import addedIngredients from './components/addedIngredients.vue'
Vue.component('addedIngredients',addedIngredients)

import loadingSymbol from './components/loading.vue'
Vue.component('loading-symbol',loadingSymbol)

import footer from './components/footer.vue'
Vue.component('footerComp',footer)

import searchbar from './components/searchbar.vue'
Vue.component('searchbar',searchbar)

import startButton from './components/startButton.vue'
Vue.component('startButton',startButton)

import resultComp from './components/results.vue'
Vue.component('results',resultComp)

import searchPage from './components/searchPage.vue'
Vue.component('search',searchPage)

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    addedItems: [[]],
    showResults: false,
    loading: false,
    recipes:[[]],
    completionIngredients: [[]],
    autocomplete: []
  }
})


var vue = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})

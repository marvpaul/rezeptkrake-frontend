/**
 * In this file all required components will be loaded
 * A Vuex Store is defined for communication with several components
 * Also the main app is loaded into vue here :)
 */
import Vue from 'vue'

import Vuex from 'vuex';
Vue.use(Vuex);

import Axios from 'axios'
Vue.prototype.$http = Axios;

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

import startButton from './components/startButton.vue'
Vue.component('startButton',startButton)

import resultComp from './components/results.vue'
Vue.component('results',resultComp)

import searchPage from './components/searchPage.vue'
Vue.component('search',searchPage)

import autoCompl from './components/autoCompl.vue'
Vue.component('auto',autoCompl)





export const store = new Vuex.Store({
  state: {
    addedItems: [[]],
    showResults: false,
    loading: false,
    recipes:[[]],
    completionIngredients: [[]]
  },
  actions: {
    loadRecipesAsync (state, addedItems) {
      //Ajax goes here
      let url = "http://localhost:8090/ingredientsSearch?";
      for(let i = 0; i < addedItems.length; i++) {
        if(addedItems[i][2].text == ""){
          //In case there isn't an amount
          url += "ingredient=" + addedItems[i][0].text + "&amount=" + "0"  + "&";
        } else{
          url += "ingredient=" + addedItems[i][0].text + "&amount=" + addedItems[i][2].text + "&";
        }

      }
      // GET some ResultObject from the server (hopefully ;))
      $.ajax({url: url, success: function(result){
        //state.loading = false;
        //router.push('results');
        alert(result);
        state.commit('setRecipes', result);
      }});
    },
    loadAutocompletion(state, value){
      $.ajax({url: "http://localhost:8090/ajax?query=" + value, success: function(result){
       let ingredientsAndId = JSON.parse(result);
        console.log(ingredientsAndId);
        state.commit('setAutocompletion', ingredientsAndId);
       }});
      //This is just for test purposes
      //let result = '[["3308"," Sauerkirschen","glas"],["3487"," Sardellen","stueck"],["3925"," Salzstangen","g"],["6507"," Salicorne","g"],["6867"," Sauerteig","g"],["7900"," Salpeter","g"],["9145"," Salzkartoffeln","n. b."],["9321"," Sauermilch",""],["9768"," Salatcreme","el"],["9880"," Salzwasser",""]]';
      //let ingredientsAndId = JSON.parse(result);
    }
  },
  mutations: {
    setRecipes(state, result){
      result = JSON.parse(result);
      if(result["recipes"] !== undefined) {
        state.addedItems = [[]];
        state.recipes = [[]];
        state.loading = false;
        for (let i = 0; i < result["recipes"].length; i++) {
          if (state.recipes[0].length == 0) {
            state.recipes[0].push(result["recipes"][i]["recipeName"]);
            state.recipes[0].push(result["recipes"][i]["link"]);
            state.recipes[0].push(result["recipes"][i]["imageLink"]);
            state.recipes[0].push(result["recipes"][i]["matchPercentage"]);
            state.recipes[0].push(result["recipes"][i]["matchedIngredients"]);
            state.recipes[0].push(result["recipes"][i]["unMatchedIngredients"]);
          } else {
            state.recipes.push([result["recipes"][i]["recipeName"], result["recipes"][i]["link"], result["recipes"][i]["imageLink"], result["recipes"][i]["matchPercentage"], result["recipes"][i]["matchedIngredients"], result["recipes"][i]["unMatchedIngredients"]]);
          }
        }
      }
    },
    resetRecipes(state){
      state.recipes = { ...state.recipes, newProp: [[]] };
    },
    setAddedIngredient(state, ingredient){
      //TODO: In case the ingredient exists already, ignore :)
          if(state.addedItems[0].length == 0){
            state.addedItems[0].push({text : ingredient[0]})
            state.addedItems[0].push({text : ingredient[1]});
            state.addedItems[0].push({text : ""});
            state.addedItems[0].push({text : ingredient[2]});
          }
          else {
            state.addedItems.push([{text: ingredient[0]},
              {text: ingredient[1]},
              {text: ""},
              {text: ingredient[2]}]);
          }
    },
    setAutocompletion(state, ingredientsAndId){
      let ingredients = new Array;
      for (let i = 0; i < ingredientsAndId.length; i++){
        let isAlreadyAdded = false;
        if(state.addedItems[0].length > 1) {
          for (let j = 0; j < state.addedItems.length; j++) {
            console.log(ingredientsAndId[i][1]);
            console.log('Added' + ' ' + state.addedItems[j][1]['text']);
            //TODO: Solve this problem. Should works, but doesen't
            if (state.addedItems[j][1]['text'] == ((ingredientsAndId[i][1]))) {
              isAlreadyAdded = true;
            }
          }
        }

        if(!isAlreadyAdded){
          ingredients[i] = ingredientsAndId[i][1];
        }
      }
      state.completionIngredients = ingredientsAndId;
      state.autocomplete = ingredients;
      //improve the autocompletion
      $('.autocomplete').data('typeahead').source = state.autocomplete;
    }
  },
})


var vue = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})



/**
 * In this file all required components will be loaded
 * A Vuex Store is defined for communication with several components
 * Also the main app is loaded into vue here :)
 */
import Vue from 'vue'
import Vuex from 'vuex';
import Axios from 'axios'

Vue.prototype.$http = Axios

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

import autoCompl from './components/autoCompl.vue'
Vue.component('auto',autoCompl)


Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    addedItems: [[]],
    showResults: false,
    loading: false,
    recipes:[[]],
    completionIngredients: [[]],
    autocomplete: []
  },
  actions: {
    loadRecipesAsync (state, addedItems) {
      //Ajax goes here
      state.loading = true;
      let url = "http://localhost:8090/ingredientsSearch?";
      for(let i = 0; i < addedItems.length; i++) {
        if(addedItems[i][2].text == ""){
          url += "ingredient=" + addedItems[i][0].text + "&amount=" + "0"  + "&";
        } else{
          url += "ingredient=" + addedItems[i][0].text + "&amount=" + addedItems[i][2].text + "&";
        }

      }
      $.ajax({url: url, success: function(result){
        alert("Done so far :) ");
        state.loading = false;
        //router.push('results');
        console.log(result);
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
      let nResult = (JSON.parse(result));
      state.addedItems = [[]];
      state.recipes = [[]];
      for(let i = 0; i < nResult["recipes"].length; i++) {
        if (state.recipes[0].length == 0) {
          state.recipes[0].push(nResult["recipes"][i]["recipeName"]);
          state.recipes[0].push(nResult["recipes"][i]["link"]);
          state.recipes[0].push(nResult["recipes"][i]["imageLink"]);
          state.recipes[0].push(nResult["recipes"][i]["matchPercentage"]);
          state.recipes[0].push(nResult["recipes"][i]["matchedIngredients"]);
          state.recipes[0].push(nResult["recipes"][i]["unMatchedIngredients"]);
        } else {
          state.recipes.push([nResult["recipes"][i]["recipeName"], nResult["recipes"][i]["link"], nResult["recipes"][i]["imageLink"], nResult["recipes"][i]["matchPercentage"], nResult["recipes"][i]["matchedIngredients"], nResult["recipes"][i]["unMatchedIngredients"]]);
        }
      }
    },
    setAddedIngredient(state, ingredient){
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



<template>
  <div style="width: 30%; margin: auto; ">
    <!-- optional indicators -->
    <i class="fa fa-spinner fa-spin" v-if="loading"></i>
    <template v-else>
      <i class="fa fa-search" v-show="isEmpty"></i>
      <i class="fa fa-times" v-show="isDirty" @click="reset"></i>
    </template>
    <!-- the input field -->
    <input type="text"
           placeholder="..."
           autocomplete="on"
           v-model="query"
           @keydown.down="down"
           @keydown.up="up"
           @keydown.enter="hit"
           @keydown.esc="reset"
           @blur="reset"
           @input="update"/>

    <!-- the list -->
    <ul v-show="hasItems">
      <li v-for="(item, $item) in items" :class="activeClass($item)" @mousedown="hit" @mousemove="setActive($item)">
        <span v-text="item[1]"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  import VueTypeahead from 'vue-typeahead'

  export default {
    extends: VueTypeahead, // vue@1.0.22+

    data () {
      return {
        // The source url
        // (required)
        src: 'http://localhost:8090/ajax',
        // The data that would be sent by request
        // (optional)
        data: {},

        // Limit the number of items which is shown at the list
        // (optional)
        limit: 10,

        // The minimum character length needed before triggering
        // (optional)
        minChars: 1,

        // Highlight the first item in the list
        // (optional)
        selectFirst: false,

        // Override the default value (`q`) of query parameter name
        // Use a falsy value for RESTful query
        // (optional)
        queryParamName: 'query'
      }
    },

    methods: {
      // The callback function which is triggered when the user hits on an item
      onHit (item) {
         console.log(item);
         this.$store.commit('setAddedIngredient', item);
      },

      // The callback function which is triggered when the response data are received
      // Here all data will be saved in completionIngredients variable in the store
      prepareResponseData (data) {
        let ingredientsAndId = JSON.parse(JSON.stringify(data));
        let ingredients = new Array;
        for (let i = 0; i < ingredientsAndId.length; i++){
            ingredients[i] = {text: ingredientsAndId[i][1]};
        }
        this.$store.state.completionIngredients = ingredientsAndId;
        return ingredientsAndId;
      }
    }
  }
</script>

<style scoped>
  ul {
    position: absolute;
    display: block;
    margin: auto;
    min-width: 12%;
    padding: 0;
    margin-top: 1%;
    background-color: #fff;
    list-style: none;
    border-radius: 1%;
    box-shadow: 0 0 10px rgba(0,0,0, 0.25);
    z-index: 1000;
  }
  li {
    padding: 1%;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    background: white;
    color: black;
  }
  li:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  li:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom: 0;
  }
  span {
    display: block;
    color: black;
  }
  .active {
    background-color: #3aa373;
  }
  .active span {
    color: #ffffff;
  }
</style>

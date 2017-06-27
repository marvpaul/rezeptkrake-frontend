<template>
  <div class="app-searchbar">
    <label>Zutaten: </label>

      <!--<input type="text" class="autocomplete" v-on:keyup="autocompletionRequest()"/>-->
    <auto></auto>

    <button class="btn btn-primary" v-on:click="addIngredient()"><i class="fa fa-plus"></i>Hinz.</button>
  </div>
</template>

<script>
  import $ from 'jquery';
  import 'bootstrap-3-typeahead';

  //TODO: reset all ingredients after performing a search
  export default{
    mounted () {
      $('.autocomplete').typeahead({ source:this.$store.state.autocomplete });
    },
    computed:{
      completionIngredients(){
        return this.$store.state.completionIngredients;
      }
    },
    methods:{
      autocompletionRequest(){
        console.log($('input').val());
        this.$store.dispatch('loadAutocompletion', $('input').val());
      },
      addIngredient(){
        let result = "";
        let i = 0;
        while(result == "" && i != this.$store.state.completionIngredients.length){
          if(this.$store.state.completionIngredients[i][1] == $('.autocomplete').val()){
            result = this.$store.state.completionIngredients[i][1];
            console.log('Added: ' + result);
            if(this.$store.state.addedItems[0].length == 0){
              this.$store.state.addedItems[0].push({text : this.$store.state.completionIngredients[i][0]})
              this.$store.state.addedItems[0].push({text : this.$store.state.completionIngredients[i][1]});
              this.$store.state.addedItems[0].push({text : ""});
              this.$store.state.addedItems[0].push({text : this.$store.state.completionIngredients[i][2]});
            }
            else{
              this.$store.state.addedItems.push([{text : this.$store.state.completionIngredients[i][0]},
                                                {text : this.$store.state.completionIngredients[i][1]},
                                                {text : ""},
                                                {text : this.$store.state.completionIngredients[i][2]}]);
            }
          }
          i++;
        }
        $(this.$refs.autocomplete).val("");
      }
    }
  };
</script>



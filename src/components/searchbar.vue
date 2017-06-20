<template>
  <div class="app-searchbar">
    <label>Zutaten: </label>

      <input type="text" ref="autocomplete" v-on:keyup="autocompletionRequest()"/>

    <button class="btn btn-primary" v-on:click="addIngredient()"><i class="fa fa-plus"></i>Hinz.</button>
  </div>
</template>

<script>
  import $ from 'jquery';
  import 'bootstrap-3-typeahead';

  export default{
    mounted () {
      $(this.$refs.autocomplete).typeahead({ source:this.$store.state.autocomplete });
    },
    computed:{
      completionIngredients(){
        return this.$store.state.completionIngredients;
      }
    },
    methods:{
      autocompletionRequest(){
        console.log($('input').val());
        /*$.ajax({url: "ajax?query=" + $('input').val(), success: function(result){
          ingredientsAndId = JSON.parse(result);
          ingredients = new Array;
          console.log(ingredientsAndId);
          for (i = 0; i < ingredientsAndId.length; i++){
            ingredients[i] = ingredientsAndId[i][1];
          }

          console.log(ingredients);
          this.$store.state.completionIngredients = ingredientsAndId;
          $(this.$refs.autocomplete).typeahead({ source:ingredients });
        }});*/
        //This is just for test purposes
        let result = '[["3308"," Sauerkirschen","glas"],["3487"," Sardellen","stueck"],["3925"," Salzstangen","g"],["6507"," Salicorne","g"],["6867"," Sauerteig","g"],["7900"," Salpeter","g"],["9145"," Salzkartoffeln","n. b."],["9321"," Sauermilch",""],["9768"," Salatcreme","el"],["9880"," Salzwasser",""]]';
        let ingredientsAndId = JSON.parse(result);
        let ingredients = new Array;
        console.log(ingredientsAndId);
        for (let i = 0; i < ingredientsAndId.length; i++){
          ingredients[i] = ingredientsAndId[i][1];
        }

        console.log(ingredients);
        this.$store.state.completionIngredients = ingredientsAndId;
        this.$store.state.autocomplete = ingredients;
        $(this.$refs.autocomplete).data('typeahead').source = this.$store.state.autocomplete;
      },
      addIngredient(){
        let result = "";
        let i = 0;
        while(result == "" && i != this.$store.state.completionIngredients.length){
          if(this.$store.state.completionIngredients[i][1] == $(this.$refs.autocomplete).val()){
            result = this.$store.state.completionIngredients[i][1];
            console.log(result);
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



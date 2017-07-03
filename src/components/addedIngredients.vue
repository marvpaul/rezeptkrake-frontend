<template>

  <!-- This is a list with all ingredients added to search -->
  <!-- TODO: Nice to have: remove feature in case user selected a false ingredient -->
    <div id="allIngredients">
        <ol>
            <li v-for="ingredient in addedItems" class="list-group-item list-group-item-action" v-if="addedItems[0].length > 0">
              <div style="width: 40%; font-size: 1rem; line-height: 1.25;">{{ ingredient[1].text }} </div>
              <div style="width: 30%;">
                <input v-if="ingredient[3].text != '' && ingredient[3].text != 'n.B.'" class="form-control" v-model="ingredient[2].text" placeholder="0" onkeypress='return event.charCode >= 48 && event.charCode <= 57'>

              </div>
              <div style="width: 20%;"><b>{{ ingredient[3].text }}</b></div>
              <button type="button" style="width: 10%;" class="btn btn-primary btn-sm" @click="remove(ingredient[0].text)" ><i class="fa fa-times" aria-hidden="true"></i></button>

            </li>
        </ol>
    </div>

</template>


<script>
  export default{
    computed: {
      addedItems(){
        return this.$store.state.addedItems;
      }
    },
    methods:{
      //Remove an ingredient
      remove (item) {
        this.$store.commit('removeIngredient', item);
      }
    }
  }
</script>

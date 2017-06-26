<template>
    <div id="allIngredients">
        <ol>
            <li v-for="ingredient in addedItems" class="list-group-item list-group-item-action" v-if="addedItems[0].length > 0">
                <div style="width: 50%; padding: .5rem .75rem; font-size: 1rem; line-height: 1.25;">{{ ingredient[1].text }} </div><div style="width: 30%;"><input v-if="ingredient[3].text != ''" class="form-control" v-model="ingredient[2].text" placeholder="0" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></div><div style="width: 20%;"><b>{{ ingredient[3].text }}</b></div>
            </li>
        </ol>
        <div id="added"></div>
    </div>
</template>


<script>
  export default{
    computed: {
      addedItems(){
        return this.$store.state.addedItems;
      }
    }
  }
</script>

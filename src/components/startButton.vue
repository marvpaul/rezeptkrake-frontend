<template>
  <p class="lead">
    <button class="btn btn-success" id="search-button" @click="startSearch()" v-if="!loading">
      <div id="inner-search-button"><i class="fa fa-search" aria-hidden="true" ></i> Los gehts!</div>
    </button>

  </p>
</template>

<script>
  export default{
    computed: {
      showProp(){
        return this.$store.state.showResults;
      },
      addedItems(){
        return this.$store.state.addedItems;
      }
    },
    methods: {
      /*This method starts the recipe searching progress */
      startSearch(){
        //TODO: Reset the recipes
        this.$store.commit('resetRecipes');
        this.$store.state.loading = true;
        this.$router.push('results');
        this.$store.dispatch('loadRecipesAsync', this.$store.state.addedItems);

      }
    }
  }
</script>

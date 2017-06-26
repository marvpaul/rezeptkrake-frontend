<template>
    <div id="navigation" >
        <!-- Simple navigation bar at top-->
        <div class="masthead clearfix">
            <div class="inner">
                <img src="../assets/krake.png" class="icon-krake"> <h3 class="masthead-brand" href="http://www.freepik.com/free-vector/octopus-icon_766812.htm">  Rezeptkrake Zutatensuche</h3>
                <nav class="nav nav-masthead">
                    <a :class="searchPage" href="#" @click="showSearch()">Suche</a>
                    <a :class="resultPage" href="#" @click="showResults()">Suchergebnisse</a>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
  export default{

    data: () => ({
      searchPage: 'nav-link active',
      resultPage: 'nav-link'
    }),
    computed:{
      recipes(){
        return this.$store.state.recipes;
      }
    },
    methods:{
      showResults(){
        //if(recipes.length > 0){
        if(this.$data.searchPage == 'nav-link active'){
          this.$store.state.showResults = true;
          this.$data.searchPage = 'nav-link';
          this.$data.resultPage = 'nav-link active';
          $('body').css('height', 'auto');
        }

        //}
      },
      showSearch(){
        if(this.$data.resultPage == 'nav-link active') {
          this.$store.state.showResults = false;
          this.$data.searchPage = 'nav-link active';
          this.$data.resultPage = 'nav-link';
          $('body').css('height', '100%');
        }
      },
      greet(){
        // `this` inside methods points to the Vue instance
        alert('Hello ' + this.name + '!')

      }
    }
  };
</script>

<style>
  .icon-krake{
    width: 6%;
    float: left;
  }
  .masthead{
    position: absolute;
  }
</style>

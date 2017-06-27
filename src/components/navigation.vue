<template>
    <div id="navigation" >
        <!-- Simple navigation bar at top-->
        <div class="masthead clearfix">
            <div class="inner">
                <img src="../assets/krake.png" class="icon-krake"> <h3 class="masthead-brand" href="http://www.freepik.com/free-vector/octopus-icon_766812.htm">  Rezeptkrake Zutatensuche</h3>
                <nav class="nav nav-masthead">

                    <router-link class="nav-link" active-class="active" to="/" exact>
                    <a>Suche</a>
                    </router-link>
                  <router-link class="nav-link" active-class="active" to="/results/" exact>
                    <a>Suchergebnisse</a>
                  </router-link>

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

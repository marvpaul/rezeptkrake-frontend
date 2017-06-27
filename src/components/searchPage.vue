<template>
<transition
  name="custom-classes-transition"
  enter-active-class="animated fadeInLeft"
  leave-active-class="animated fadeOutLeft"
>
  <div class="cover-container">

    <div class="inner cover">

      <searchbar></searchbar>
      <addedIngredients></addedIngredients>

      <p class="lead" style="clear: both;">
        Gebe Zutaten und optinal eine Menge ein. Wir suchen für dich das passende Rezept!
      </p>

      <!--TODO: Bug with align Use vue transition hooks-->
      <startButton></startButton>
      <loading-symbol></loading-symbol>


      <footerComp></footerComp>

    </div>
</div>

</transition>





</template>

<script>
  export default{
    computed:{
      showResults(){
        return this.$store.state.showResults;
      }
    }
  };
</script>


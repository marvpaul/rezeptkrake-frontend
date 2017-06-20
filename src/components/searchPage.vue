<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeInLeft"
    leave-active-class="animated fadeOutLeft"
  >
    <div v-if="!showResults">

      <div class="inner cover">

        <searchbar></searchbar>
        <addedIngredients></addedIngredients>
        <p class="lead" style="clear: both;">
          Gebe Zutaten und optinal eine Menge ein. Wir suchen für dich das passende Rezept!
        </p>


        <startButton></startButton>
        <loading-symbol></loading-symbol>

      </div>

      <footerComp></footerComp>
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


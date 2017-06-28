<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeInLeft"
    leave-active-class="animated fadeOutLeft"
  >
    <div class="cover-container">
      <div class="inner cover">


        <label>Zutaten: </label>
        <!-- This is a simple autocompletion for ingredients -->
        <auto></auto>
        <addedIngredients></addedIngredients>

        <p class="lead" style="clear: both;">
          Gebe Zutaten und optinal eine Menge ein. Wir suchen für dich das passende Rezept!
        </p>

        <!--TODO: Bug with align Use vue transition hooks-->
        <startButton></startButton>

        <!-- TODO: make align alright -->
        <!--<footerComp></footerComp>-->

      </div>
    </div>
  </transition>
</template>



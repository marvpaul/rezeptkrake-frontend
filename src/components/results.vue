<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight"
  >
    <div class="inner cover" v-if="showResults">
        Here are some results soon!
        <div id="results">
            <ol>
                <li v-for="recipe in recipes" class="list-group-item list-group-item-action" v-if="recipes[0].length > 0">
                    <div style="width: 50%;">
                        {{recipe[0].text}}
                        <img :src="recipe[2].text" width="100%">
                        <a :href="recipe[1].text"></a>
                    </div>
                </li>
            </ol>
        </div>
    </div>
  </transition>
</template>

<script>
  export default{
    computed:{
      showResults(){
        return this.$store.state.showResults;
      },
      recipes(){
        return this.$store.state.recipes;
      }
    }
  };
</script>

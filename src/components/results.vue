<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight"
  >

    <div class="inner cover" v-if="showResults" >
        <div id="results">
          <div class="jumbotron" @click="openPage(recipe[1]) " v-for="recipe in recipes">
            <img class="preview" :src="recipe[2]">
            <h2>{{recipe[0]}} </h2><br>
            <div class="progress">
              <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 7%;" :aria-valuenow="recipe[3]*100" aria-valuemin="0" aria-valuemax="100">{{recipe[3]*100}}</div>
            </div>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
  export default{
    mounted(){
      let result = '{ "recipes" : [{ "name" : "Nudeln mit Spinat, Schafskäse und Tomate", "link" : "http://www.chefkoch.de/rezepte/2147791345062204/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/214779/nudeln-mit-spinat-schafsk-se-und-tomate-1005447-164x140.jpg", "matchPercentage" : "0.07692307692307693"}, { "name" : "Lachs-Sahnesoße zu Nudeln", "link" : "http://www.chefkoch.de/rezepte/52741018615166/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/5274/lachs-sahne-sosse-zu-nudeln-804126-164x140.jpg", "matchPercentage" : "0.14285714285714285"}, { "name" : "Nudeln mit Tomaten, Schafskäse und Oliven", "link" : "http://www.chefkoch.de/rezepte/390111126377837/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/39011/nudeln-mit-tomaten-schafskaese-und-oliven-763370-164x140.jpg", "matchPercentage" : "0.125"}, { "name" : "Zucchini – Piccata auf Tomatenkompott mit Rucolapesto und Nudeln", "link" : "http://www.chefkoch.de/rezepte/661341167922522/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/66134/zucchini-–-piccata-auf-tomatenkompott-mit-rucolapesto-und-nudeln-974835-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Nudelauflauf mit Spinat und Lachs", "link" : "http://www.chefkoch.de/rezepte/97851038758685/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/9785/nudelauflauf-mit-spinat-und-lachs-668268-164x140.jpg", "matchPercentage" : "0.1111111111111111"}, { "name" : "Italienischer Nudelsalat à la Lisa", "link" : "http://www.chefkoch.de/rezepte/449221137159093/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/44922/italienischer-nudelsalat-la-lisa-266781-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Yogurtlu Eriste", "link" : "http://www.chefkoch.de/rezepte/279982666451/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/279/yogurtlu-eriste-1022419-164x140.jpg", "matchPercentage" : "0.09090909090909091"}, { "name" : "Gyros - Makkaroni - Auflauf", "link" : "http://www.chefkoch.de/rezepte/835901188372644/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/83590/gyros-makkaroni-auflauf-1012773-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Vegetarischer Nudelauflauf mit Kürbis", "link" : "http://www.chefkoch.de/rezepte/1541261260371374/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/154126/vegetarischer-nudelauflauf-mit-k-rbis-952283-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Nudeln in leichter, sämiger Thunfisch-Tomaten-Käse Sauce", "link" : "http://www.chefkoch.de/rezepte/965881202287446/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/96588/nudeln-in-leichter-s-miger-thunfisch-tomaten-k-se-sauce-983257-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Nudelsalat", "link" : "http://www.chefkoch.de/rezepte/1714361280233658/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/171436/nudelsalat-895660-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Rindersteaks auf italienisch", "link" : "http://www.chefkoch.de/rezepte/595651159195906/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/59565/rindersteaks-auf-italienisch-763967-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Italienischer Nudelsalat mit Rucola und getrockneten Tomaten", "link" : "http://www.chefkoch.de/rezepte/1015461206734011/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/101546/italienischer-nudelsalat-mit-rucola-und-getrockneten-tomaten-951952-164x140.jpg", "matchPercentage" : "0.14285714285714285"}, { "name" : "Murmels Nudelsalat", "link" : "http://www.chefkoch.de/rezepte/700651172648139/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/70065/murmels-nudelsalat-716295-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Gebratene Udon-Nudeln mit Rindfleisch", "link" : "http://www.chefkoch.de/rezepte/2813371433330979/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/281337/gebratene-udon-nudeln-mit-rindfleisch-985329-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Pasta mit Brokkoli", "link" : "http://www.chefkoch.de/rezepte/2520541395236214/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/252054/pasta-mit-brokkoli-709623-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Spaghetti - Auflauf mit Speck", "link" : "http://www.chefkoch.de/rezepte/474011141136529/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/47401/spaghetti-auflauf-mit-speck-688209-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Schnelle Makkaroni-Quiche", "link" : "http://www.chefkoch.de/rezepte/2543141398180682/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/254314/schnelle-makkaroni-quiche-685880-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Bester und Leckerster Nudelsalat", "link" : "http://www.chefkoch.de/rezepte/2917311444051618/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/291731/bester-und-leckerster-nudelsalat-990946-164x140.jpg", "matchPercentage" : "0.09090909090909091"}, { "name" : "Schweinemedaillons mit Tagliatelle", "link" : "http://www.chefkoch.de/rezepte/340191117848704/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/34019/schweinemedaillons-mit-tagliatelle-862491-164x140.jpg", "matchPercentage" : "0.1111111111111111"}, { "name" : "Spaghetti fantastico", "link" : "http://www.chefkoch.de/rezepte/165091071742885/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/16509/spaghetti-fantastico-771403-164x140.jpg", "matchPercentage" : "0.125"}, { "name" : "Pasta mit Rucola, Mascarpone und Parmaschinken", "link" : "http://www.chefkoch.de/rezepte/223991092651104/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/22399/pasta-mit-rucola-mascarpone-und-parmaschinken-763367-164x140.jpg", "matchPercentage" : "0.1111111111111111"}, { "name" : "Brunch Hähnchen-Nudelpfanne", "link" : "http://www.chefkoch.de/rezepte/2407361380230253/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/240736/brunch-haehnchen-nudelpfanne-902156-164x140.jpg", "matchPercentage" : "0.2"}, { "name" : "Spaghetti Carbonara", "link" : "http://www.chefkoch.de/rezepte/469521140541409/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/46952/spaghetti-carbonara-673530-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Gyrosauflauf mit Nudeln", "link" : "http://www.chefkoch.de/rezepte/2276601363172835/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/227660/gyrosauflauf-mit-nudeln-1026190-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Japanische kalte Buchweizennudeln mit Dip", "link" : "http://www.chefkoch.de/rezepte/322441114215643/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/32244/japanische-kalte-buchweizennudeln-mit-dip-248457-164x140.jpg", "matchPercentage" : "0.25"}, { "name" : "Spaghetti mit Sahne - Wirsing", "link" : "http://www.chefkoch.de/rezepte/258231101262211/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/25823/spaghetti-mit-sahne-wirsing-337467-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Sahne - Broccoli - Nudeln", "link" : "http://www.chefkoch.de/rezepte/384581125006094/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/38458/sahne-broccoli-nudeln-51457-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Nudelauflauf mit Brokkoli und Schinken", "link" : "http://www.chefkoch.de/rezepte/472031140743499/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/47203/nudelauflauf-mit-brokkoli-und-schinken-439788-164x140.jpg", "matchPercentage" : "0.0"}, { "name" : "Rigatoni in Schinken - Sahne - Soße", "link" : "http://www.chefkoch.de/rezepte/54051019232394/redirect.html", "imageLink" : "http://static.chefkoch-cdn.de/rs/bilder/5405/rigatoni-in-schinken-sahne-so-e-979799-164x140.jpg", "matchPercentage" : "0.0"}]}';
      let nResult = JSON.parse(result);
      for(let i = 0; i < nResult["recipes"].length; i++) {
        if (this.$store.state.recipes[0].length == 0) {
          this.$store.state.recipes[0].push(nResult["recipes"][i]["name"]);
          this.$store.state.recipes[0].push(nResult["recipes"][i]["link"]);
          this.$store.state.recipes[0].push(nResult["recipes"][i]["imageLink"]);
          this.$store.state.recipes[0].push(nResult["recipes"][i]["matchPercentage"]);
        } else {
          this.$store.state.recipes.push([nResult["recipes"][i]["name"], nResult["recipes"][i]["link"], nResult["recipes"][i]["imageLink"], nResult["recipes"][i]["matchPercentage"]]);
        }
      }
    },
    methods: {
      openPage(link){
        window.open(link, link);
      }
    },
    computed:{
      showResults(){
        return this.$store.state.showResults;
      },
      recipes(){
        return this.$store.state.recipes;
      }
    }};

</script>

<style scoped>
.jumbotron{
  width: 30%;
  color: black;
  display: inline-block;
  margin: 1em;
  padding-bottom: 0%;
  padding-top: 1em;
  padding-left: 0%;
  padding-right: 0%;
}
.jumbotron:hover{
  background-color: white;
}
.preview{
  width: 80%;
  height: 10em;
  overflow: hidden;
  border-radius: 1em;
}
.progress {
  background-color: darkkhaki ;
  height: 2em;
}
.progress-bar {
  background-color: darkkhaki ;
  height: 2em;
}
</style>

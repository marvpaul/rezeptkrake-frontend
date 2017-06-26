<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight"
  >

    <div v-if="showResults" >
        <div id="results">
          <div class="card" @click="openPage(recipe[1]) " v-for="recipe in recipes">
            <div id="card-block">
              <img class="card-img-top preview" :src="recipe[2]">
              <h2>{{recipe[0]}} </h2><br>
              <span class="badge badge-success" v-for="matchedIngredient in recipe[4]">{{matchedIngredient}} </span>
              <br>
              <span class="badge badge-danger" v-for="unMatchedIngredient in recipe[5]">{{unMatchedIngredient}} </span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 7%;" :aria-valuenow="recipe[3]*100" aria-valuemin="0" aria-valuemax="100">{{recipe[3]*100}}</div>
              </div>
          </div>
        </div>
    </div>
    </div>
  </transition>
</template>

<script>
  export default{
    mounted(){
      //TODO: Problem with parsing some results using http://127.0.0.1:8090/ingredientsSearch?ingredient=368&amount=500
      let result = '{ "recipes" : [{"recipeId":2848091436834550,"recipeName":"Chinesisch gebratene Nudeln mit Hühnchenfleisch, Ei und Gemüse","link":"http://www.chefkoch.de/rezepte/2848091436834550/Chinesisch-gebratene-Nudeln-mit-Huehnchenfleisch-Ei-und-Gemuese.html","imageLink":"http://static.chefkoch-cdn.de/rs/bilder/284809/chinesisch-gebratene-nudeln-mit-huehnchenfleisch-ei-und-gemuese-815703-164x140.jpg","matchPercentage":0.0,"matchedIngredients":[],"unMatchedIngredients":[14416,1292,1731,110,29,36,4472,83,93,6,14591,9467,14593]}, {"recipeId":52741018615166,"recipeName":"Lachs-Sahnesoße zu Nudeln","link":"http://www.chefkoch.de/rezepte/52741018615166/Lachs-Sahnesosse-zu-Nudeln.html","imageLink":"http://static.chefkoch-cdn.de/rs/bilder/5274/lachs-sahne-sosse-zu-nudeln-804126-164x140.jpg","matchPercentage":0.14285714285714285,"matchedIngredients":[368],"unMatchedIngredients":[655,70,100,72,80,14591]}, {"recipeId":390111126377837,"recipeName":"Nudeln mit Tomaten, Schafskäse und Oliven","link":"http://www.chefkoch.de/rezepte/390111126377837/Nudeln-mit-Tomaten-Schafskaese-und-Oliven.html","imageLink":"http://static.chefkoch-cdn.de/rs/bilder/39011/nudeln-mit-tomaten-schafskaese-und-oliven-763370-164x140.jpg","matchPercentage":0.125,"matchedIngredients":[368],"unMatchedIngredients":[332,77,33,3393,292,30,66]}, {"recipeId":2147791345062204,"recipeName":"Nudeln mit Spinat, Schafskäse und Tomate","link":"http://www.chefkoch.de/rezepte/2147791345062204/Nudeln-mit-Spinat-Schafskaese-und-Tomate.html","imageLink":"http://static.chefkoch-cdn.de/rs/bilder/214779/nudeln-mit-spinat-schafsk-se-und-tomate-1005447-164x140.jpg","matchPercentage":0.07692307692307693,"matchedIngredients":[368],"unMatchedIngredients":[400,29,30,675,99,33,25,828,20,798,457,3393]}, {"recipeId":661341167922522,"recipeName":"Zucchini – Piccata auf Tomatenkompott mit Rucolapesto und Nudeln","link":"http://www.chefkoch.de/rezepte/661341167922522/Zucchini-Piccata-auf-Tomatenkompott-mit-Rucolapesto-und-Nudeln.html","imageLink":"http://static.chefkoch-cdn.de/rs/bilder/66134/zucchini-–-piccata-auf-tomatenkompott-mit-rucolapesto-und-nudeln-974835-164x140.jpg","matchPercentage":0.058823529411764705,"matchedIngredients":[368],"unMatchedIngredients":[308,36,318,29,30,3393,25,163,6,20,83,3393,341,504,30,318]}, {"recipeId":965881202287446,"recipeName":"Nudeln in leichter, sämiger Thunfisch-Tomaten-Käse Sauce","link":"http://www.chefkoch.de/rezepte/965881202287446/Nudeln-in-leichter-saemiger-Thunfisch-Tomaten-Kaese-Sauce.html","imageLink":"http://static.chefkoch-cdn.de/rs/bilder/96588/nudeln-in-leichter-s-miger-thunfisch-tomaten-k-se-sauce-983257-164x140.jpg","matchPercentage":0.07692307692307693,"matchedIngredients":[368],"unMatchedIngredients":[552,29,5675,13817,273,133,72,66,292,80,83,184]}, {"recipeId":63051022929691,"recipeName":"Gebratene Nudeln","link":"http://www.chefkoch.de/rezepte/63051022929691/Gebratene-Nudeln.html","imageLink":"http://static.chefkoch-cdn.de/rs/bilder/6305/gebratene-nudeln-999980-164x140.jpg","matchPercentage":0.0,"matchedIngredients":[],"unMatchedIngredients":[1060,1731,12,184,93,824,35,444,1532,1533]}, {"recipeId":1598391267089394,"recipeName":"Gebratene Nudeln mit Gemüse, asiatisch","link":"http://www.chefkoch.de/rezepte/1598391267089394/Gebratene-Nudeln-mit-Gemuese-asiatisch.html","imageLink":"http://static.chefkoch-cdn.de/rs/bilder/159839/gebratene-nudeln-mit-gemuese-asiatisch-764996-164x140.jpg","matchPercentage":0.0,"matchedIngredients":[],"unMatchedIngredients":[1292,1758,110,1509,1637,93,83,3,6059,184,67,19,35,292,3345]}, {"recipeId":2813371433330979,"recipeName":"Gebratene Udon-Nudeln mit Rindfleisch","link":"http://www.chefkoch.de/rezepte/2813371433330979/Gebratene-Udon-Nudeln-mit-Rindfleisch.html","imageLink":"http://static.chefkoch-cdn.de/rs/bilder/281337/gebratene-udon-nudeln-mit-rindfleisch-985329-164x140.jpg","matchPercentage":0.0,"matchedIngredients":[],"unMatchedIngredients":[14568,280,1731,355,1637,5675,9228,197,1063,292]}, {"recipeId":840351189152302,"recipeName":"Nudeln selbst gemacht","link":"http://www.chefkoch.de/rezepte/840351189152302/Nudeln-selbst-gemacht.html","imageLink":"http://static.chefkoch-cdn.de/rs/bilder/84035/nudeln-selbst-gemacht-475627-164x140.jpg","matchPercentage":0.0,"matchedIngredients":[],"unMatchedIngredients":[71,6,3393,36]}, {"recipeId":1512071256565411,"recipeName":"Nudel - Würstchen - Spinnen","link":"http://www.chefkoch.de/rezepte/1512071256565411/Nudel-Wuerstchen-Spinnen.html","imageLink":"","matchPercentage":0.0,"matchedIngredients":[],"unMatchedIngredients":[6059,4283,301,247,4589,776]}, {"recipeId":1803441291635217,"recipeName":"Brokkoli - Hackfleisch - Nudeln mit Joghurt","link":"http://www.chefkoch.de/rezepte/1803441291635217/Brokkoli-Hackfleisch-Nudeln-mit-Joghurt.html","imageLink":"","matchPercentage":0.1111111111111111,"matchedIngredients":[368],"unMatchedIngredients":[131,34,169,29,5675,70,35,292]}, {"recipeId":207821086965880,"recipeName":"Milchsuppe mit Nudeln","link":"http://www.chefkoch.de/rezepte/207821086965880/Milchsuppe-mit-Nudeln.html","imageLink":"","matchPercentage":0.16666666666666666,"matchedIngredients":[368],"unMatchedIngredients":[73,70,83,555,6]}, {"recipeId":2276601363172835,"recipeName":"Gyrosauflauf mit Nudeln","link":"http://www.chefkoch.de/rezepte/2276601363172835/Gyrosauflauf-mit-Nudeln.html","imageLink":"","matchPercentage":0.14285714285714285,"matchedIngredients":[368],"unMatchedIngredients":[1538,25,100,273,31,776]}, {"recipeId":384581125006094,"recipeName":"Sahne - Broccoli - Nudeln","link":"http://www.chefkoch.de/rezepte/384581125006094/Sahne-Broccoli-Nudeln.html","imageLink":"","matchPercentage":0.09090909090909091,"matchedIngredients":[368],"unMatchedIngredients":[131,882,73,100,804,952,776,292,301,183]}, {"recipeId":210321087995155,"recipeName":"Nudeln (Capellini) in Trüffel - Sahne - Sauce","link":"http://www.chefkoch.de/rezepte/210321087995155/Nudeln-Capellini-in-Trueffel-Sahne-Sauce.html","imageLink":"","matchPercentage":0.14285714285714285,"matchedIngredients":[368],"unMatchedIngredients":[100,70,184,3563,292,318]}, {"recipeId":503121145273697,"recipeName":"Nudel - Thunfisch - Auflauf, überbacken","link":"http://www.chefkoch.de/rezepte/503121145273697/Nudel-Thunfisch-Auflauf-ueberbacken.html","imageLink":"","matchPercentage":0.1111111111111111,"matchedIngredients":[368],"unMatchedIngredients":[552,164,100,776,6,1828,20,35]}, {"recipeId":1388741243874943,"recipeName":"Nudel - Hack - Gratin","link":"http://www.chefkoch.de/rezepte/1388741243874943/Nudel-Hack-Gratin.html","imageLink":"","matchPercentage":0.1111111111111111,"matchedIngredients":[368],"unMatchedIngredients":[34,100,72,99,776,80,6,620]}, {"recipeId":198211083776757,"recipeName":"Nudeln mit Schinken - Sahne - Käse Soße","link":"http://www.chefkoch.de/rezepte/198211083776757/Nudeln-mit-Schinken-Sahne-Kaese-Sosse.html","imageLink":"","matchPercentage":0.08333333333333333,"matchedIngredients":[368],"unMatchedIngredients":[100,99,882,273,129,336,3393,30,36,6,20]}, {"recipeId":338261117612558,"recipeName":"SABO - Nudel - Thunfisch - Auflauf","link":"http://www.chefkoch.de/rezepte/338261117612558/SABO-Nudel-Thunfisch-Auflauf.html","imageLink":"","matchPercentage":0.1,"matchedIngredients":[368],"unMatchedIngredients":[552,36,100,776,828,141,1761,980,444]}, {"recipeId":1882601306242244,"recipeName":"Gebratene Nudeln Asia Art","link":"http://www.chefkoch.de/rezepte/1882601306242244/Gebratene-Nudeln-Asia-Art.html","imageLink":"","matchPercentage":0.0,"matchedIngredients":[],"unMatchedIngredients":[1060,93,185,1731,1292,29,363,83,6]}, {"recipeId":1255961231069079,"recipeName":"Nudel - Auflauf mit Putenstreifen","link":"http://www.chefkoch.de/rezepte/1255961231069079/Nudel-Auflauf-mit-Putenstreifen.html","imageLink":"","matchPercentage":0.08333333333333333,"matchedIngredients":[368],"unMatchedIngredients":[6,20,131,1632,184,29,71,200,337,66,327]}, {"recipeId":771441180008729,"recipeName":"Chinakohlsalat mit Mie - Nudeln","link":"http://www.chefkoch.de/rezepte/771441180008729/Chinakohlsalat-mit-Mie-Nudeln.html","imageLink":"","matchPercentage":0.0,"matchedIngredients":[],"unMatchedIngredients":[144,93,83,184,368,1597,724,72,355,23,70]}, {"recipeId":996991205062167,"recipeName":"Wok - Nudel - Pfanne","link":"http://www.chefkoch.de/rezepte/996991205062167/Wok-Nudel-Pfanne.html","imageLink":"","matchPercentage":0.09090909090909091,"matchedIngredients":[368],"unMatchedIngredients":[198,93,204,184,1000,5675,245,301,1716,999]}, {"recipeId":930741198400153,"recipeName":"Spinat - Nudel - Auflauf","link":"http://www.chefkoch.de/rezepte/930741198400153/Spinat-Nudel-Auflauf.html","imageLink":"","matchPercentage":0.1,"matchedIngredients":[368],"unMatchedIngredients":[34,5035,29,5675,292,876,73,100,776]}, {"recipeId":355051120810491,"recipeName":"Curryrahm - Nudeln mit Hackfleisch","link":"http://www.chefkoch.de/rezepte/355051120810491/Curryrahm-Nudeln-mit-Hackfleisch.html","imageLink":"","matchPercentage":0.09090909090909091,"matchedIngredients":[368],"unMatchedIngredients":[24,292,29,110,184,34,3345,200,301,129]}, {"recipeId":510641146726904,"recipeName":"Zucchini - Sahne - Nudeln","link":"http://www.chefkoch.de/rezepte/510641146726904/Zucchini-Sahne-Nudeln.html","imageLink":"","matchPercentage":0.1111111111111111,"matchedIngredients":[368],"unMatchedIngredients":[29,308,70,882,100,35,6,20]}, {"recipeId":1430421247909430,"recipeName":"Nudeln mit Lachs - Sahne - Sauce","link":"http://www.chefkoch.de/rezepte/1430421247909430/Nudeln-mit-Lachs-Sahne-Sauce.html","imageLink":"","matchPercentage":0.1111111111111111,"matchedIngredients":[368],"unMatchedIngredients":[1643,100,9738,72,757,29,70,3413]}, {"recipeId":936691199286611,"recipeName":"Nudeln mit Räucherlachs und Ziegenkäse","link":"http://www.chefkoch.de/rezepte/936691199286611/Nudeln-mit-Raeucherlachs-und-Ziegenkaese.html","imageLink":"","matchPercentage":0.1,"matchedIngredients":[368],"unMatchedIngredients":[29,70,100,1586,91,10632,743,1643,292]}, {"recipeId":362011121643917,"recipeName":"Nudel - Gemüse - Pfanne","link":"http://www.chefkoch.de/rezepte/362011121643917/Nudel-Gemuese-Pfanne.html","imageLink":"","matchPercentage":0.0,"matchedIngredients":[],"unMatchedIngredients":[247,292,301,368,1000,586,200,776,457]}]}';
      let nResult = (JSON.parse(result));
      for(let i = 0; i < nResult["recipes"].length; i++) {
        if (this.$store.state.recipes[0].length == 0) {
          this.$store.state.recipes[0].push(nResult["recipes"][i]["name"]);
          this.$store.state.recipes[0].push(nResult["recipes"][i]["link"]);
          this.$store.state.recipes[0].push(nResult["recipes"][i]["imageLink"]);
          this.$store.state.recipes[0].push(nResult["recipes"][i]["matchPercentage"]);
          this.$store.state.recipes[0].push(nResult["recipes"][i]["matchedIngredients"]);
          this.$store.state.recipes[0].push(nResult["recipes"][i]["unMatchedIngredients"]);
        } else {
          this.$store.state.recipes.push([nResult["recipes"][i]["name"], nResult["recipes"][i]["link"], nResult["recipes"][i]["imageLink"], nResult["recipes"][i]["matchPercentage"], nResult["recipes"][i]["matchedIngredients"], nResult["recipes"][i]["unMatchedIngredients"]]);
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
  .card{
  width: 30%;
  color: black;
  display: inline-block;
  margin: 1em;
  padding-bottom: 0%;
  padding-top: 1em;
  padding-left: 0%;
  padding-right: 0%;
  background-color: #f2fff3;
}
  .card:hover{
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

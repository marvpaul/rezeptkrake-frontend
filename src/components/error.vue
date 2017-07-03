<template>
  <!-- See this for reference https://codepad.co/snippet/lbEeOEpT-->
  <div class="l-wrapper" v-if="failure" >
    <div class="card text-center card-warning">
      <div class="card-header">
        Keine Ergebnisse
      </div>
      <div class="card-block">
        <h4 class="card-title">Leider keine Ergebnisse gefunden!</h4>
        <p class="card-text"></p>
        <router-link class="nav-link" active-class="active" to="/" exact>
          <button type="button" class="btn btn-secondary"><i class="fa fa-refresh" aria-hidden="true"></i> Erneut suchen!</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    computed:{
      failure(){
        return this.$store.state.failure;
      }
    }}
</script>

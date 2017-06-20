<template>
  <p class="lead">
    <button class="btn btn-success" id="search-button" @click="setLoading()" v-if="!loading">
      <div id="inner-search-button"><i class="fa fa-search" aria-hidden="true" ></i> Los gehts!</div>
    </button>

  </p>
</template>

<script>
  export default{
    computed: {
      showProp(){
        return this.$store.state.showResults;
      }
    },
    methods: {
      setLoading(){
        this.$store.state.loading = true;
        this.$store.state.showResults = true;
        alert(this.$store.state.showResults);
      }
    }
  }
</script>

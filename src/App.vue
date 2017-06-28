<template>
  <div class="color-overlay">
    <div class="app">
      <div class="site-wrapper">
        <div class="site-wrapper-inner" style="padding-top: 5em;">

          <!-- Navigation goes here -->
          <div class="cover-container">
            <navigation></navigation>
          </div>

          <!-- This is the router view which allows to switch
          to switch between search and result page
          TODO: Nice to have: routing with search query to bookmark and stuff like that -->
          <router-view></router-view>

        </div>
      </div>
    </div>
  </div>
</template>

<style>
  /*Import some nice stylesheets */
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css";
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
  @import "./assets/stylesheet.css";
  @import "./assets/circle.css";
  @import "https://unpkg.com/animate.css@3.5.1/animate.min.css";
  .app{
    height: 100%;
  }
</style>

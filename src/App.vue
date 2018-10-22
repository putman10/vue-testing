<template>
  <div id="app">
    <div id="nav">
      Welcome to my app
    </div>
    <router-view/>
    <router-link
        to="/away"
        class="btn btn-dark">
      <span>Learn More</span>
    </router-link>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

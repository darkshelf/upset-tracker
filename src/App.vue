<template>
  <div class="app" id="app">
    <div class="nav" id="nav">
      <router-link to='/'>Home</router-link>
      <router-link to='/bracket-view'>Bracket View</router-link> 
      <router-link to='/game-view'>Game View</router-link>
    </div>
    <router-view  />
  </div>
</template>

<style scoped>
  a,
  a:visited {
    display: inline-block;
    margin-left: 1rem;
    color: rgb(233, 120, 80);
    font-size: 1.3rem;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    color: black
  }

   .nav {
    background-color: grey;
    height: 3rem;
    line-height: 3rem;
    vertical-align: middle;
    border-bottom: 2px solid black;
  }

  .app {
    background-image: url('./assets/bballBG3.gif');
    /* background-repeat: no-repeat; */
    background-size: 100%;
  }
</style>
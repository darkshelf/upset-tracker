<template>
  <div id="app">
    <div id="nav">
      <router-link to='/'>Home</router-link>
      <router-link to='/bracket-view'>Bracket View</router-link> 
      <router-link to='/game-view'>Game View</router-link>
    </div>
    <router-view  />
  </div>
</template>

<style scoped>
  a {
    display: inline-block;
    margin-left: 20px;
  }
</style>
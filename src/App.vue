<template>
  <div id="app">
    <link rel="stylesheet" src="./assets/upset.css" >    
    <h1>2013 NCAA Tournament -  Bracket</h1>  
    
    <UpsetRegion v-for="region in regions" :region="region" :rounds="rounds" :key='region.regionId' />

  </div>
</template>

<script>
import UpsetRegion from './components/UpsetRegion.vue'
import axios from 'axios';

export default {
    name: 'App',
    components: {
      UpsetRegion
    },
    data() {
        return {
            rounds: [],
            regions: []
        }
    }, 
    mounted () {
      const apiHost = 'https://d8b2602d-6dc9-4e4f-836e-bd5357c91710.mock.pstmn.io/games/schedule/week';
      const requests = [];

      for(let x = 1; x <= 4; x++) {   
        requests.push(apiHost + x);             
      }

      Promise.all(requests.map(async (request) => {
        let data;
        await axios
        .get(request)               
        .then(response => (data = response.data))

        return data;
      })).then(values => {
        this.rounds = values; 
        this.regions = values[0];        
      });      
    }
}
</script>

<style>

</style>

<template>
    <div>
        <h1>Game View</h1>
        <div>
            <!-- Sort Buttons -->
            <div class="controls">
                <button v-on:click="sortValueDesc()">Sort By Value</button>            
                <button v-on:click="sortValueAsc()">Sort by Odds</button>            
                <button v-on:click="filters.push(filterAvailable)">Filter Available</button>   

                <!-- Region Filtering needs to be better thought out within the displayGames() logic -->
                <!-- <button v-for="(region, index) in regions" :key="index" v-on:click="displayRegion(region.regionId)">{{region.regionName}}</button> -->
            </div>
            <!-- List of each individual matchup -->
            <ul class="matchups">
                <li v-for="(game, index) in displayGames" :key="index" v-bind:class="{chosen: game.chosen}">
                    <!-- isMyChoice hardcoded for testing until user system is defined -->
                    <IndividualMatchup :game="game" :isMyChoice="true" />
                </li>                                
            </ul>  

        </div>
    </div>
</template>

<script>
    import IndividualMatchup from './IndividualMatchup.vue'
    export default {
        name: 'GameView',
        components: {
            IndividualMatchup
        },
        data() {
            return {
                games: [],
                regions: [],
                baseGames: [],
                sort: (x) => x,
                filters: []
            }
        }, 
        methods: {
            // Sorts the games by highest potential points value using seed differential
            // TODO: Refactor out this.games mutation into a return function
            sortValueAsc(){
                this.games = this.baseGames.sort( (a, b) => (a.visitingTeam.seed - a.homeTeam.seed) - (b.visitingTeam.seed - b.homeTeam.seed) )
            },
            // Sorts the games by lowest potential points value using seed differential 
            // TODO: Refactor out this.games mutation into a return function
            sortValueDesc(){
                this.games = this.baseGames.sort( (a, b) => (b.visitingTeam.seed - b.homeTeam.seed) - (a.visitingTeam.seed - a.homeTeam.seed) )
            },
            // Filters the games for a specified region
            displayRegion(regionId){
                return this.baseGames.filter( game => game.regionId === regionId )
            },
            // Filters the games by the ones already chosen
            // TODO: Refactor out this.games mutation into a return function
            filterChosen(games) {
                return games.filter( game => game.chosen )
            },
            // Filters the games by the ones that available for selection
            filterAvailable(games) {
                return games.filter( game => !game.chosen)
            }
        }, 
        computed: {        
            // Currently broken, needs to be addressed    
            displayGames: function() {
                let gamesArray = this.baseGames;  
                // Apply all filters from the filters array to gamesArray
                this.filters.forEach(filter =>{
                    console.log(filter);
                    gamesArray = filter(gamesArray);
                })

                return gamesArray
            }
        },       
        mounted () {

            // Temp change to save on server requests to pstmn. Use local node server for Dev
            // const apiHost = 'https://d8b2602d-6dc9-4e4f-836e-bd5357c91710.mock.pstmn.io/games/schedule/week1';            
            const apiHost ='http://localhost:3000/week1';

            fetch(apiHost)
            .then(response => response.json())
            .then(data => {
                this.regions = data;                
                const newData = data.map(region => {
                    return region.games.map( game => {
                        // Applies region information to each game object
                        return {regionName: region.regionName, regionId: region.regionId, ...game}
                    })
                })

                return newData;
            })
            // TODO: Combine this into previous .then block via concatAll
            .then(gamesData => {    
                const gamesArray = [];            
                gamesData.forEach( region => {                    
                    region.forEach( (game) => {                        
                        gamesArray.push(game)
                    })
                })

                // Preserve a base array of all games in the result set
                this.baseGames =  gamesArray;          
                // Array of games that are displayed in the result set after sorts and filter.
                // This can likely be refactored for a cleaner implementation       
                this.games = this.baseGames;
            }            
            )
            .catch((err) => {
                console.error(err);
            });
              
        }
    }
</script>

<style scoped>

    h1 {
        margin-left: 1rem;
    }

    .controls {
        text-align: center;
        margin-bottom: 20px;
    }

    ul.matchups {
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;
        margin: 0;
        padding: 0;
    }

    li {
        width: 90%;
        display: block;        
        border: #0BDA51 3px solid;
        background-color: rgb(233, 120, 80);
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 5px;
    }

    /* On screens that are 600px or more display cards in a grid */
    @media screen and (min-width: 600px) {
        li {
            width: 250px;
        }
    }

    li.chosen {
        border: black 3px solid;
        background-color: grey;        
    }

    li:hover {
        background-color: #0BDA51;
        cursor: pointer;
    }   
    
    li.chosen:hover {
        background-color: grey;        
    }       

</style>
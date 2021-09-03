<template>
    <div>
        <h1>Game View</h1>
        <div class="matchups">
            <button v-on:click="sortValueDesc()">Sort By Odds</button>            
            <button v-on:click="sortValueAsc()">Sort by Value</button>
            <ul>
                <li v-for="(game, index) in games" :key="index" v-bind:class="{chosen: game.chosen}">
                    <IndividualMatchup :game="game" :isMyChoice="false" />
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
                regions: []
            }
        }, 
        methods: {
            extractGames(region) {
                const regionName = region.regionName;
                const games = region.games;

                const gamesWithRegion = games.map(game => {
                    return { ...game, regionName: regionName }
                })

                return gamesWithRegion;
            },
            sortValueAsc(){
                this.games = this.games.sort( (a, b) => (a.visitingTeam.seed - a.homeTeam.seed) - (b.visitingTeam.seed - b.homeTeam.seed) )
            },
            // 
            sortValueDesc(){
                this.games = this.games.sort( (a, b) => (b.visitingTeam.seed - b.homeTeam.seed) - (a.visitingTeam.seed - a.homeTeam.seed) )
            }
        },        
        mounted () {

            const apiHost = 'https://d8b2602d-6dc9-4e4f-836e-bd5357c91710.mock.pstmn.io/games/schedule/week1';            

            fetch(apiHost)
            .then(response => response.json())
            .then(data => {
                this.regions = data;                
                const newData = data.map(region => this.extractGames(region))
            
                return newData;
            })
            .then(gamesData => {                
                gamesData.forEach( region => {                    
                    region.forEach( (game) => {                        
                        this.games.push(game)
                    })
                })                
            })
            .catch((err) => {
                console.error(err);
            });
              
        }
    }
</script>

<style scoped>
    ul {
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;
        margin: 0;
        padding: 0;
    }

    li {
        width: 300px;
        display: block;
        background-color: #0BDA51;
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 5px;
    }

    li.chosen {
        background-color: grey;
    }

</style>
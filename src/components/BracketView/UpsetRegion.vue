<template>
     <section>
        <h2>{{ region.regionName}}</h2>
        <main>
            <ul v-for="(round, index) in curentRegion" :class="`round round-${index+1}`" :key="index">
                <li v-if="index > 0" class="spacer">&nbsp;</li>
                <GameMatchup weekStatus="inProgress" :game="game" v-for="game in round.games" v-bind:key="game.gameId" />
                <li v-if="index > 0" class="spacer">&nbsp;</li>		
            </ul> 
        </main>             
    </section>
</template>
<script>
import GameMatchup from './GameMatchup.vue'

export default {
    components: {
        GameMatchup
    },
    props: {
        region: Object,
        rounds: Array
    },
    computed: {
        curentRegion: function(){            
            return this.rounds.map((round) => {
                return round.filter(round => round.regionId === this.region.regionId)[0];
            })
        }
    }
}
</script>

<style>
/*
 *  Flex Layout Specifics
*/
main{
    display:flex;
    flex-direction:row;
}
.round, .matchup{
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:200px;
    list-style:none;
    padding:0;
}
.round .spacer{ flex-grow:1; }
.round .spacer:first-child,
.round .spacer:last-child{ flex-grow:.5; }

.round .game-spacer{
    flex-grow:1;
}

/*
*  General Styles
*/
body{
    font-family:sans-serif;
    font-size:small;
    padding:10px;
    line-height:1.4em;
}

li.game{
padding-left:20px;
}

li.game.winner{
    font-weight:bold;
}
li.game span{
    float:right;
    margin-right:5px;
}

li.game-top{ border-bottom:1px solid #aaa; }

li.game-spacer{ 
    border-right:1px solid #aaa;
    min-height:40px;
}

li.game-bottom{ 
    border-top:1px solid #aaa;
}

.round.round-2 div{
    margin: 21px 0;
}
.round.round-2 div .game-spacer{
    height: 75px;
}

.round.round-3 div{
    margin: 62px 0;
}
.round.round-3 div .game-spacer{
    height: 150px;
}

.round.round-4 div .game-spacer{
    height: 330px;
}
</style>

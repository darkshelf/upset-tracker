<template>
    <div v-bind:class="{chosen: game.chosen}">
        <h4>{{game.regionName}}</h4>
       ({{game.homeTeam.seed}}) {{game.homeTeam.name}} vs ({{game.visitingTeam.seed}}) {{game.visitingTeam.name}}
       <span>Game Value: {{game.visitingTeam.seed - game.homeTeam.seed}}</span>
       <span v-if="game.chosen">Chosen by {{game.playerName}}</span>
       <div v-else>
           <span> Available</span>
            <button v-if="isMyChoice">Select</button>   
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndividualMatchup',
    props: {
        game: Object,
        isMyChoice: Boolean
    }
}
</script>
<style scoped>
    span {
        display: block;
    }
</style>
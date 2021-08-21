<template>
    <div v-bind:class="{active: isSelected}" class="matchup">
        <li class="game game-top">{{ game.homeTeam.name }} <span>{{ game.homeTeam.seed }}</span></li>
        <li class="game game-spacer"><button v-on:click="selectTeam()" class="choose">Choose Matchup</button></li>
        <li class="game game-bottom ">{{ game.visitingTeam.name }} <span>{{ game.visitingTeam.seed }}</span></li>
    </div>  
</template>

<script>

export default {
     data () {
        return { 
            isSelected: false
        }
    },
    methods: {
        selectTeam(){
            this.isSelected = !this.isSelected
        }
    },
    props: {
        game: Object
    }
}
</script>

<style scoped>
    button.choose {
        margin: 0 auto;
        float: none;
        position: relative;
        top: 2%;
        font-size: 20px;
        cursor: pointer;
        height: 96%;
        background-color: white;
        border: none;
    }

    button.choose:hover {
        color: orange;
    }

    .active {
        background-color: greenyellow;
    }

    .active button.choose {
        background-color: greenyellow;
    }

    .active button.choose:hover {
        color: purple;
    }

</style>
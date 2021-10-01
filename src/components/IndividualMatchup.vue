<template>
    <div v-bind:class="{chosen: game.chosen}">              
        <div class="gameInfo">
            <span class="gameRegion">{{game.regionName}}</span> <span class="gameValue">Game Value: {{gameValue}}</span>
        </div>
       <div class="teamInfoSmall">
           <img src="@/assets/logos/gonzaga.png"  alt="Gonzaga Bulldogs">({{game.homeTeam.seed}}) {{game.homeTeam.name}} <span class="record">(26 - 0)</span>
        </div>
        <div class="teamInfoSmall">
           <img src="@/assets/logos/app-state.png"  alt="App State Mountaineers">({{game.visitingTeam.seed}}) {{game.visitingTeam.name}} <span class="record">(17 - 11)</span>
        </div>              
       <div class="status" v-if="game.chosen">Chosen by {{game.playerName}}</div>       
       <div class="status" v-else>
            <div>Available</div>
            <button v-on:click="showConfirmModal = true" v-if="isMyChoice">Select</button>   
        </div>
        <div v-on:click="showConfirmModal = false" class="overlay" v-bind:class="{show: showConfirmModal}">
            <div class="content" v-on:click.stop="">
                Confirm Choice
                <TeamInfo :seed="visitingTeamData.seed" :teamName="visitingTeamData.name" :record="visitingTeamData.record" :logo="visitingTeamData.logo" :componentView="'vertical'"  />
                Over
                <TeamInfo :seed="homeTeamData.seed" :teamName="homeTeamData.name" :record="homeTeamData.record" :logo="homeTeamData.logo" :componentView="'vertical'" />                                
                for {{gameValue}} points
                <div><button >Yes</button><button v-on:click="showConfirmModal = false">Cancel</button></div>                
            </div>
        </div>
    </div>
</template>

<script>
import TeamInfo from './TeamInfo.vue';

export default {
    name: 'IndividualMatchup',
    components: {
        TeamInfo   
    },
    props: {
        game: Object,
        isMyChoice: Boolean        
    },
    data() {
        return {
            showConfirmModal: false,
            gameValue: this.game.visitingTeam.seed - this.game.homeTeam.seed,
            // Temp team objects for records and logos
            homeTeamData: {
                name: this.game.homeTeam.name,
                seed: this.game.homeTeam.seed,
                record: '(26 - 0)',
                logo: 'gonzaga',
            },
            visitingTeamData: {
                name: this.game.visitingTeam.name,
                seed: this.game.visitingTeam.seed,
                record: '(17 - 11)', 
                logo: 'app-state',
            }          
        }
    }
}
</script>
<style scoped>
    div img {
        height: 25px;
        width: 25px;
        vertical-align: middle;
        margin-right: 10px;
    }

    .teamInfoSmall {
        height: 30px;
        line-height: 30px;
    }

    .gameInfo {
        margin-bottom: 15px;
    }

    .gameValue {
        float: right;
    }

    .record {
        font-size: 12px;
        vertical-align: middle;
        color: rgb(30, 31, 31);
    }

    .status {
        text-align: center;
    }
    .overlay {
        display: none;
        position: fixed;
        background: rgba(51, 170, 51, .4); 
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 100;
        text-align: center;
    }
    .overlay .content {
        top: calc(50% - 100px);
        left: calc(50% - 150px);
        position: relative;
        height: 200px;
        width: 300px;
        padding: 20px;
        background: rgb(181, 181, 191);
        z-index: 200;
    }

    .overlay.show {
        display: block;
    }    

    .content div {
        display: block;
    }
</style>
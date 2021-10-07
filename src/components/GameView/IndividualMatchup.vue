<template>
<div>
    <button class="gameButton" v-on:click="showConfirmModal = true" v-if="isMyChoice" v-bind:class="{chosen: game.chosen}">              
        <div class="gameInfo">
            <span class="gameRegion">{{game.regionName}}</span> <span class="gameValue">Game Value: {{game.visitingTeam.seed - game.homeTeam.seed}}</span>
        </div>
       <div class="teamInfoSmall">
           <img src="@/assets/logos/gonzaga.png"  alt="Gonzaga Bulldogs">({{game.homeTeam.seed}}) {{game.homeTeam.name}} <span class="record">(26 - 0)</span>
        </div>
        <div class="teamInfoSmall">
           <img src="@/assets/logos/app-state.png"  alt="App State Mountaineers">({{game.visitingTeam.seed}}) {{game.visitingTeam.name}} <span class="record">(17 - 11)</span>
        </div>              
       <div class="status" v-if="game.chosen">Chosen by {{game.playerName}}</div>       
       <div class="status" v-else>
            Available
        </div>
    </button>
    <div v-on:click="showConfirmModal = false" class="overlay" v-bind:class="{show: showConfirmModal}">            
        <div class="content" v-on:click.stop="">
            <div class="loader" v-bind:class="{show: displayLoader}">Loading...</div> 
            Confirm Choice
            <TeamInfo :seed="visitingTeamData.seed" :teamName="visitingTeamData.name" :record="visitingTeamData.record" :logo="visitingTeamData.logo" :componentView="'vertical'"  />
            Over
            <TeamInfo :seed="homeTeamData.seed" :teamName="homeTeamData.name" :record="homeTeamData.record" :logo="homeTeamData.logo" :componentView="'vertical'" />                                
            for {{game.visitingTeam.seed - game.homeTeam.seed}} points
            <div><button v-on:click="displayLoader = true" >Yes</button><button v-on:click="showConfirmModal = false">Cancel</button></div>                               
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
            displayLoader: false,
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

    button.gameButton {
        width: 100%;
        height: 100%;
        cursor: pointer;
        text-align: left;
        background: none;
        border: none;
    }

    button.chosen {
        cursor: not-allowed;
    }

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

    .overlay.show,
    .loader.show {
        display: block;
    }    

    /* Loader  */
    .loader,
    .loader:before,
    .loader:after {
        border-radius: 50%;
        width: 2.5em;
        height: 2.5em;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation: load7 1.8s infinite ease-in-out;
        animation: load7 1.8s infinite ease-in-out;
    }
    .loader {
        color: #ffffff;
        font-size: 10px;
        /* margin: 80px auto; */
        left: calc(50% - 25px);
        top:  calc(50% - 25px);
        position: absolute;
        text-indent: -9999em;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
        display: none;
    }
    .loader:before,
    .loader:after {
        content: '';
        position: absolute;
        top: 0;
    }
    .loader:before {
        left: -3.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .loader:after {
        left: 3.5em;
    }

    @-webkit-keyframes load7 {
        0%,
        80%,
        100% {
            box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
            box-shadow: 0 2.5em 0 0;
        }
    }
    @keyframes load7 {
        0%,
        80%,
        100% {
            box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
            box-shadow: 0 2.5em 0 0;
        }
    }

    
</style>
import Vue from 'vue'
import VueRouter from  'vue-router'
import Home from '../components/Home.vue'
import BracketView from '../components/BracketView/BracketView.vue'
import GameView  from '../components/GameView/GameView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/bracket-view",
    name: "bracket",
    component: BracketView
  },
  {
      path: "/game-view",
      name: "game",
      component: GameView
  } 
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
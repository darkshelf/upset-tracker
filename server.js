const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(cors());

// Display week 1 data
app.get('/week1', (req, res) => {
    res.send([   
                  { 
                     "regionName": "West",
                     "regionId": 1,
                     "games": [
                        {
                           
                           "gameId":100,
                           "homeTeam":{
                              "name":"Gonzaga",
                              "seed":1
                           },
                           "visitingTeam":{
                              "name":"App St.",
                              "seed":16
                           },
                           "winner":"Gonzaga",
                           "chosen":true,
                           "playerName":"Peery"
                        },
                        {
                           "gameId":101,
                           "homeTeam":{
                              "name":"Oklahoma",
                              "seed":8
                           },
                           "visitingTeam":{
                              "name":"Missouri",
                              "seed":9
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":102,
                           "homeTeam":{
                              "name":"Creighton",
                              "seed":5
                           },
                           "visitingTeam":{
                              "name":"UCSB",
                              "seed":12
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":103,
                           "homeTeam":{
                              "name":"Virginia",
                              "seed":4
                           },
                           "visitingTeam":{
                              "name":"Ohio",
                              "seed":13
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":104,
                           "homeTeam":{
                              "name":"USC",
                              "seed":6
                           },
                           "visitingTeam":{
                              "name":"Wichita St.",
                              "seed":11
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":105,
                           "homeTeam":{
                              "name":"Kansas",
                              "seed":3
                           },
                           "visitingTeam":{
                              "name":"Eastern Wash.",
                              "seed":14
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":106,
                           "homeTeam":{
                              "name":"Oregon",
                              "seed":7
                           },
                           "visitingTeam":{
                              "name":"VCU",
                              "seed":10
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":107,
                           "homeTeam":{
                              "name":"Iowa",
                              "seed":2
                           },
                           "visitingTeam":{
                              "name":"Grand Canyon",
                              "seed":15
                           },
                           "chosen":false,
                           "playerName":null
                        }
                     ]
                  },
                  {
                     "regionName": "East",
                     "regionId": 2,
                     "games": [
                        {
                           "gameId":200,
                           "homeTeam":{
                              "name":"Michigan",
                              "seed":1
                           },
                           "visitingTeam":{
                              "name":"Mt. St. Mary's",
                              "seed":16
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":201,
                           "homeTeam":{
                              "name":"LSU",
                              "seed":8
                           },
                           "visitingTeam":{
                              "name":"St. Bonaventure",
                              "seed":9
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":202,
                           "homeTeam":{
                              "name":"Colorado",
                              "seed":5
                           },
                           "visitingTeam":{
                              "name":"Georgetown",
                              "seed":12
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":203,
                           "homeTeam":{
                              "name":"Florida St.",
                              "seed":4
                           },
                           "visitingTeam":{
                              "name":"UNC Greensboro",
                              "seed":13
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":204,
                           "homeTeam":{
                              "name":"BYU",
                              "seed":6
                           },
                           "visitingTeam":{
                              "name":"Michigan St.",
                              "seed":11
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":205,
                           "homeTeam":{
                              "name":"Texas",
                              "seed":3
                           },
                           "visitingTeam":{
                              "name":"Abilene Christian",
                              "seed":14
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":206,
                           "homeTeam":{
                              "name":"UConn",
                              "seed":7
                           },
                           "visitingTeam":{
                              "name":"Maryland",
                              "seed":10
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":207,
                           "homeTeam":{
                              "name":"Alabama",
                              "seed":2
                           },
                           "visitingTeam":{
                              "name":"Iona",
                              "seed":15
                           },
                           "chosen":false,
                           "playerName":null
                        }
                     ]
                  },
                  {
                     "regionName": "South",
                     "regionId": 3,
                     "games": [
                        {
                           "gameId":300,
                           "homeTeam":{
                              "name":"Baylor",
                              "seed":1
                           },
                           "visitingTeam":{
                              "name":"Hartford",
                              "seed":16
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":301,
                           "homeTeam":{
                              "name":"North Carolina",
                              "seed":8
                           },
                           "visitingTeam":{
                              "name":"Wisconsin",
                              "seed":9
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":302,
                           "homeTeam":{
                              "name":"Villanova",
                              "seed":5
                           },
                           "visitingTeam":{
                              "name":"Winthrop",
                              "seed":12
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":303,
                           "homeTeam":{
                              "name":"Purdue",
                              "seed":4
                           },
                           "visitingTeam":{
                              "name":"North Texas",
                              "seed":13
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":304,
                           "homeTeam":{
                              "name":"Texas Tech",
                              "seed":6
                           },
                           "visitingTeam":{
                              "name":"Utah St.",
                              "seed":11
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":305,
                           "homeTeam":{
                              "name":"Arkansas",
                              "seed":3
                           },
                           "visitingTeam":{
                              "name":"Colgate",
                              "seed":14
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":306,
                           "homeTeam":{
                              "name":"Florida",
                              "seed":7
                           },
                           "visitingTeam":{
                              "name":"Virginia Tech",
                              "seed":10
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":307,
                           "homeTeam":{
                              "name":"Ohio St.",
                              "seed":2
                           },
                           "visitingTeam":{
                              "name":"Oral Roberts",
                              "seed":15
                           },
                           "chosen":false,
                           "playerName":null
                        }
                     ]
                  },
                  {
                     "regionName": "Midwest",
                     "regionId": 4,
                     "games": [
                        {
                           "gameId":400,
                           "homeTeam":{
                              "name":"Illinois",
                              "seed":1
                           },
                           "visitingTeam":{
                              "name":"Drexel",
                              "seed":16
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":401,
                           "homeTeam":{
                              "name":"Loyola Chicago",
                              "seed":8
                           },
                           "visitingTeam":{
                              "name":"Georgia Tech",
                              "seed":9
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":402,
                           "homeTeam":{
                              "name":"Tennessee",
                              "seed":5
                           },
                           "visitingTeam":{
                              "name":"Oregon St.",
                              "seed":12
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":403,
                           "homeTeam":{
                              "name":"Oklahoma St.",
                              "seed":4
                           },
                           "visitingTeam":{
                              "name":"Liberty",
                              "seed":13
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":404,
                           "homeTeam":{
                              "name":"San Diego St.",
                              "seed":6
                           },
                           "visitingTeam":{
                              "name":"Syracuse",
                              "seed":11
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":405,
                           "homeTeam":{
                              "name":"West Virgina",
                              "seed":3
                           },
                           "visitingTeam":{
                              "name":"Morehead St.",
                              "seed":14
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":406,
                           "homeTeam":{
                              "name":"Clemson",
                              "seed":7
                           },
                           "visitingTeam":{
                              "name":"Rutgers",
                              "seed":10
                           },
                           "chosen":false,
                           "playerName":null
                        },
                        {
                           "gameId":407,
                           "homeTeam":{
                              "name":"Houston",
                              "seed":2
                           },
                           "visitingTeam":{
                              "name":"Cleveland St.",
                              "seed":15
                           },
                           "chosen":false,
                           "playerName":null
                        }
                     ]
                  }
               ])
} )

app.listen(port, () => {
    console.log(`Mock json data app listening at http://localhost:${port}`)
})
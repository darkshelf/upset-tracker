const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Collect mock data
let weekOne = require('./src/mocks/week1.json');
let weekTwo = require('./src/mocks/week2.json');
let weekThree = require('./src/mocks/week3.json');
let weekFour = require('./src/mocks/week4.json');

// Display week 1 data
app.get('/week1', (req, res) => {
   res.send(weekOne);
}),

// Display week 2 data
app.get('/week2', (req, res) => {
   res.send(weekTwo);
}),

// Display week 3 data
app.get('/week3', (req, res) => {
   res.send(weekThree);
}),

// Display week 4 data
app.get('/week4', (req, res) => {
   res.send(weekFour);
}),

app.listen(port, () => {
    console.log(`Mock json data app listening at http://localhost:${port}`)
})
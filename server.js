'use strict';

const express = require('express');
const fs = require('fs');

//  set PORT to 8080 and HOST to Localhost
const PORT = 8080;
const HOST = '0.0.0.0';

//  initialize the express application
const app = express();

var garageList;

//  Read in the contents of the garage.json file and save it to garageList
fs.readFile(__dirname + "/" + "garage.json", "utf8", function(err, data){
    if(err) {
        console.log("Error reading file garage.json");
        return;
    }
    garageList = JSON.parse(data);
    console.log(garageList.garage);  
});

//  For the base url of the application say Hello World
app.get('/', (req, res) => {
    res.send('Hello World\n');
});

//  For localhost:8080/garage yield entire garageList
app.get('/garage', (req, res) => {
    res.send(garageList);
});

//  For localhost:8080/garage/{tagID} yield that specific car or an error
app.get('/garage/:tagId', (req, res) => {
    var tagId = req.params['tagId'];
    if(tagId == 0 || tagId > garageList.garage.length) {
        //If request is made for an array value that doesn't exist throw error
        res.status(404).send("Sorry, invalid tagId for index. Array out of bounds.");
        return;
    }
    res.send(garageList.garage[tagId-1]);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
'use strict';

const express = require('express');
const fs = require('fs');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

var garageList;

fs.readFile(__dirname + "/" + "garage.json", "utf8", function(err, data){
    if(err) {
        console.log("Error reading file garage.json");
        return;
    }
    garageList = JSON.parse(data);
    console.log(garageList.garage);  
});

app.get('/', (req, res) => {
    //res.status(404).send('Sorry, we cannot find that!');
    res.send('Hello World\n');
});

app.get('/garage', (req, res) => {
    res.send(garageList);
});

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
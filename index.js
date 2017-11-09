const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./Config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, function (err){
    if(err){
        console.log('Could Not Connect To Database: ',err);
    }
    else{
        console.log('Connected to Database: '+ config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(2000 , function () {
    console.log('listening at port 2000');
});
const express = require('express'); // import express library
const path = require('path');
require('dotenv').config({path: '../.env'});
const app = express();
app.use(express.json());
const fs = require('fs');
app.use(express.static(path.join(__dirname, '../build')));

const recordsJSON = JSON.parse(fs.readFileSync('./records.json'));

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};


////// mongoDB part //////

// const mongoose = require('mongoose');
// const dbname = process.env.DATA_BASE;

// const recordSchema = new mongoose.Schema({
//     name: String,
//     date: Date
// });

// recordSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//       returnedObject.id = returnedObject._id.toString();
//       delete returnedObject._id;
//       delete returnedObject.__v;
//     }
// });
  
// const Record = mongoose.model('Record', recordSchema);

//////////////////////////

app.get('/v1/json' , (req, res) => {res.send(recordsJSON)})

let history = [
    {board : {  a: "z", b: "z", c: "z", 
                d: "z", e: "z", f: "z", 
                g: "z", h: "z", i: "z"} , turn : false , move : 0}
];

let game = {board: {a: "z", b: "z", c: "z", 
                    d: "z", e: "z", f: "z", 
                    g: "z", h: "z", i: "z"} , turn : false , move : 0};


app.get('/v1/records', (req, res) => {
    res.send(JSON.stringify(recordsJSON));
})

app.get('/v1/board', (req, res) => {
    res.send(history);
})

app.get('/v1/game' , (req, res) => {
    res.send(game);
})

app.delete('/v1/game', (req, res) => {
    game = {board : {a: "z", b: "z", c: "z", 
            d: "z", e: "z", f: "z", 
            g: "z", h: "z", i: "z"} , turn : false, move: 0};
    history = [{board : {   a: "z", b: "z", c: "z", 
                            d: "z", e: "z", f: "z", 
                            g: "z", h: "z", i: "z"} , turn : true , move : 0}];
    res.send("restarted the game");
})

app.post('/v1/records', (req, res) => {
    recordsJSON.records.push({name: req.body.name , date: req.body.date});
    fs.writeFile('./records.json' , JSON.stringify(recordsJSON), () => {console.log("json updated")});

    // const url = `mongodb+srv://yoni:${req.body.password}@firsttestcluster.uv5un.mongodb.net/${dbname}?retryWrites=true&w=majority`;
    // mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    //     .then(result => {
    //         console.log('connected to MongoDB')
    //     })
    //     .catch((error) => {
    //         console.log('error connecting to MongoDB: ', error.message)
    //     });


    // const record = new Record({
    //     name: req.body.name,
    //     date: req.body.date
    // });
    
    // record.save().then(result => {
    //     console.log('record saved!');
    //     mongoose.connection.close();
    // });
    
})

app.post('/v1/board', (req, res) => {
    console.log(history[req.body.move]);
    if (history[req.body.move] && req.body.move !== 0)
    {console.log("entered");history = history.slice(0 , req.body.move)}
    console.log(history);
    history.push(req.body);
    game.board = req.body.board;
    game.turn = req.body.turn;
    game.move = req.body.move;
    res.send(history);
})

app.get('/' , (req , res) => {
    let file = fs.readFileSync('../src/index.js');
    res.send(file);
})

app.use(unknownEndpoint);

console.log("Listening to port: " + (process.env.PORT || 3001));
app.listen(process.env.PORT || 3001); // localhost port

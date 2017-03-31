var express = require ('express');
var bodyParser = require ('body-parser');
var music = require ('./music.json');

var app = express();

app.use(bodyParser.json());

app.get('/music', function(req, res){
  res.send(music);
});

app.get('/music/:id', function(req, res) {
  var musicIndex = req.params.id;
  res.send(music[musicIndex]);
});

app.post('/music', function(req, res) {
  music.push(req.body);
  res.send(music);
});

app.put("/music/:id", function(req, res) {
  var musicIndex = req.params.id;
  music[musicIndex] = req.body;
  res.send(music);
});

app.delete("/music/:id", function(req, res) {
  var musicIndex = req.params.id;
  music.splice(musicIndex, 1);
  res.send(music);
});

app.listen(8000, function() {
  console.log("Heard it on 8000");
});

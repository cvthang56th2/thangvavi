var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});

// Routes
// app.get('/', function(req, res) {
//   res.render('index');
// })
app.get('/', function(req, res) {
  res.render('love1');
})

app.get('/love1', function(req, res) {
  res.render('love1');
})

app.get('/love2', function(req, res) {
  res.render('love2');
})

app.get('/day-la-vi', function(req, res) {
  res.render('daylavi');
})
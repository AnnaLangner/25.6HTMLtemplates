var express = require('express');
bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/store',function(req, res, next){
    console.log('I am an intermediary when requesting /store.');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/store', function (req, res) {
    res.send('This is shop');
});

app.get('/first-template', function(req, res){
    res.render('first-template');
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Sorry, we could not find what you want!')
});
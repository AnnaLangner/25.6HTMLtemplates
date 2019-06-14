var express = require('express');
bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
    res.render('index');
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Sorry, we could not find what you want!')
});
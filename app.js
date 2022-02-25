
const path = require('path');

const express = require('express');

const defaultRoutes = require('./routes/default');
const offeredPlacesRoutes = require('./routes/offeredPlaces');

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use('/', defaultRoutes);
app.use('/', offeredPlacesRoutes);

app.use(function(req, res){
    res.render('404');
});

app.use(function(error, req, res, next){
    console.log(error);
    res.render('500');
});

app.listen(3000);

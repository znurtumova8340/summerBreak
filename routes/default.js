const express = require('express');

const router = express.Router();

router.get ('/', function(req, res){
   res.render('index');
});

router.get('/aboutSpring', function(req, res){
    res.render('aboutSpring');
});

module.exports = router;
///////////////////////////////////////////////




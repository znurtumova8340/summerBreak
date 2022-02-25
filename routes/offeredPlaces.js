const express = require('express');
const { route } = require('express/lib/application');
const db = require('../util/places-data');

const router = express.Router();

router.get('/offeredPlaces', async function(req, res){
    const query = `
    SELECT * FROM places
    `
    const [places] = await db.query(query);
    res.render('offeredPlaces', {places: places});
});


router.get('/recommendPlaces', function(req, res){
    res.render('recommendPlaces')
});

router.post('/recommendPlaces', async function(req, res){
   const data = [
        req.body.name,
        req.body.address,
        req.body.price,
        req.body.website,
        req.body.description,
   ]; 
    await db.query('INSERT INTO places (name, address, price, website, description) VALUES(?)', [data,
    ]);
    res.redirect('/confirm');
});

router.get('/offeredPlaces/:id', async function(req, res){
    const query = `
        SELECT * FROM places WHERE id = ?
    `;
    const [places] = await db.query(query, [req.params.id]);
    if (!places || places.length === 0){
       return res.status(404).render('404')
    }
    res.render('offeredPlaces-details', {place: places[0]});  
});


router.get('/confirm', function(req, res){
    res.render('confirm');
});



module.exports = router;

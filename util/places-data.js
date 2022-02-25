//const path = require('path');
//const fs = require('fs');

// const filePath = path.join(__dirname,'..', 'data', 'places.json');
 
//function getAllPlaces(){
//    const fileData = fs.readFileSync(filePath);
//    const savedPlaces  = JSON.parse(fileData);

//   return savedPlaces;

//}

//function placesShared(savablePlaces){
//   fs.writeFileSync(filePath, JSON.stringify(savablePlaces));
//};

//module.exports = {
//    getAllPlaces: getAllPlaces,
//    savedPlaces: placesShared,
//};

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'summer_break',
    user: 'root',
    password: 'Solnyshko7400!'
});

module.exports = pool;
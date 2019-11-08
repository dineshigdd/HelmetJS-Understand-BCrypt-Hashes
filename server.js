'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt = require('bcrypt');
const app         = express();

fccTesting(app); //For FCC testing purposes

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
  console.log(myPlaintextPassword)
  console.log(saltRounds)
  console.log(hash)
  
    bcrypt.compare(someOtherPlaintextPassword, hash, (err, res) => {
    /*res == true or false*/
    console.log( res)
  });
  
});




//END_ASYNC

//START_SYNC



//END_SYNC


app.listen(process.env.PORT || 3000, () => {});

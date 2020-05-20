const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.status(200).send('Success');
});


/*
const port = 8080
'/' 기초
'/signup'
'/login'
'/logout'
'/mainpage' 
'/listpage'
*/
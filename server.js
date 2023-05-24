
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Task = require('./models/task');


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

mongoose.connect('yourdburl', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });


app.set('view engine', 'ejs');


app.listen(5000, () => {
  console.log('Server started on port 5000');
});
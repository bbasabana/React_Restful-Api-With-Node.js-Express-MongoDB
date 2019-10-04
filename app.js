const express = require('express');

const app =  express()
const moongose = require('mongoose');
require('dotenv/config');

// Import Routes
const PostRoute = require('./routes/posts');

// ROutes
app.use('/posts', PostRoute);
app.get('/', (req, res) => {
    res.send('we are on home')
});


// DATABASES MONGODEB

moongose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },() => 
  console.log('connnected to DB')
);


// listen server
app.listen(3000);
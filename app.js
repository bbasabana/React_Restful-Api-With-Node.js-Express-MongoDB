const express = require('express');

const app =  express()
const moongose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
// Import Routers
const PostRoute = require('./routes/posts');

app.use('/posts', PostRoute);

// Routes
app.get('/', (req, res) => {
    res.send('we are on home')
});


// DATABASES MONGODEB

moongose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },() => 
  console.log('connnected to DB')
);


// listen server
app.listen(3000);
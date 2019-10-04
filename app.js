const express = require('express');

const app =  express()
const moongose = require('mongoose');
require('dotenv/config');

// ROutes

app.get('/', (req, res) => {
    res.send('we are on home')
});

app.get('/post', () => {
    console.log('post for BB')
})

// DATABASES MONGODEB

moongose.connect(
     process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () => console.log('connnected to DB')
    );


// listen server
app.listen(3000);
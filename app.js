const express = require('express');

const app =  express()
const moongose = require('mongoose');

// ROutes

app.get('/', (req, res) => {
    res.send('we are on home')
});

app.get('/post', () => {
    console.log('post for BB')
})

// DATABASES MONGODEB

moongose.connect('mongodb+srv://BBasabana:BBasabana%402019@cluster0-kjqor.mongodb.net/admin?retryWrites=true&w=majority', 
{ useNewUrlParser: true },
 () => console.log('connnected to DB')
 );


// listen server
app.listen(3000);
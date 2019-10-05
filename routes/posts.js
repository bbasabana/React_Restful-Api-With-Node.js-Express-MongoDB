const express = require('express')
const router = express.Router();
const Post = require('../models/post')

router.get('/', (req, res) => {
    res.send('welcome to posts');
})

router.post('/', (req, res) =>{
    const post = new Post({
        title: req.body.title,
        description : req.body.desription
    });

    
});


module.exports =  router;
const express = require('express')
const router = express.Router();

router.get('/posts', (res, req) => {
    res.send('welcome to posts');
})


module.exports =  router;
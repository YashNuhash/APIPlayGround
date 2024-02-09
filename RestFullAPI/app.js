const express = require('express');

const app = express();

app.use((req,res,next) => {

    res.status(200).json({
        message: 'It works!'
    })
    console.log('In the middleware');
    next();
})

module.exports = app;
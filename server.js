const express = require('express')
require ('dotenv').config()
const app = express()

app.get('/', (reqq, res)=> {
    res.send('Hello World');
});

app.listen(process.env.PORT, ()=>{
    console.log(`app listening on PORT; ${process.env.PORT} `)
});

module.exports = app;
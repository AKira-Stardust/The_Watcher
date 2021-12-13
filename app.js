const express = require('express');

const app = express();

//app settings
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));

//GET
app.get('/', (req, res)=>{
    res.send("Hello, World!");
});

//Listen
app.listen( process.env.port || 3000);
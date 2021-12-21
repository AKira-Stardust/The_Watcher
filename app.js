//.env configuration
if (process.env.NODE_ENV !== 'production'){
   require("dotenv").config();
}

const express = require('express');
const mongoose = require('mongoose');

//Connect DB
const DBURL = process.env.DBURI;
mongoose.connect(DBURL)
.then(result => { console.log("Connected to DB!"); 
                  app.listen(process.env.port || 3000); })
    .catch( err => { console.log("Oops! Issue connecting to DB.. " + err);});

//Require Routers
const watchedRouter = require('./routers/watchedRouter');
const watchingRouter = require('./routers/watchingRouter');
const toWatchRouter = require('./routers/toWatchRouter');
const detailsRouter = require('./routers/detailsRouter');
const allRouter = require('./routers/allRouter');

//App
const app = express();

//app settings
app.set('view engine', 'ejs');

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

//Setup main index
app.get('/', (req, res)=>{
   res.redirect("/all");
});

//Setup Routers
app.use('/watchedList', watchedRouter);
app.use('/watchingList', watchingRouter);
app.use('/toWatchList', toWatchRouter);
app.use('/details', detailsRouter);
app.use('/all', allRouter);

require('dotenv').config();

const express = require('express');
const expressLayout = require ('express-ejs-layouts');

const connectDB = require('./server/config/db');

const app = express();
const PORT = process.env.PORT || 5000;


//connect to DB
connectDB();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(express.static('public')); 

//templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});   
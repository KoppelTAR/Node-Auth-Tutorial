// https://www.youtube.com/watch?v=eWGwQ1__73E&list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp&index=12
// time stamp 4:00
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
mongoose.connect('mongodb://localhost:27017/mySuperSecretDB', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex:true});


const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);
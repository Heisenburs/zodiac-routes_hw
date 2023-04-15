const express = require('express')
const app = express()

//! Data
const signs = require('./models/signs')

//! Configuration
// view engine goes here

app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())


//! Middleware




//! Index Route
// returns a list of zodiacs
app.get('/signs', (req, res) => {
    console.log(req.params);
    res.render('Index', {signs: signs})
})


app.get('/signs/Aries', (req, res) => {
    res.send('<h1>Aries</h1><h2>Ram</h2><h3>3/21 - 4/19</h3>')
})


//! Show Route
// app.get('/signs/:nameOfZodiac', (req, res) => {
//     // console.log(req.params.nameOfZodiac);
//     res.render('Display', {signs: signs[req.params.nameOfZodiac]})
// })


//! Redirect
app.get('*', (req, res) => {
    //* send them to 404 page
    res.send('404')
    //* redirect back to home page
    // res.redirect('/signs')
})


//! Listening
app.listen(5000, function () {
    console.log("Listening on Port 5000...");
})
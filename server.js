const express = require('express')
const app = express()

//! Data
const signs = require('./models/signs')

//! Configuration
// view engine goes here

app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())


//! Middleware
app.use((req, res, next) => {
    console.log(req.body);
    console.log('I run for all the routes')
    next();
    //? next() - ensures that the request continues to be processed and that you get a response
})

app.get('/', (req,res) => {
    res.send('<h1>Zodiac Homepage</h1>')
})

//! Index Route
// returns a list of zodiacs
app.get('/signs', (req, res) => {
    console.log(req.params);
    res.render('Index', {signs: signs})
})


app.get('/signs/Aries', (req, res) => {
    res.send('<h1>Aries</h1><h2>Ram</h2><h3>3/21 - 4/19</h3>')
})

app.get('/signs/Taurus', (req, res) => {
    res.send('<h1>Taurus</h1><h2>Bull</h2><h3>4/20 - 5/20</h3>')
})


app.get('/signs/Gemini', (req, res) => {
    res.send('<h1>Gemini</h1><h2>Twins</h2><h3>5/21 - 6/21</h3>')
})

app.get('/signs/Cancer', (req, res) => {
    res.send('<h1>Cancer</h1><h2>Crab</h2>')
})

app.get('/signs/Leo', (req, res) => {
    res.send('<h1>Leo</h1><h2>Lion</h2>')
})


app.get('/signs/Virgo', (req, res) => {
    res.send('<h1>Virgo</h1><h2>Virgin</h2>')
})

app.get('/signs/Libra', (req, res) => {
    res.send('<h1>Libra</h1><h2>Balance</h2>')
})

app.get('/signs/Scorpio', (req, res) => {
    res.send('<h1>Scorpio</h1><h2>Scorpion</h2>')
})


app.get('/signs/Sagittarius', (req, res) => {
    res.send('<h1>Sagittarius</h1><h2>Archer</h2>')
})

app.get('/signs/Pisces', (req, res) => {
    res.send('<h1>Pisces</h1><h2>Fish</h2>')
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
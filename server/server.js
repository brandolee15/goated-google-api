const express = require('express');
const cors = require('cors');
const searchResults = require('./data')

const app = express();
app.use(express.json())
app.use(cors());

app.use(express.static('../client'))


app.get('/', (req, res) => {
    res.send('index');
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowd!');
});

app.get('/search', (req, res) => {
    res.send(searchResults)
    //console.log('...')
})

app.get('/search/:id', (req, res) => {
    if (req.params.id <= 10 && req.params.id > 0) {
    res.send(searchResults[req.params.id-1])
    }
    else {
        res.status(404).send('Page not found')
    }
})

app.get('/linkspage', (req, res) => {
    res.send('linkPage')
})

module.exports = app;
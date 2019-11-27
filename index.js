require('dotenv').config()

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Example', description: 'Hello Minh' })
})

mongoose.connect(process.env.MONGO_URL, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true })
    .then(() => {
        app.listen(port, () => console.log(`http://localhost:${port}`))
    })
    .catch(() => console.error('Connect failed'));

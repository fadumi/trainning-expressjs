require('dotenv').config();
const URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const todoRoute = require('./routes/Todo');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { title: 'Example', description: 'Hello Minh' })
})

app.use('/todo', todoRoute);

mongoose.connect(URL, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true })
    .then(() => {
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    })
    .catch(() => console.error('Connect failed'));

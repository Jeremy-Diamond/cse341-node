//express web server
const express = require('express');

//create express app
const app = express();

const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.helloRoute);
app.get('/jeremy', lesson1Controller.jeremyRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || port));
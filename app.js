require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

/**
 * HANDLEBARS
 */
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

/**
 * MIDDLEWARES
 */
app.use(express.static('public'));

/**
 * ROUTES
 */
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Express & Handlebars',
    subtitle: 'Static site example',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    title: 'Express & Handlebars',
    subtitle: 'Static site example',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    title: 'Express & Handlebars',
    subtitle: 'Static site example',
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

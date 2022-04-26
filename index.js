const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('HOME PAGE!')
});

app.get('/DOGS', (req, res) => {
  res.send('WOOF WOOF!')
});

app.listen(3000, () => {
  console.log('App is running on localhost:3000')
});
const express = require('express');

const app = express();

app.listen(5000, () => {
  console.log('Server on port 5000')
})

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/name', (req, res) => {
  res.send('Guillermo');
})

app.get('/friends', (req, res) => {
  const friends = ['Zeus', 'Marley', 'Van Damme'];
  res.send(friends);
})

app.get('/favorite-film', (req, res) => {
  const favoriteFilm = {
    "name": "The Fifth Element",
    "year": 1997,
  }
  res.send(favoriteFilm);
})

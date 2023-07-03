const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
    try {
      const movies = await Movie.find();
      res.render('movies', { movies });
    } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/movies/:id', async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(404).send('Movie not found');
      }
      res.render('movie', { movie });
    } catch (error) {
      console.error('Error fetching movie:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

module.exports = router;

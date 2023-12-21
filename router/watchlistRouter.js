// routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const { getMovies, getMovieById, createMovie, deleteMovie } = require('../controller/movieController');

router.route('/movies').get(getMovies);
router.route('/movies/:id').get(getMovieById);
router.route('/movies').post(createMovie);
router.route('/movies/:id').delete(deleteMovie);

module.exports = router;

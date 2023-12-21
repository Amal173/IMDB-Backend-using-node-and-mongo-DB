// controllers/movieController.js
const Movie = require('../model/watchlistSchema');
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (error) {
    console.error('Error in getMovies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findOne({ id: req.params.id });
    if (!movie) {
      res.status(404).json({ error: 'Movie not found' });
    } else {
      res.json(movie);
    }
  } catch (error) {
    console.error('Error in getMovieById:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const newMovie = req.body;
    const movie = new Movie(newMovie);
    await movie.save();
    res.status(201).json({ message: 'Movie created successfully', newMovie });
  } catch (error) {
    console.error('Error in createMovie:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const result = await Movie.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      res.status(404).json({ error: 'Movie not found' });
    } else {
      res.json({ message: 'Movie deleted successfully' });
    }
  } catch (error) {
    console.error('Error in deleteMovie:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

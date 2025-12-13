const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const { verifyToken, isAdmin } = require('../middleware/auth');

// @desc    Add a movie
// @route   POST /api/movies
// @access  Admin
router.post('/', verifyToken, isAdmin, async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();

    res.status(201).json({
      message: 'Movie added successfully',
      movie: newMovie
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get all movies
// @route   GET /api/movies
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '', sort = 'createdAt' } = req.query;

    const query = search
      ? {
          $or: [
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } }
          ]
        }
      : {};

    let sortOption = {};
    if (sort === 'rating') sortOption = { rating: -1 };
    else if (sort === 'year') sortOption = { releaseDate: -1 };
    else if (sort === 'title') sortOption = { title: 1 };
    else sortOption = { createdAt: -1 };

    const movies = await Movie.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort(sortOption);

    const total = await Movie.countDocuments(query);

    res.json({
      movies,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete a movie
// @route   DELETE /api/movies/:id
// @access  Admin
router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: 'Movie removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

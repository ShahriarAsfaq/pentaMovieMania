const express = require('express');
const router = express.Router();
const User = require('../models/User');
const fetchuser = require('../middleware/fetchuser');
const movies = require('../models/Movies');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the MovieList using: GET "/api/watchlist/fetchallmovies". Login required
router.get('/fetchallmovies', fetchuser, async (req, res) => {
    try {
        const getMovielist = await movies.find({ user: req.user.id });
        res.json(getMovielist)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new MovieList using: PUT "/api/watchlist/addwatchlist". Login required
router.put('/addwatchlist', fetchuser, async (req, res) => {
        try {
            const movieArr = req.body.watchList;
            console.log(movieArr);
            const movieListData = {
                user: req.user.id,
                watchList: movieArr,
              };
              const movieList = new movies(movieListData);
              
              let user = await movies.findOne({ user: req.user.id });
              
              if (user) {
                user.watchList = movieArr;
                const updatedMovieList = await user.save();
                res.json(updatedMovieList);
             }
              else{
                const savedMovies = await movieList.save()
                res.json(savedMovies)
              }
              
          

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

module.exports = router
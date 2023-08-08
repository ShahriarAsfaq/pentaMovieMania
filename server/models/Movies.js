const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new mongoose.Schema({
    adult: Boolean,
    backdrop_path: String,
    genre_ids: [Number],
    id: Number,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    release_date: String,
    title: String,
    video: Boolean,
    vote_average: Number,
    vote_count: Number
  });

const MoviesSchema = new Schema({
    user: String,
    movielist: [MovieSchema],   
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('movies', MoviesSchema);
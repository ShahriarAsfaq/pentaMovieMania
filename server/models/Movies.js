const mongoose = require('mongoose');
const { Schema } = mongoose;

const MoviesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    movielist: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'movie'
            }
        ],
        default: []
    },

    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('movies', MoviesSchema);
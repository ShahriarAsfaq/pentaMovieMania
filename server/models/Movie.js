const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
    id:{
        type: Number,
        default: 0
    },
    poster_path:{
        type: String,
        default: ""
    },
    title:{
        type: String,
        default: ""
    },
    vote_average:{
        type: Number,
        default: 0
    },
    vote_average:{
        type: Number,
        default: 0
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('movie', MovieSchema);
//* IMPORTS

// Import third-party packages
const mongoose = require('mongoose');

//* Post Model

const Schema = mongoose.Schema;
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creator: {
    type: Object,
    required: true,
  },
}, {
  timestamps : true,
})

module.exports = mongoose.model('Post', postSchema);

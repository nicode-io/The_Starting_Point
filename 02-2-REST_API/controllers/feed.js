// Import third-party packages
const {validationResult} = require('express-validator');

// Import project files
const Post = require('../models/post');

//* GET

// Fetch a list of posts
exports.getPosts = ( req, res, next ) => {
  Post.find()
    .then(posts => {
      res.status(200).json({
        message: 'Fetch posts successfully',
        posts: posts
      })
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// Fetch a single post
exports.getPost = ( req, res, next ) => {
  const postId = req.params.postId;

  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Post not found');
        error.statusCode = 404;
        throw error; // throw error to next catch block
      }
      res.status(200).json({
        message: 'Post fetched',
        post: post
      })
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
}

//* POST

// Add a new post
exports.createPost = ( req, res, next ) => {
  // Server-side user input validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('User input validation failed');
    error.statusCode = 422;
    throw error;
  }
  if (!req.file) {
    const error = new Error('No image provided');
    error.statusCode = 422;
    throw error;
  }


  // Grab user input for new post
  const title = req.body.title;
  const content = req.body.content;
  const imageUrl = req.file.path;

  // Set and save post in database
  const post = new Post({
    title: title,
    content: content,
    imageUrl: imageUrl,
    creator: {
      name: 'Nicolas'
    },
  });
  post.save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Post successfully created',
        post: result
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    })
};

// Update a post
exports.updatePost = (req, res, next) => {
  const postId = req.params.postId;
  post.findById()
}

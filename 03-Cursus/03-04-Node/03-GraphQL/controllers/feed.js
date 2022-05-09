//* IMPORTS

// Import build-ine Node packages
const fs = require('fs');
const path = require('path');

// Import third-party packages
const { validationResult } = require('express-validator');

// Import project files
const Post = require('../models/post');
const User = require('../models/user');
const io = require('../socket');


//* GET

// Fetch a list of posts
exports.getPosts = async ( req, res, next ) => {
  // Configure pagination
  // || 1 => If not set, default will be 1
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems;

  try {
    const count = await Post.find().countDocuments();
    const posts = await Post.find()
      .populate('creator')
      .skip(( currentPage - 1 ) * perPage)
      .limit(perPage);

    res.status(200).json({
      message: 'Fetch posts successfully',
      posts: posts,
      totalItems: totalItems
    });
  }
  catch ( err ) {
    if ( !err.statusCode ) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Fetch a single post
exports.getPost = async ( req, res, next ) => {
  const postId = req.params.postId;

  try {
    const postFindById = await Post.findById(postId);

    if ( !postFindById ) {
      const error = new Error('Post not found');
      error.statusCode = 404;
      throw error; // throw error to next catch block
    }
    res.status(200).json({
      message: 'Post fetched',
      post: postFindById
    });
  }
  catch ( err ) {
    if ( !err.statusCode ) {
      err.statusCode = 500;
    }
    next(err);
  }
};


//* POST

// Add a new post
exports.createPost = async ( req, res, next ) => {
  // Server-side user input validation
  const errors = validationResult(req);
  if ( !errors.isEmpty() ) {
    const error = new Error('User input validation failed');
    error.statusCode = 422;
    throw error;
  }
  if ( !req.file ) {
    const error = new Error('No image provided');
    error.statusCode = 422;
    throw error;
  }

  const title = req.body.title;
  const content = req.body.content;
  const imageUrl = req.file.path;

  // Set and save post in database
  const post = new Post({
    title: title,
    content: content,
    imageUrl: imageUrl,
    creator: req.userId,
  });

  try {
    await post.save();
    // Select post creator user
    const user = await User.findById(req.userId);
    // Save post in creator's posts array
    user.posts.push(post);
    await user.save();
    // IO: Inform all users of a new post
    io.getIO().emit('posts', {
      action: 'create',
      post: { ...post._doc,
        creator: {
          _id: req.userId,
          name: user.name
        }
      }
    });

    res.status(201).json({
      message: 'Post successfully created',
      post: post,
      creator: {
        _id: user._id,
        name: user.name,
      }
    });
  }
  catch ( err ) {
    if ( !err.statusCode ) {
      err.statusCode = 500;
    }
    next(err);
  }
};


//* PUT

// Update a post
exports.updatePost = async ( req, res, next ) => {
  const postId = req.params.postId;

  // Server-side user input validation
  const errors = validationResult(req);
  if ( !errors.isEmpty() ) {
    const error = new Error('User input validation failed');
    error.statusCode = 422;
    throw error;
  }

  const title = req.body.title;
  const content = req.body.content;

  // Check both if imageUrl exist or is updated
  let imageUrl = req.body.image;
  if ( req.file ) {
    imageUrl = req.file.path;
  }
  if ( !imageUrl ) {
    const error = new Error('No Post Image picked');
    error.statusCode = 422;
    throw error;
  }

  // Update post in database
  try {
    const post = Post.findById(postId);

    if ( !post ) {
      const error = new Error('Post not found');
      error.statusCode = 404;
      throw error;
    }
    // Check if user is the post creator
    if ( post.creator.toString() !== req.userId ) {
      const error = new Error('Not authorized');
      error.statusCode = 403;
      throw error;
    }
    if ( imageUrl !== post.imageUrl ) {
      clearImage(post.imageUrl);
    }
    post.title = title;
    post.content = content;
    post.imageUrl = imageUrl;
    const result = await post.save();

    res.status(200).json({
      message: 'Post successfully updated',
      post: result
    });
  }
  catch ( err ) {
    if ( !err.statusCode ) {
      err.statusCode = 500;
    }
    next(err);
  }
};


//* DELETE

// Delete a post
exports.deletePost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);

    if (!post) {
      const error = new Error('Could not find post.');
      error.statusCode = 404;
      throw error;
    }
    if (post.creator.toString() !== req.userId) {
      const error = new Error('Not authorized!');
      error.statusCode = 403;
      throw error;
    }
    // Check logged in user
    clearImage(post.imageUrl);
    await Post.findByIdAndRemove(postId);

    const user = await User.findById(req.userId);
    user.posts.pull(postId);
    await user.save();
    io.getIO().emit('posts', { action: 'delete', post: postId });
    res.status(200).json({ message: 'Deleted post.' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


//* FUNCTIONS

// Remove file (in our case image)
const clearImage = filePath => {
  filePath = path.join(__dirname, '..', filePath);
  fs.unlink(filePath, err => console.log(err));
};

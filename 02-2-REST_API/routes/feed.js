//* IMPORTS

// Import third-party packages
const express = require( 'express' );
const { body } = require( 'express-validator' );

// Import project files
const feedController = require( '../controllers/feed' );

// Create express router
const router = express.Router();


//* ROUTES


//* GET

// GET /feed/posts
router.get( '/posts', feedController.getPosts );

// GET /feed/post/:postId
router.get( '/post/:postId', feedController.getPost );


//* POST

// POST /feed/post - Create a new post
router.post(
  '/post',
  [
    body( 'title' )
      .trim()
      .isLength( { min: 5 } ),
    body( 'content' )
      .trim()
      .isLength( { min: 5 } )
  ],
  feedController.createPost
);

//* PUT

// PUT /feed/post/postId - Edit (replace) a post
router.put(
  '/post/:postId',
  [
    body( 'title' )
      .trim()
      .isLength( { min: 5 } ),
    body( 'content' )
      .trim()
      .isLength( { min: 5 } )
  ],
  feedController.updatePost
);


//* DELETE

// DELETE /feed/post/:postId - Delete a post
router.delete(
  '/post/:postId',
  feedController.deletePost
);


// Export router
module.exports = router;

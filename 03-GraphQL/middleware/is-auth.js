//* IMPORTS

// Import third-party packages
const jwt = require('jsonwebtoken');


//* MIDDLEWARE

// Check validity of web token send by request
module.exports = ( req, res, next ) => {
  const authHeader = req.get('Authorization');
  if ( !authHeader ) {
    const error = new Error('Not Authenticated');
    error.statusCode = 401;
    throw error;
  }
  // Get token from frontend (Authorization: 'Bearer ' + this.props.token)
  const token = authHeader.split(' ')[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, 'secretOrPrivateServerKey');
  } catch ( err ) {
    err.statusCode = 500;
    throw err;
  }
  if ( !decodedToken ) {
    const error = new Error('Not Authenticated');
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  next();
};

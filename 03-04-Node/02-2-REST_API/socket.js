let io;

module.exports = {
  init: httpServer => {
    io = require('socket.io')(
      httpServer,
      options = {
        cors: true,
        origins: [ 'http://127.0.0.1:3000' ],
      }
    );
    return io;
  },
  getIO: () => {
    if ( !io ) {
      throw new Error('Socket.IO not initialized');
    }
    return io;
  }
};

const {PORT} = require('../config');
const {runServer, closeServer} = require('../server');

before(function() {
  return runServer(PORT);
});
  
after(function() {
  closeServer();
});

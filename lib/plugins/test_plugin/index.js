const path = require('path');

module.exports = {
  name() {
    
    return path.basename(__dirname);
  },

  open(context, options) {
    console.log("OPEN FUNCTION")
    
  },
  processMessage(message, queue) {
    console.log("processMessage")
    
  },
  close(options, errors) {
    console.log("CLOSE")
    
  }
};

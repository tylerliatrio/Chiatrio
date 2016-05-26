var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  name: String,
  message: String
});

mongoose.model('Message', messageSchema);

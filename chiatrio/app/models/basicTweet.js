var mongoose = require('mongoose');

module.exports = mongoose.model('basicTweet', {
    name : String,
    message : String
});

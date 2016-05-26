//file: server.js

//load the config
var database = require('./config/database');

mongoose.connect(database.url);

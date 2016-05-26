var express = require('express')
var router = express.Router();

router.route('/posts')

  .post(function(req, res){
    res.send({message:"CODE THIS: create post in mongo"});
  })

  .get(function(req, res){
    res.send({message: "CODE THIS: get posts in mongo"});
  })

module.exports = router;

var express = require('express')
var router = express.Router();

var mongoose = require('mongoose');
var Post = mongoose.model('Post');

router.route('/posts')

  .post(function(req, res){
    var post = new Post();
    post.name = req.body.name;
    post.message = req.body.message;
    post.save(function(err, post)){
      if (err){
        return res.send(500, err);
      }
      return res.json(200, posts);
    });
  })

  .get(function(req, res){
    console.log('debug1');
    Post.find(function(err, posts){
      console.log('debug2');
      if(err){
        return res.send(500,err);
      }
      return res.send(200, posts);
    }
  })

module.exports = router;

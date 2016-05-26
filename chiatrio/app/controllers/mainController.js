//File: mainController.js

angular.module('basicTweet', [])
.controller('tweetController', function() {

  this.post = function post(){
     this.names = [];
     this.messages = [];
     this.names.push(this.name);
     this.messages.push(this.message);
     for(var i =0; i < this.names.length; i++){
       window.alert(this.names[i] + " " + this.messages[i] + "\n");
     }
   };
});

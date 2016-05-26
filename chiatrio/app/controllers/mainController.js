//File: mainController.js

angular.module('basicTweet', [])
.controller('tweetController', function() {

  this.post = function post(){
    window.alert("SUCCESS");
  };

});


angular.module('HelloWorldApp', [])
   .controller('HelloWorldController', function($scope) {
       $scope.greeting = "Hello World";
});

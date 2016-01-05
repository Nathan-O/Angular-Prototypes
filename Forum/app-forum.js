console.log("Sanity Forum");

var forumApp = angular.module("forumApp", ['ngRoute']);

////////////
// ROUTES //
////////////

forumApp.config(function($routeProvider, $locationProvider){

   $routeProvider
      .when('/', {
      templateUrl: 'Forum/templates/forum-index.html',
      controller: 'ForumIndexCtrl'
   })
      .when('/forums/:id', {
      templateUrl: '/Forum/templates/forum-show.html',
      controller: 'ForumShowCtrl'
   })
      .otherwise({
      redirectTo: '/'
   });

   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
   });

});

/////////////////
// CONTROLLERS //
/////////////////

forumApp.controller('ForumIndexCtrl', function($scope, DiscussionData){
   console.log("Forum Index");
   $scope.forums = DiscussionData.query();
});

forumApp.controller('ForumShowCtrl', function($scope, DiscussionData, $routeParams){
   console.log("Forum Show");
   $scope.forumCat = DiscussionData.get($routeParams.id);

});


/////////////
// MODELS //
////////////

forumApp.factory('DiscussionData', function(){

   var DiscussionData = {};

   DiscussionData.query = function(){
      return FORUM_DATA;
   };

   DiscussionData.get = function(id){
      var dataId = parseInt(id);
      return FORUM_DATA.find(function(data){
         return data.id == dataId;
      });
   };

  return DiscussionData;
});

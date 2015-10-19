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
      // template: '{{wine.name}}',
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





































// app.directive('ngIf', function() {
//     return {
//         link: function(scope, element, attrs) {
//             if(scope.$eval(attrs.ngIf)) {
//                 // remove '<div ng-if...></div>'
//                 element.replaceWith(element.children());
//             } else {
//                 element.replaceWith(' ');
//             }
//         }
//     };
// });
//
//
// app.controller("MyCtrl", function($scope) {
//     $scope.data = {};
//     $scope.showFrom = function(message) {
//         return message.hasOwnProperty('from');
//     };
//     $scope.showCreatedBy= function(message) {
//         return message.hasOwnProperty('createdBy');
//     };
//     $scope.showTo= function(message) {
//         return message.hasOwnProperty('to');
//     };
//     $scope.data.messages = [
//         {
//         "type": "phone",
//         "date": "25/12/2012",
//         "time": "11.34",
//         "createdBy": {
//             "name": "Jenny Forster1",
//             "avatarFileName": "jenny-forster.jpg"
//         },
//         "from": {
//             "name": "Jenny Forster1",
//             "avatarFileName": "jenny-forster.jpg"
//         },
//         "to": {
//             "name": "Daniel Craig1",
//             "avatarFileName": "daniel-craig.jpg"
//         },
//         "title": "This is the title of a phone call"},
//     {
//         "type": "email",
//         "date": "25/12/2012",
//         "time": "11.34",
//         "createdBy": {
//             "name": "Jenny Forster2",
//             "avatarFileName": "jenny-forster.jpg"
//         },
//         "from": {
//             "name": "Daniel Craig2",
//             "avatarFileName": "daniel-craig.jpg"
//         },
//         "to": {
//             "name": "Jenny Forster2",
//             "avatarFileName": "jenny-forster.jpg"
//         },
//         "title": "This is the title of an email"},
//     {
//         "type": "meeting",
//         "date": "25/12/2012",
//         "time": "11.34",
//         "createdBy": {
//             "name": "Jenny Forster3",
//             "avatarFileName": "jenny-forster.jpg"
//         },
//         "title": "This is the title of a meeting"},
//     {
//         "type": "note",
//         "date": "25/12/2012",
//         "time": "11.34",
//         "createdBy": {
//             "name": "Jenny Forster4",
//             "avatarFileName": "jenny-forster.jpg"
//         },
//         "title": "This is the title of a note"}
//     ];
// });






































//
// angular.module('bookApp', ['ngResource'])
//
// .controller('BooksCtrl', ['$scope', 'Book', function ($scope, Book) {
//     $scope.book = {};
//     $scope.books = [];
//     $scope.newBook = {};
//
//     $scope.books = Book.query(); // returns all the books
//
//     $scope.createBook = function(){
//         Book.save($scope.newBook);
//         $scope.newBook = {}; // clear new book object
//     };
//
//     $scope.updateBook = function(book) {
//         Book.get({ id: book.id }, function() {
//             Book.update({id: book.id}, book);
//             book.editForm = false;
//         });
//     };
//
//     $scope.deleteBook = function(book) {
//         Book.remove({id:book.id});
//         var bookIndex = $scope.books.indexOf(book);
//         $scope.books.splice(bookIndex, 1);
//     };
//
// }])
//
// .service('Book', ['$resource', function ($resource) {
//     return $resource('http://daretodiscover.herokuapp.com/books/:id', { id: '@_id' }, {
//       update: {
//         method: 'PUT'
//       }
//   });
// }]);






























//
// ////////////
// // ROUTES //
// ////////////
//
// app.config(function($routeProvider, $locationProvider){
//
//   $routeProvider
//     .when('/', {
//       templateUrl: 'templates/wines-index.html',
//       controller: 'WinesIndexCtrl'
//     })
//     .when('/wines/:id', {
//       // template: '{{wine.name}}',
//       templateUrl: 'templates/wines-show.html',
//       controller: 'WinesShowCtrl'
//     })
//     .otherwise({
//       redirectTo: '/'
//     });
//
//   $locationProvider.html5Mode({
//     enabled: true,
//     requireBase: false
//   });
//
// })
//
// /////////////////
// // CONTROLLERS //
// /////////////////
//
// app.controller('WinesIndexCtrl',function($scope, WineService){
//   console.log("Wine Index")
//   $scope.wines = WineService.query();
// })
//
// app.controller('WinesShowCtrl',function($scope, WineService, $routeParams){
//   console.log("Wine Show")
//   $scope.wine = WineService.get($routeParams.id);
// })
//
// ////////////
// // MODELS //
// ////////////
//
// app.factory('WineService', function(){
//
//   var WineService = {};
//
//   WineService.query = function(){
//     return ALL_WINES;
//   }
//
//   WineService.get = function(id){
//     var id = parseInt(id);
//     return ALL_WINES.find(function(wine){
//       return wine.id == id;
//     });
//   }
//
//   return WineService;
//
// })




























//
//
//
//
// var app = angular.module('wineApp', ['ngRoute', 'ngResource']);
//
// app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//   // create the application's routes
//   $routeProvider
//     .when('/', {
//       templateUrl: 'templates/index.html',
//       controller: 'WinesIndexCtrl'
//     })
//     .when('/wines/:id', {
//       templateUrl: 'templates/show.html',
//       controller: 'WinesShowCtrl'
//     })
//     .otherwise({
//       redirectTo: '/'
//     });
//   $locationProvider.html5Mode({
//     enabled: true,
//     requireBase: false
//   });
//
// }]);
//
// // A RESTful Wine factory with the help of `$resource`
// app.factory("Wine", function($resource) {
//   return $resource('http://daretodiscover.herokuapp.com/wines/:id')
// });
//
// app.controller('WinesIndexCtrl', ['$scope', 'Wine', function ($scope, Wine) {
//   // used for an empty form
//   $scope.wine = {};
//
//   // get all wines on page load
//   Wine.query(function(data) {
//     console.log("test")
//     $scope.wines = data.reverse();
//   });
//
//   // user can create a new wine
//   $scope.createWine = function() {
//     // create a new wine
//     Wine.save($scope.wine, function(newWine) {
//       // clear the form
//       $scope.wine = {};
//       // add the new wine to the list
//       $scope.wines.unshift(newWine);
//     })
//   };
//
//   // user can delete a wine
//   $scope.deleteWine = function(wine) {
//     Wine.remove({id: wine.id}, function(response) {
//       // remove that wine from the wines array
//       var wineIndex = $scope.wines.indexOf(wine);
//       $scope.wines.splice(wineIndex, 1);
//     });
//   };
//
// }]);
//
// app.controller('WinesShowCtrl', ['$scope', 'Wine', '$routeParams', function ($scope, Wine, $routeParams) {
//   // get a specific wine
//   Wine.get({id: $routeParams.id}, function(wine) {
//     $scope.wine = wine;
//   })
//
// }]);

console.log("Sanity hng-mn");


// REFERENCE //

// app.controller("HangManCtrl", function($scope) {
//
//    $scope.currentWord = "angular";
//
//    $scope.initialize = function(){
//       $scope.guessedChars = [];
//       $scope.guessCount = 0;
//    };
//
//    $scope.addWord = function(){
//       $scope.currentWord = $scope.newWord;
//       $scope.newWord = "";
//       $scope.initialize();
//    };
//
//    $scope.checkGuess = function(){
//       if($scope.guessedChars.indexOf($scope.guess) === -1){
//          $scope.guessedChars.push($scope.guess);
//       }
//       $scope.guessCount++;
//       $scope.guess = "";
//    };
//
//    $scope.displayChars = function(){
//       var chars = $scope.currentWord.split("");
//
//       _.each(chars, function(val, index){
//          if( $scope.guessedChars.indexOf(val) === -1){
//             chars[index] = "_";
//          }
//       });
//       return chars;
//    };
// });

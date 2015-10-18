console.log("Sanity Hangman");

/////////////////////////////////
/////////////////////////////////
///*     HANGMAN GAME JS     *///
/////////////////////////////////
/////////////////////////////////

app.controller("HangmanCtrl", function($scope){
   $scope.currentWord = "Dreadfort";


   $scope.initialize = function(){
      console.log("init");

      $scope.guessedLetters = [];
      $scope.guessCount = 0;


      //also call draw function here
   };

   $scope.addWord = function(){
      console.log("added");

      $scope.currentWord = $scope.newWord;
      $scope.newWord = ""; // <-- clear new word field
      $scope.initialize(); // <-- start new game

   };

   $scope.checkGuess = function(){
      console.log('guessed');

      if($scope.guessedLetters.indexOf($scope.guess) === -1){
         $scope.guessedLetters.push($scope.guess);
      }
      $scope.guessCount += 1; // <-- update guess count
      $scope.guess = ""; // <-- clear guess
   };

   $scope.renderLetters = function(){
      console.log("render");

      var letters = $scope.currentWord.split("");
      console.log(letters);

      _.each(letters, function(val, index){
         console.log("in _.each. Val = " + val + ", & Index = " + index);

         if ($scope.guessedLetters.indexOf(val) === -1){
            letters[index] = "_";
         }
      });
      return letters;
   };

});


/////////////////////////////////
/////////////////////////////////
///*     DRAW GALLOWS JS     *///
/////////////////////////////////
/////////////////////////////////

function drawGallows() {
   var canvas = document.getElementById("gallows");
   var ctx = canvas.getContext("2d");

   console.log("Draw");
   // ctx.fillStyle = "rgb(200,0,0)"; // <-- for rectangle's color
   // ctx.fillRect (10, 10, 55, 50);
   //

   //ctx.fillRect (30, 30, 55, 50);
   ctx.strokeStyle = "black";
   ctx.fillStyle = "rgba(0, 0, 200, 0.5)";

   ctx.beginPath();
   ctx.moveTo(50,295);
   ctx.lineTo(50,265);
   ctx.stroke();

   ctx.lineTo(350,265);
   ctx.stroke();

   ctx.lineTo(350,295);
   ctx.stroke();
   ctx.closePath();



   ctx.beginPath();
   ctx.moveTo(320,265);
   ctx.lineTo(320,105);
   ctx.stroke();

   ctx.lineTo(250,105);
   ctx.stroke();
   ctx.closePath();


}
// arcTo(x1, y1, x2, y2, radius)
//fillRect(x, y, width, height)  -- To Draw a rectable (chng vals for nums)

// REFERENCE //

// CANVAS DRAW FACE (I THINK)

// id = gallows

// clearRect() - to clear canvas

// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext){
//      var ctx = canvas.getContext('2d');
//
//     ctx.beginPath();
//     ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
//     ctx.moveTo(110,75);
//     ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
//     ctx.moveTo(65,65);
//     ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
//     ctx.moveTo(95,65);
//     ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
//     ctx.stroke();
//   }
// }

// HANGMAN JS
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

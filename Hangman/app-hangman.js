console.log("Sanity Hangman");

/////////////////////////////////
/////////////////////////////////
///*     HANGMAN GAME JS     *///
/////////////////////////////////
/////////////////////////////////


app.controller("HangmanCtrl", function($scope){
   $scope.currentWord = "Dreadfort";
   $scope.guessedLetters = [];
   $scope.chances = 7;
   $scope.trainer = {name: 'Ash'};
   // console.log("Controller");


   $scope.initialize = function(){
      console.log("init");
      // init game and assign values
      $scope.guessedLetters = [];
      $scope.guessCount = 0;
      $scope.lost = false;
      $scope.chances = 2;
      // also call init draw function here (later)
   };

   $scope.addWord = function(){
      // console.log("added");
      $scope.currentWord = $scope.newWord;
      $scope.newWord = ""; // <-- clear new word field
      $scope.initialize(); // <-- start new game

   };

   $scope.checkGuess = function(){
      // console.log('Guessed: "' + $scope.guess + '"  (in check-fn)');
      // console.log("Check Click");
      $scope.checkWrong($scope.guess);
      // console.log("...and we're back in."); // <-- logs
      // console.log("With Data: " + $scope.test); // <-- logs w/ correct data returned

      if($scope.guessedLetters.indexOf($scope.guess) === -1){
         $scope.guessedLetters.push($scope.guess);
      }
      $scope.guessCount += 1; // <-- update guess count
      $scope.guess = ""; // <-- clear guess

      if ($scope.chances === 0) {
         $scope.lose();
      }
   };

   $scope.checkWrong = function(data){
      // Check correctness of user's guess against currentWord
      for (var i = 0; i <= $scope.currentWord.length-1; i++) {
         console.log($scope.currentWord[i] + " : " + data);
         // console.log(i);
         if ($scope.currentWord[i] === data) {
            $scope.test = "You're Right"; // <-- returns correctly
            return $scope.test;
         } else if ($scope.currentWord[i] !== data) {
            $scope.test = "Nope"; // <-- returns correctly
            // call draw function here (later)
         }
      }
      $scope.chances -= 1;
      // console.log($scope.chances);
      return $scope.test;
   };

   $scope.lose = function(){
      // render popup that forces game to restart
      $scope.lost = true;
      // console.log("You Lost!"); // <-- WORKS!
      alert("You Lost");
      $scope.initialize();
   };

   $scope.renderLetters = function(){
      // console.log("render");
      var letters = $scope.currentWord.split("");
      // console.log(letters);

      _.each(letters, function(val, index){
         // console.log('Guessed: "' + $scope.guess + '"  (in check-fn)');
         // console.log("Val: '" + val + "', & Index: '" + index + "' (in _.each.)");

         if ($scope.guessedLetters.indexOf(val) === -1){
            letters[index] = " _ ";
         }
      });
      return letters;
   };

});

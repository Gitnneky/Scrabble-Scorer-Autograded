// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': $\n{pointValue}`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
let userInput = input.question();

return userInput;
};

let simpleScorer =
function(word) {
   let Word = word.toLowerCase();
   let score = 0;
     for (const letter of lowerWord){
      if (letter >= 'a' && letter <= 'z'){
         score += 1;
            }
     }
     return score;
}
let vowelBonusScorer =
function(word) {
   let lowerWord = word.toLowerCase();
   let score = 0;
   for (const letter of lowerWord) {
      if (letter >= 'a' && letter <= 'z'){
         if ('aeiou'.includes(letter)){
            score += 3;}
            else {
               score =+ 1;
            }
         }
      }
      return score;
   }

function scrabbleScorer(word){
   word = word.toLowerCase()
   let wordPoint = 0;
   for (let i = 0; i < word.length; i++){
      wordPoint += Number(pointValue);
   }
   
   return wordPoint;
}
const scoringAlgorithms = [{name: "Simple Score", description:"Each letter is worth 1 point.", scoringFunction: simpleScorer}, {name: "Bonus Vowels", description:"Vowels are 3 pts, consonants are 1 pt.", scoringFunction: vowelBonusScorer}, {name: "Scrabble", description:"The traditional scoring algorithm.", scoringFunction: oldScrabbleScorer}];
 
function scorerPrompt(scoringAlgorithms) {
   let num = Number(input.question(`Which Scoring Algorithm would you like to use?
   0 - Simple: Each letter is worth 1 point.
   1 - Vowels are 3 points, consonants are 1 point.
   2 - Use scrabble scoring system.
   Please enter 0, 1, or 2:`));
   return num
}

function transform(oldPointStructure) {
   let newPointStructure = {};
   for (const score in oldPointStructure) {
      for (const letter of oldPointStructure[score]){
         newPointStructure[letter.toLowerCase()] = Number(score);
   }
};

return newPointStructure;
}

function runProgram() {
   initialPrompt();
   let num = scorerPrompt();
   num = Number(num);
   if (num == 0) {
      console.log(`Score for ${word}: ${simpleScorer(word)}`);
   } else if (num == 1) {
      console.log(`Score for ${word}: ${vowelBonusScorer(word)}`);
   } else if (num == 2) {
      console.log(`Score for ${word}: ${scrabbleScorer(word)}`);
   }
   }
   

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

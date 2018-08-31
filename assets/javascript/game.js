

// Declaring objects

var goku = {
    word: "goku",
    anime: "Dragon Ball Z",
    image: "assets/images/",

}
var naruto = {
    word: "naruto",
    anime: "Naruto",
    image: "assets/images/",
}
var saitama = {
    word: "saitama",
    anime: "One Punch Man",
    image: "assets/images/",
}
// Declaring other needed variables/ arrays
var words = [goku.word, 
    naruto.word, 
    saitama.word],
    lettersGuessed = [],
    currentWord = [],
    wins = 0,
    guesses = 12,
    winsText = document.getElementById("wins"),
    guessText = document.getElementById("guess-remain"),
    wordText = document.getElementById("current-word"),
    lettersText = document.getElementById("letters-guessed");

winsText.textContent = wins;
guessText.textContent = guesses;



//randomly chooses word to guess
var comWord = words[Math.floor(Math.random() * words.length)]

//var correctAnswer =[]

//for (h = 0; h < comWord.length; h++){
//     correctAnswer.push(comWord[h])
// }
//for loop that updates the current word with how many _ it needs
for(i = 0; i < comWord.length; i++){
    currentWord [i] = "_ "

}
wordText.textContent = currentWord;
var remainingLetters = comWord.length;

// function that calls a new game
function newGame(){
 //randomly chooses word to guess
 comWord = words[Math.floor(Math.random() * words.length)]

 guesses = 12
 guessText.innerHTML = guesses

 lettersGuessed = []
 lettersText.innerHTML = lettersGuessed

 //correctAnswer =[]

// for (h = 0; h < comWord.length; h++){
//     correctAnswer.push(comWord[h])
// }
//for loop that updates the current word with how many _ it needs
for(i = 0; i < comWord.length; i++){
    currentWord [i] = "_ "

}
wordText.innerHTML = currentWord;
remainingLetters = comWord.length
}
  



    
// function executed when user presses a key
document.onkeyup = function(event){
    var userGuess = event.key.toLowerCase()

    if (lettersGuessed.length < 1){
        for(k = 0; k < comWord.length; k++){
            if (userGuess === comWord[k]){
               remainingLetters--,
               currentWord[k] = userGuess,
               wordText.textContent = currentWord;
            }
        } 
        lettersGuessed.push(userGuess),
        lettersText.textContent = lettersGuessed;
     } else if (lettersGuessed.length > 0){
        for(j = 0; j < lettersGuessed.length; j++){
            if (userGuess === lettersGuessed [j]){
                alert("You already guessed that letter!")
                userGuess = ""
            } 
        }if (userGuess !== ""){
            guesses--,
            guessText.textContent = guesses,
            lettersGuessed.push(userGuess),
            lettersText.textContent = lettersGuessed;

            for(k = 0; k < comWord.length; k++){
                if (userGuess === comWord[k]){
                   currentWord[k] = userGuess,
                   wordText.textContent = currentWord,
                   remainingLetters--;
                
                } 
            }
        }
                
            
         
            
            
        }
        //code to determine if user won or lost
    if (remainingLetters === 0){
        wins++
        winsText.textContent = wins
        alert("You won! Try another!")
        newGame()
    }
    if (guesses === 0){
        alert("You lost, try again!")
        newGame()
    }

}

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
    saitama.word]
lettersGuessed = []
currentWord = []
wins = 0
guesses = 12
winsText = document.getElementById("wins")
guessText = document.getElementById("guess-remain")
wordText = document.getElementById("current-word")
lettersText = document.getElementById("letters-guessed")

winsText.textContent = wins
guessText.textContent = guesses

game()
function game(){
    //randomly chooses word to guess
    var comWord = words[Math.floor(Math.random() * words.length)]



    //for loop that updates the current word with how many _ it needs
    for(i = 0; i < comWord.length; i++){
        currentWord [i] = "_ "

    }
    wordText.textContent = currentWord
    
    
}
var remainingLetters = comWord.length
document.onkeyup = function(event){
    var userGuess = event.key.toLowerCase

    if (lettersGuessed = []){
        lettersGuessed.push(userGuess)
        lettersText.textContent = lettersGuessed
     } else if (lettersGuessed !==[]){
        for(j = 0; j < lettersGuessed.length; j++){
            if (userGuess === lettersGuessed [i]){
                alert("You already guessed that letter!")
            } else {
                 for(i = 0; i < comWord.length; i++){
                     if (userGuess === comWord[i]){
                      remainingLetters--
                     currentWord[i] = userGuess
                     wordText.textContent = currentWord
                     
                     } 
                 }
                 guesses--
                 guessText.textContent = guesses
                 lettersGuessed.push(userGuess)
                 lettersText.textContent = lettersGuessed
            }
         }

     }

    

    

 
  }



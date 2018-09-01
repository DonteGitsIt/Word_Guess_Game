

// Declaring objects

var goku = {
    word: "goku",
    anime: "Dragon Ball Z",
    image: "assets/images/goku.jpg",

}
var naruto = {
    word: "naruto",
    anime: "Naruto",
    image: "assets/images/naruto.png",
}
var saitama = {
    word: "saitama",
    anime: "One Punch Man",
    image: "assets/images/saitama.jpg",
}
var ichigo = {
    word: "ichigo",
    anime: "Bleach",
    image: "assets/images/ichigo.jpg",
}
var midoriya = {
    word: "midoriya",
    anime: "My Hero Academia",
    image: "assets/images/midoriya.png",
}
var vegeta = {
    word: "vegeta",
    anime: "Dragon Ball Z",
    image: "assets/images/vegeta.jpg",
}
var sasuke = {
    word: "sasuke",
    anime: "Naruto",
    image: "assets/images/sasuke.png",
}
var genos = {
    word: "genos",
    anime: "One Punch Man",
    image:"assets/images/genos.jpg",
}
// Declaring other needed variables/ arrays
var words = [
    goku.word, 
    naruto.word, 
    saitama.word,
    ichigo.word,
    midoriya.word,
    vegeta.word,
    sasuke.word,
    genos.word,
    ],
    lettersGuessed = [],
    currentWord = [],
    wins = 0,
    guesses = 12,
    winsText = document.getElementById("wins"),
    guessText = document.getElementById("guess-remain"),
    wordText = document.getElementById("current-word"),
    lettersText = document.getElementById("letters-guessed");
    animeText = document.getElementById("anime-title");
    animeImage = document.getElementById("anime-image");
winsText.textContent = wins;
guessText.textContent = guesses;



//randomly chooses word to guess
var comWord = words[Math.floor(Math.random() * words.length)]

// statements to change whats revealed if user guessed the word correctly

if(comWord === goku.word){
    animeText.innerHTML = "It's " + comWord + " from " + goku.anime + "!";
    animeImage.src = goku.image;
}else if(comWord === naruto.word){
    animeText.innerHTML = "It's " + comWord + " from " + naruto.anime + "!";
    animeImage.src = naruto.image;
}else if(comWord === saitama.word){
    animeText.innerHTML = "It's " + comWord + " from " + saitama.anime + "!";
    animeImage.src = saitama.image;
}else if(comWord === ichigo.word){
    animeText.innerHTML = "It's " + comWord + " from " + ichigo.anime + "!";
    animeImage.src = ichigo.image;
}else if(comWord === midoriya.word){
    animeText.innerHTML = "It's " + comWord + " from " + midoriya.anime + "!";
    animeImage.src = midoriya.image;
}else if(comWord === vegeta.word){
    animeText.innerHTML = "It's " + comWord + " from " + vegeta.anime + "!";
    animeImage.src = vegeta.image;
}else if(comWord === sasuke.word){
    animeText.innerHTML = "It's " + comWord + " from " + sasuke.anime + "!";
    animeImage.src = sasuke.image;
}else if(comWord === genos.word){
    animeText.innerHTML = "It's " + comWord + " from " + genos.anime + "!";
    animeImage.src = genos.image;
}

for(i = 0; i < comWord.length; i++){
    currentWord [i] = "_ "

}
wordText.textContent = currentWord;
var remainingLetters = comWord.length;

// function that calls a new game (runs when user clicks new word buttton)
function newGame(){
    //randomly chooses word to guess
    comWord = words[Math.floor(Math.random() * words.length)]

    // statements to change whats revealed if user guessed the word correctly

    if(comWord === goku.word){
        animeText.innerHTML = "It's " + comWord + " from " + goku.anime + "!";
        animeImage.src = goku.image;
    }else if(comWord === naruto.word){
        animeText.innerHTML = "It's " + comWord + " from " + naruto.anime + "!";
        animeImage.src = naruto.image;
    }else if(comWord === saitama.word){
        animeText.innerHTML = "It's " + comWord + " from " + saitama.anime + "!";
        animeImage.src = saitama.image;
    }else if(comWord === ichigo.word){
        animeText.innerHTML = "It's " + comWord + " from " + ichigo.anime + "!";
        animeImage.src = ichigo.image;
    }else if(comWord === midoriya.word){
        animeText.innerHTML = "It's " + comWord + " from " + midoriya.anime + "!";
        animeImage.src = midoriya.image;
    }else if(comWord === vegeta.word){
        animeText.innerHTML = "It's " + comWord + " from " + vegeta.anime + "!";
        animeImage.src = vegeta.image;
    }else if(comWord === sasuke.word){
        animeText.innerHTML = "It's " + comWord + " from " + sasuke.anime + "!";
        animeImage.src = sasuke.image;
    }else if(comWord === genos.word){
        animeText.innerHTML = "It's " + comWord + " from " + genos.anime + "!";
        animeImage.src = genos.image;
    }
    // makes title, button and image invisible again.
    $("#anime-title").css({"visibility": "hidden" })
    $("#anime-image").css({"visibility": "hidden" })
    $("#resetButton").css({"visibility": "hidden" })
    //this code resets variables to thier original state and updates page
    guesses = 12
    guessText.innerHTML = guesses

    lettersGuessed = []                                                                                           
    lettersText.innerHTML = lettersGuessed
    currentWord = []

    for(i = 0; i < comWord.length; i++){
        currentWord [i] = "_ "

    }
    wordText.innerHTML = currentWord;
    remainingLetters = comWord.length
}
  



    
// function executed when user presses a key
document.onkeyup = function keyPress(event){
    var userGuess = event.key.toLowerCase()
    // if statement that runs if the user has yet to guess a letter
    if (lettersGuessed.length < 1){
        //loop that checks if user guessed a correct letter and updates page accordingly
        for(k = 0; k < comWord.length; k++){
            if (userGuess === comWord[k]){
               remainingLetters--,
               currentWord[k] = userGuess,
               wordText.textContent = currentWord;
            }
        } 
        // updates page if user guessed incorrectly 
       if ($.inArray(userGuess, comWord) === -1){
        lettersGuessed.push(userGuess),
        lettersText.textContent = lettersGuessed;
        guesses--;
        guessText.textContent = guesses;
       }
        //if statement that runs if the user has already guessed a letter
     } else if (lettersGuessed.length > 0){
        for(j = 0; j < lettersGuessed.length; j++){
            //if user already guessed that do this
            if (userGuess === lettersGuessed [j] || $.inArray(userGuess, currentWord) !== -1){
                alert("You already guessed that letter!")
                userGuess = ""
            } 
            // if userGuess has not already been guessed and it is not a correct answer, do this.
        }if (userGuess !== "" && $.inArray(userGuess, comWord) === -1){
            guesses--,
            guessText.textContent = guesses,
            lettersGuessed.push( " " + userGuess),
            lettersText.textContent = lettersGuessed;

            
        }
                
        //loop that updates page if user guesses a correct letter 
        for(k = 0; k < comWord.length; k++){
            if (userGuess === comWord[k]) {
               currentWord[k] = userGuess,
               wordText.textContent = currentWord,
               remainingLetters--;
            
            } 
        }
            
            
        }
//code to determine if user won or lost
    if (remainingLetters === 0){
        wins++
        winsText.textContent = wins
        alert("You won! To try another click the New Word button.")
        // function that forces the user to pick a new word in order to continue to guess letters
        document.onkeyup = function(){
            userGuess = ""
            alert("You won, good job! click the New Word button.")
         }
         //reveals picture and title for guessed word, also reveals the new word button
        $("#anime-title").css({"visibility": "visible" })
        $("#anime-image").css({"visibility": "visible" })
        $("#resetButton").css({"visibility": "visible" })
    }
    if (guesses === 0){
        alert("Oh no you lost! click the New Word Button to try again.")
        // function that forces the user to pick a new word in order to continue to guess letters
        document.onkeyup = function(){
            userGuess = ""
            alert("You lost okay? click the New Word button.")
         }
        $("#resetButton").css({"visibility": "visible" })
    }

    

}
//code for new word button
$("#resetButton").on("click", function(){
    newGame()
})
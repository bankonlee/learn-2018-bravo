//Computer generates a random number between 1 and 100



var a = Math.ceil(Math.random()*100)
console.log("computer's guess is " + a)

var userName = prompt("Enter name")
var userGuess = prompt("Guess a number between 0 and 100")



while(userGuess != a) {
  if(userGuess < a && userGuess >=1 ) {
      userGuess = prompt("Too low! Try again " + userName)
  } else if(userGuess > a && userGuess <= 100) {
      userGuess = prompt("Too high!!! Try again " + userName)
  } else {
      userGuess = prompt(userName + ", did you enter a number between 1 and 100?")
  }
}
alert("You guessed right " + userName + "!!!!")

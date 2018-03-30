var x = prompt("Enter your sentence!")
// split sentence into words
var sentenceArray = x.split(" ")
console.log(sentenceArray)

var reverseSentence = []
// loop over sentenceArray
for(var i = 0; i < sentenceArray.length; i++){
  // TODO: reverse the chars in each word in sentenceArray
  // convert word to an arry of letters
  var letters = sentenceArray[i].split("")
  // reverse the array
  if (letters.length > 5){


  letters.reverse()
  letters = letters.join("") + " "
  // turn the array back into a string
  // letters.join("") + " "
  // console.log(letters);
  reverseSentence.push(letters)
  // console.log(reverseSentence)
  reverseSentence = reverseSentence.join("")
  alert(reverseSentence)

} else {
  alert(letters.join("") + "...Cool Story Bro!")
}
  // TODO: Don't reverse words with less than 5
    // if (y[i].length > 5){
    //   console.log(y[i].reverse);
    // }
}


var x = parseInt(prompt("Enter first number!"))
while (Number.isInteger(x) == false){
  var x = parseInt(prompt("Try Again..."))
}

var y = parseInt(prompt("Great! Enter second number!"))
while (Number.isInteger(y) == false){
  var y = parseInt(prompt("Try Again..."))
}

function greaterNum() {
  if (x > y){
    console.log(x + " " + "is greater than " + y)
    alert(x + " " + "is greater than " + y)
  }else if (x < y){
    console.log(y + " " + "is greater than " + x)
    alert(y + " " + "is greater than " + x)
  }else alert("Numbers are equal... ASSHOLE!")
}

greaterNum(x,y)

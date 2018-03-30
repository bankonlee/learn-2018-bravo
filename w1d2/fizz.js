


for (x = 0; x <= 100; x++){
  if( Number.isInteger(x/3) && Number.isInteger(x/5)){
    console.log("FizzBuzz")
  } else if (Number.isInteger(x/3)){
    console.log("Fizz")
  } else if (Number.isInteger(x/5)){
    console.log("Buzz")
  } else {
    console.log(x)
  }
}

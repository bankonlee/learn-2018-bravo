/*

--------------------------For to While---------------------------
Re-write the following as a while loop:
for (var i=0; i<10; i++) { console.log(i); }
What is the value of i after the loop? Is it the same in both cases?

var i = 0
while (i<10){
  console.log(i)
  i++
}

for (i=0; i<10; i++){
  console.log(i);
}

--------------------------Duplicate Array---------------------------

*/
/*Variables that will be passed through as argumnets when the
mergeArray function is called*/
var a = [1, 2, 3]
var b = [2, 30, 1]


function mergeArray(a,b){
  /*Concatinating arrays assigned to variables a & b */
  var arrayConcat = a.concat(b)
  /*Creating a variable and assigning a empty array to it */
  var uArray = [];
  /* Creating a for loop to iterate through the index positions of arrayConcat*/
  for (i = 0; i < arrayConcat.length; i++){
    /* Determining if uArray has the same elements as arrayConcat */
    if(uArray.indexOf(i) == -1){
      /* Pushing non-matching elements into uArray from arrayConcat */
      uArray.push(arrayConcat[i])
    }
  }
  /*returning the uArray*/
  return uArray
}
/*Calling the mergeArray function with the arguments of variables a & b */
mergeArray(a,b)
/*Logging the mergeArray function call using arguments of variables a & b */
console.log(mergeArray(a,b))

-------------------------------Full Function----------------

var a = [1, 2, 3]
var b = [2, 30, 1]

function mergeArray(a,b){
  var arrayConcat = a.concat(b)
  var uArray = [];
  for (i = 0; i < arrayConcat.length; i++){
    if(uArray.indexOf(i) == -1){
      uArray.push(arrayConcat[i])
    }
  }
  return uArray
}

mergeArray(a,b)
console.log(mergeArray(a,b))

/*

---------------------------DataTypes---------------------------------

There are 6 data types in JavaScript that are primitives:

- Boolean = True or False
- Null = Nothing
- Undefined = It is a question that is not answered
- Number = 0-9
- String = anything that is words letters etc.
- Symbol = ...

A primitive is data that is not an object and has no methods

---------------------------Variables---------------------------------

"Declare" a variable
"Assign" values to a variable

var x = 5
declares variable x as equaling y

-You declare a variable by typing var name = variable
-Variables are pieces of information used by logic in programs
---------------------------Functions--------------------------------

"Declare" a Function
"Pass" arguments to a function

-Functions are instructions for a program to do something
-Functions often need some sort of information to run
-Pieces of outside information the function uses to run are called arguments
-Functions use a open bracket { to start the logic of a function and a closeing
bracket } to end the logic of a function.

*Example*
function create_a_secret_number(userNumber) {
  // 1. multiply the number by itself
  var secretNumber = userNumber * userNumber
  // 2. add 42
  secretNumber = secretNumber + 42
  // 3. multiply by .3
  secretNumber = secretNumber * .3
  // 4. return the result
  return secretNumber
}

create_a_secret_number(9) *This runs the function with 9 being passed as the argument*
= 36.9

-This is a "Named" function because it is named "create_a_secret_number"
-You must have () after a function when calling it to run

---------------------------JavaScript Decisions--------------------------------

"if" statements are a Boolean that will run the suceeding block of code when the
condition of the "if" statement is met and is True. If the "if" condition is not
met and is False then the program will move on to the "if else" or "else" statement
if applicable.

-"if" is the first condition
-"if else" is the suceeding conditions befor else
-"else" is the last condition that is used as a catch all and can be used after
 "if" if there is only two conditions

- "If" statements are logic within a fuction or they can be used on there own
and require a open bracket { to start the logic of the statement and a closeing
bracket } to end the logic of the statement
 -JavaScript "Names Declerations" are written in snake_case or camelCase
 -Semicolons are not required at the end of lines. If used use consitantly 


*Example*
 if (areCredentialsValid(userId, password)) {
  alert("Credentials accepted");
}
else {
  alert("Credentials not acceptable, please try again");
}

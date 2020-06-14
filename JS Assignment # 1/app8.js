//  // CHAPTER NO 12-13
// ******************************************************************************
// Question 1

// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// Solution

// var string1 = prompt('Enter String Or Number')

// console.log(string1.charCodeAt(0))

// ******************************************************************************
// Question 2

// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// Solution

// var number1 = parseInt(prompt("Enter Number 1"))
// var number2 = parseInt(prompt("Enter Number 2"))

// if (number1 > number2) {
//     alert(number1 + " Is Greater Than  " + number2)
// } else if (number1 < number2) {
//     alert(number2 + " Is Greater Than  " + number1)
// } else {
//     alert(number1 + " Is Equal To  " + number2)

// }

// ******************************************************************************
// Question 3

// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero

// var number1 = parseInt(prompt("Enter Number 1"))


// if (number1 > 0) {
//     alert(number1 + " Is Positive")
// } else if (number1 < 0) {
//     alert(number1 + " Is Negative ")
// } else {
//     alert(number1 + " Is Equal To  Zero(0)")

// }

// ******************************************************************************
// Question 4

// Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise



// var string1 = prompt("Enter A String")
// if (string1.toLowerCase() == "a" || string1.toLowerCase() == "e" || string1.toLowerCase() == "i" || string1.toLowerCase() == "o" || string1.toLowerCase() == "u") {
//     console.log(true)
// } else {
//     console.log(false)
// }


// ******************************************************************************
// Question 5

// . Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


// var password = "HelloWorld"
// var Userpassword = prompt("Enter Your Password")
// if (Userpassword == "") {

//     alert("Please Enter Your PassWord")
// } else if (password == Userpassword) {
//     alert("CORRECT! The password you entered matches the original password")
// } else {
//     alert("InCorrect Password")
// }


// ******************************************************************************
// Question 6

// This if/else statement does not work. Try to fix it:
// Solution

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";

// } else {
//     greeting = "Good evening";
// }


// ******************************************************************************
// Question 6

// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statemen
// Solution
// var userTime = parseInt(prompt("Enter  Time in 24-Hour Format"))

// if (userTime >= 0 && userTime < 1200) {
//     alert("Good Morinng")
// } else if (userTime >= 1200 && userTime < 1700) {
//     alert("Good aftetNoon")
// } else if (userTime >= 1700 && userTime < 2100) {
//     alert("Good Evening")
// } else if (userTime >= 2100 && userTime < 2359) {
//     alert("Good Night")
// }


// ******************************************************************************
//  // CHAPTER NO 9-11
// ******************************************************************************
// Question 1


// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// Solution

// var cityName = prompt("Enter Your City Name")
// if (cityName.toLowerCase() == "karachi") {
//     alert("“Welcome to city of lights”")
// }
// ******************************************************************************
// Question 2


// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// Solution
// var gender = prompt("Enter Your Gender")
// if (gender.toLowerCase() == "male") {
//     alert("Good Morning Sir")
// } else if (gender.toLowerCase() == "female") {
//     alert("Good Morning Ma'am")

// } else {
//     alert("Incorrect Gender")
// }

// ******************************************************************************
// Question 3


//  Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


// Solution

// var Color = prompt('Enter Color OF Traffic lights')

//         if (Color === "Red") {
//             document.write("vehicles must stop");
//         } else if (Color === "Yellow") {
//             document.write('vehicles should get ready to move');
//         } else if (Color === "Green") {
//             document.write('vehicles Can Move Now');
//         }


// ******************************************************************************
// Question 4


//  Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


// Solution

// var fuel = parseInt(prompt('Enter Remaining Fuel in car (in litres)'))


// if (fuel <= 0.25) {
//   alerts("Please Reill the Fuel In Your Car");
// }


// ******************************************************************************
// Question 5


// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


// Solution




// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }


// Alert Showed

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// Alert Not Showed


// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// Alert Not Showed  


// if (c === 13) {
//     alert("condition 2 is true");
// }
// Alert Showed


// if (++c < 14) {
//     alert("condition 3 is true");
// }
// // Alert Not Showed
// if (c === 14) {
//     alert("condition 4 is true");
// }
// Alert Showed

// var materialCost = 20000;
// var laborCost = 2000;

// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// // Alert Showed
// if (true) {
//     alert("True");
// }
// // Alert Showed
// if (false) {
//     alert("False");
// }
// // Alert Showed

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// Alert Showed


// ******************************************************************************
// Question 6

// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:





// Solution

// var marksObtained = parseInt(prompt("Enter Your Marks Obtainded in three Subjects"))
// var totalMarks = parseInt(prompt("Enter Your Total Marks"))

// var percentage = (marksObtained / totalMarks) * 100
// console.log(percentage)

// if (percentage >= 80) {
//     document.write("<h1>MarkSheet</h1><br>")
//     document.write("MarksObtainde : " + marksObtained + "<br>")
//     document.write("Total Marks : " + totalMarks + "<br>")
//     document.write("Percentage : " + percentage + "<br>")
//     document.write("Grade : A-one " + "<br>")
//     document.write("Excellent : <br>")


// } else if (percentage >= 70) {
//     document.write("<h1>MarkSheet</h1><br>")
//     document.write("MarksObtainde : " + marksObtained + "<br>")
//     document.write("Total Marks : " + totalMarks + "<br>")
//     document.write("Percentage : " + percentage + "<br>")
//     document.write("Grade : A " + "<br>")
//     document.write("Good  <br>")


// } else if (percentage >= 60) {
//     document.write("<h1>MarkSheet</h1><br>")
//     document.write("MarksObtainde : " + marksObtained + "<br>")
//     document.write("Total Marks : " + totalMarks + "<br>")
//     document.write("Percentage : " + percentage + "<br>")
//     document.write("Grade : B " + "<br>")
//     document.write("Remarks You Need To Improve <br>")


// } else if (percentage >= 60) {
//     document.write("<h1>MarkSheet</h1><br>")
//     document.write("MarksObtainde : " + marksObtained + "<br>")
//     document.write("Total Marks : " + totalMarks + "<br>")
//     document.write("Percentage : " + percentage + "<br>")
//     document.write("Grade : Fail" + "<br>")
//     document.write("Sorry <br>")


// }


// ******************************************************************************
// Question 7

// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”




// Solution
// var secret_Number = ("6");
// var User = prompt("Enter The Number");

// if (secret_Number == User) {
//     alert("“Bingo! Correct answer”.");
// } else if (User == "7") {
//     alert("“Close enough to the correct answer”");

// }


// ******************************************************************************
// Question 8

// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.



// Solution
// var number = prompt('Enter Number');
// var result = (number % 3);



// if (result == '0') {
//     alert(number + " is completely divisble by 3");

// } else {
//     alert(number + "is not divisble by 3");
// }

// ******************************************************************************
// Question 9
// Write a program that checks whether the given input is an
// even number or an odd number.



// Solution
// var number = parseInt(prompt('Enter a Number'))
// var result_even = (number % "2");
// var result_odd = (number % "3");

// if (result_even == "0") {
//     alert('The given Nmber Is Even');
// } else if (result_odd == "0") {
//     alert("Given Number Is odd");
// }

// ******************************************************************************
// Question 10
// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// Solution
// var weather = prompt('Enter Temperature Of Karachi ');
// if (weather >= "40") {
//     alert('It Too Hot Outside');
// } else if (weather >= "30") {
//     alert('The Weather Toady Is Normal');

// } else if (weather >= "20") {
//     alert('Today’s Weather is cool.”');

// } else {
//     alert('OMG! Today’s weather is so Cool.”');
// }

// ******************************************************************************
// Question 11
// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// Solution
// var firt_number = parseInt(prompt('Enter The First Number'));
// var second_number = parseInt(prompt('Enter The second Number'));
// var operation = prompt('What do you wanna do');
// if (operation == "+") {
//     alert(firt_number + "+" + second_number + "=" + (firt_number + second_number));
// } else if (operation == "-") {
//     alert(firt_number + "-" + second_number + "=" + (firt_number - second_number));
// } else if (operation == "*") {
//     alert(firt_number + "x" + second_number + "=" + (firt_number * second_number));
// } else if (operation == "/") {
//     alert(firt_number + "/" + second_number + "=" + (firt_number / second_number));
// }

// ******************************************************************************
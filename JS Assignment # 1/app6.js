//  // CHAPTER NO 6-9
// ******************************************************************************
// Question 1


// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// Solution

// var userNumber = parseInt(prompt("Enter Your Number"))
// document.write("Resut : ")
// document.write("The Value Of  a : is " + userNumber + "<br>")
// document.write("....................................<br>")
// document.write("The Value Of  ++a : " + (++userNumber) + "<br>")
// document.write("Now The Value is : " + userNumber + "<br><br>")
// document.write("The Value Of a++ : " + (userNumber++) + "<br>")
// document.write("Now The Value is : " + userNumber + "<br> <br>")
// document.write("The Value Of  --a : " + (--userNumber) + "<br>")
// document.write("Now The Value is : " + userNumber + "<br> <br>")
// document.write("The Value Of  --a : " + (userNumber--) + "<br>")
// document.write("Now The Value is : " + userNumber + "<br> <br>")


// ******************************************************************************
// Question 2


// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:

// Solution

// var a = 2
// var b = 1
// var result = --a - --b + ++b + b-- //3
// Explanation

// --a;

// a==1

// --a - --b
// a=1,b=0
// --a - --b =1


// --a - --b + ++b;
//  --a - --b =1.b=1
//  --a - --b + ++b=2

// --a - --b + ++b + b--;

// --a - --b + ++b=2 , b--
// --a - --b + ++b2 + b--=3

// ******************************************************************************
// Question 3


// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// Solution

var subject1 = prompt("ENTEr Your Subject 1 Name")
var subject2 = prompt("ENTEr Your Subject 2 Name")
var subject3 = prompt("ENTEr Your Subject 3 Name")
var subject1Marks = parseInt(prompt("ENTEr Your Subject 1 Number"))
var subject2Marks = parseInt(prompt("ENTEr Your Subject 2 Number"))
var subject3Marks = parseInt(prompt("ENTEr Your Subject 3 Number"))
var totalNumber = 100
var percentage1 = ((subject1Marks / totalNumber) * 100)
var percentage2 = ((subject2Marks / totalNumber) * 100)
var percentage3 = ((subject3Marks / totalNumber) * 100)

// document.write("Subject &nbsp  &nbsp  &nbsp Total marks&nbsp  &nbsp  &nbsp  MarksObtained &nbsp  &nbsp  &nbsp Percentage")
// document.write(subject1 & nbsp & nbsp & nbsp + totalNumber + subject1Marks + percentage1 + "<br/>")
// document.write(subject2 + totalNumber + subject3Marks + percentage2 + "<br/>")
// document.write(subject3 + totalNumber + subject3Marks + percentage3 + "<br/>")

document.write("<table >");
document.write("<tr>");
document.write(" <th>Subject</th>");
document.write(" <th>TotalMarks</th>");
document.write(" <th>Obtained Marks</th>");
document.write(" <th>Percentage</th>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + subject1 + "</td>");
document.write("<td>" + totalNumber + "</td>");
document.write("<td>" + subject1Marks + "</td>");
document.write("<td>" + percentage1 + "%" + " </td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + subject2 + "</td>");
document.write("<td>" + totalNumber + "</td>");
document.write("<td>" + subject2Marks + "</td>");
document.write("<td>" + percentage2 + "%" + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + subject3 + "</td>");
document.write("<td>" + totalNumber + "</td>");
document.write("<td>" + subject3Marks + "</td>");
document.write("<td>" + percentage3 + "%" + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td></td>");
document.write("<th>" + 300 + "</th>");
document.write("<th>" + (subject1Marks + subject2Marks + subject2Marks) + "</th>");
document.write("<th>" + (percentage1 + percentage2 + percentage3 / 300) * 100 + "%" + "</th>");
document.write("</tr>");
document.write("</table >");


// ******************************************************************************
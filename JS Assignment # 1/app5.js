//  // CHAPTER NO 5
// ******************************************************************************
// Question 1

// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.


// Solution

// var num1 = parseInt(prompt("Enter Number 1"))
// var num2 = parseInt(prompt("Enter Number 2"))
// var sum = num1 + num2
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum)

// ******************************************************************************
// Question 2

// Repeat task1 for subtraction, multiplication, division &
// modulus.


// Solution

// var num1 = parseInt(prompt("Enter Number 1"))
// var num2 = parseInt(prompt("Enter Number 2"))
// var subtraction = num1 - num2
// var multiplication = num1 * num2
// var division = num1 / num2
// var modulus = num1 % num2
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction + "<br/>")
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication + "<br/>")
// document.write("Division of " + num1 + " and " + num2 + " is " + division + "<br/>")
// document.write("Modulus of " + num1 + " and " + num2 + " is " + multiplication + "<br/>")

// ******************************************************************************
// Question 3

// . Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”

// Solution

// var mathExpression;

// document.write("value of variable after delclaration is : " + mathExpression + "<br/>")

// mathExpression = 20;
// document.write("Initial value : " + mathExpression + "<br/>")

// mathExpression++
// document.write("value after Increament is : " + mathExpression + "<br/>")

// mathExpression = mathExpression + 7
// document.write("value after addtion is : " + mathExpression + "<br/>")

// mathExpression--;
// document.write("value after Decreament is : " + mathExpression + "<br/>")

// mathExpression = mathExpression % 3;
// document.write("The Remainder is : " + mathExpression + "<br/>")



// ******************************************************************************


// Question 4

// Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// Solution

// var ticketPrice = 600
// var numOfTickets = 5
// var totalExpense = ticketPrice * numOfTickets
// document.write("Total Cost To Buy  " + numOfTickets + " tickets to a movie is " + ticketPrice + "PKR")



// ******************************************************************************
// Question 5

// /Write a script to display multiplication table of any
// number in your browser. 

// Solution

// document.write('<h2> Table of 4 <br/> <br/> ')

// for (var i = 1; i <= 10; i++) {
//     document.write(4 + " x" + i + " = " + 4 * i + "<br>")

// }


// ******************************************************************************

// Question 6

// . The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Solution

// var tempOfCelsius = 56
// var convertedFehrenhiet = (tempOfCelsius * 9 / 5) + 32
// document.write("Celsius To Fehrenhiet : </br>" + tempOfCelsius + "<sup>0</sup> C is " + convertedFehrenhiet + " <sup>0</sup> C </br>")

// var tempOfFehrenhiet = 96
// var convertedCelsius = (tempOfCelsius + 32) * 9 / 5
// document.write("Fehrenhiet To Celsius : </br>" + tempOfFehrenhiet + "<sup>0</sup> C is " + convertedCelsius + "<sup>0</sup> C ")


// ******************************************************************************
// Question 7

// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// Solution


// var price1 = parseInt(prompt("Enter Price Of Item 1"))
// var price2 = parseInt(prompt("Enter Price Of Item 2"))
// var quantity1 = parseInt(prompt("Enter Quantity Of Item 1"))
// var quantity2 = parseInt(prompt("Enter Quantity Of Item 2"))
// var shippingCharges = 100
// var totalCost = ((price1 * quantity1) + (price2 * quantity2) - shippingCharges)

// document.write("<h1>Shopping Cart</h1>")
// document.write("Price OF Item 1 is : " + price1 + "<br/>")
// document.write("Price OF Item 2 is : " + price2 + "<br/>")
// document.write("Quantity OF Item 1 is : " + quantity1 + "<br/>")
// document.write("Quantity OF Item 2 is : " + quantity2 + "<br/>")
// document.write("Shipping Charges : " + price1 + "<br/>")
// document.write("Total Cost : " + totalCost)
// ******************************************************************************
// Question 8
// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// Solution

// var totalMarks = 500
// var marksObtained = 400
// var percentage = (marksObtained / totalMarks) * 100

// document.write("<h1>Marks Sheet</h1>")
// document.write("Total Marks : " + totalMarks + "<br/>")
// document.write("Marks Obtained : " + marksObtained + "<br/>")
// document.write("Percentage  : " + percentage + "% <br/>")


// ******************************************************************************
// Question 9
// . Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// Solution

// var currencyUsDollar = 10
// var currencySaudiRiyals = 25

// var convertedUSDollars = 104.82 * 10
// var convertedSaudiRiyals = 28 * 25

// totalCurrency = convertedSaudiRiyals + convertedUSDollars


// document.write("<h1>Currency In PKR</h1>")
// document.write("Total Currency in PKR : " + totalCurrency.toFixed(0) + "<br/>")



// ******************************************************************************


// Question 10
// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// Solution

// var myNumber = 6
// myNumber = ((myNumber + 5) * 10 / 2)
// console.log(myNumber)

// ******************************************************************************

// Question 11
// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Solution

// var currentYear = 2020;
// var birthYear = 2000

// document.write("<h1>Age Calculator</h1>")
// document.write("Current Year: " + currentYear + "<br/>")
// document.write("Birth Year : " + birthYear + "<br/>")
// document.write("Your Age: " + (currentYear - birthYear) + "<br/>")
// document.write("OR Your Age May be<br/>")
// document.write("Your Age: " + ((currentYear - birthYear) - 1) + "<br/>")



// ******************************************************************************

// Question 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// Solution

// var circleradius = 50
// var areaOfCircle = 3.142 * Math.pow(circleradius, 2)
// var circumferenceOfCircle = (2 * 3.142) * circleradius
// document.write("Radius Of Circle:" + circleradius + "<br/>")
// document.write("The Circumference  Of Circle is :" + circumferenceOfCircle + "<br/>")
// document.write("The Area  Of Circle is :" + areaOfCircle + "<br/>")



// ******************************************************************************
// Question 13
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// Solution
// var favSnack = "COCOMO"
// var currentAge = 19
// var maximumAge = 85
// var estimatedAmount = 50
// var upcoming = (85 - 19) * 50
// document.write("favourite Snack:" + favSnack + "<br/>")
// document.write("Current Age :" + currentAge + "<br/>")
// document.write("Estimated Maximum Age:" + maximumAge + "<br/>")
// document.write("Amount Of Snack Per day:" + 50 + "<br/>")

// document.write("You Will need " + upcoming + " " + favSnack + " to last you until the ripe old ages of " + maximumAge + " <br/>")




// ******************************************************************************
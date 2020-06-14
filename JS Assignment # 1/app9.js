//  // CHAPTER NO 14-16
// ******************************************************************************
// Question 1

// Declare an empty array using JS literal notation to store
// student names in future.
// Solution

// var studentNames = []

// ******************************************************************************

// Question 2

// Declare an empty array using JS object notation to store
// student names in future.
// Solution

// var studentNames = []

// ******************************************************************************

// Question 3

// 3. Declare and initialize a strings array
// Solution

// var studentNames = ['Shahzaib', 'Sheraz', 'Zain']

// ******************************************************************************
// Question 4
// Solution

// Declare and initialize a numbers array.

// var studentNames = [36, 56, 89]

// ******************************************************************************

// Question 5
// Solution

// Declare and initialize a boolean array.


// var studentNames = [true, false]

// ******************************************************************************

// Question 6
// Solution

//Declare and initialize a mixed array.


// var studentNames = [true, 23, 'HelloWorld']

// ******************************************************************************
// Question 7
// Solution

//Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
//     qualifications in your browser like:


// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]
// for (let i = 0; i < qualification.length; i++) {
//     document.write((i + 1) + ")" + qualification[i] + "<br/>")
// }

// ******************************************************************************

// Question 8

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


// Solution
// var studentNames = ['Shahzaib', 'Zain', 'Sheraz']
// var studentMarks = [460, 450, 420]
// var totalMarks = 500
// for (var i = 0; i < studentNames.length; i++) {
//     document.write('Score Of ' + studentNames[i] + " is " + studentMarks[i] + ". Percentge : " + (studentMarks[i] / totalMarks) * 100 + " % <br/>")

// }
// ******************************************************************************





// Question#9

// . Initialize an array with color names. Display the array
// elements in your browser
// Solution

// var arr1 = ["red", "blue", "green"];
// document.write("oldAray:" + arr1 + "&nbsp" + "<br/>");

//        a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var arr1 = ["red", "blue", "green"];
// var name = prompt("enter a color you want to add");
// arr1.unshift(name);
// document.write("&nbsp" + "New array: " + arr1 + "&nbsp")

//  Add two more color to the beginning of the array.
// Display the updated array in your browser

// document.write("oldAray:" + arr1 + "&nbsp" + "<br/>");
// var name1 = prompt("enter a color you want to add");
// arr1.unshift(name1);
// var name2 = prompt("enter a color you want to add");
// arr1.unshift(name2);
// document.write("&nbsp" + "New array: " + arr1 + "&nbsp")

// d. Delete the first color in the array. Display the updated
// array in your browser.



// var arr1 = ["red", "orange", "grey"];
// arr1.shift();
// document.write(arr1 + "&nbsp" + "<br/>");

// Delete the last color in the array. Display the updated
// array in your browser.
// var arr1 = ["red", "orange", "grey"];
// arr1.pop();
// document.write(arr1 + "&nbsp" + "<br/>");

// Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser

// var arr1 = ["red", "blue", "white"];
// document.write(arr1 + "<br/>");
// var color = prompt("Enter Your Color Name");
// var indexx = parseInt(prompt("Enter Your index number"));
// arr1.splice(indexx, 0, color);
// document.write(arr1)

// . Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser

// var arr1 = ["red", "green", "ORange", "Black", "purple", "Violet"]
// var indexx = prompt("enter yoOur INddex");
// var manyyy = prompt("how many");
// arr1.splice(indexx, manyyy)
// document.write(arr1);

// ******************************************************************************
// Question #10
// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.



// Solution
// var studentScores = [320, 230, 480, 120]
// document.write("Unordered Students Scores  : " + studentScores + "<br/>")
// document.write(" Ordered Students Scores  : " + studentScores.sort())

// ******************************************************************************
// Question #11
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array



// Solution
// var cityNames = ['karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
// var selectedCities = [cityNames[1], cityNames[2], cityNames[3]]
// document.write(selectedCities)
// ******************************************************************************

// Question #12
// Write a program to create a single string from the
// below mentioned array:



// Solution
// var arr = ['This', 'is', 'my', 'cat']
// document.write("ARRAY : " + arr + "<br/>")
// document.write("String : " + arr.join(" "))
// var selectedCities = [cityNames[1], cityNames[2], cityNames[3]]
// console.log(selectedCities)
// ******************************************************************************


// Question #13
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)



// Solution
// document.write('Out :<br/>')
// var devices = ['keyboard', 'mouse', 'printer', 'monitor']
// for (var i = 0; i < devices.length; i++) {
//     document.write(devices[i] + "<br/>")
// }

// ******************************************************************************

// Question #14
// /Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)



// Solution
// document.write('Out :<br/>')
// var devices = ['keyboard', 'mouse', 'printer', 'monitor']
// for (var i = devices.length; i >= 0; i--) {
//     document.write(devices[i - 1] + "<br/>")
// }

// ******************************************************************************


// Question #15
// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// Solution
// document.write('<select >')
// var company = ['Nokia', 'Apple', 'Motrolla', 'Samsung', 'Sony', 'Haier']
// for (let i = 0; i < company.length; i++) {
//     document.write('<option > ')
//     document.write(company[i])
//     document.write('</option > ')
// }
// document.write('< /select > ')

// ******************************************************************************
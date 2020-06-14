//  // CHAPTER NO 17-20
// ******************************************************************************
// Question 1

// Declare and initialize an empty multidimensional array.
// (Array of arrays)
// Solution

// var arr=[]

// ******************************************************************************
// Question 2

// Declare and initialize an empty multidimensional array.
// (Array of arrays)
// Solution

// var arr = []
// arr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i].join(" ") + "<br/>")
// }
// ******************************************************************************
// Question 3

// Write a program to print numeric counting from 1 to 10.
// Solution

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// ******************************************************************************
// Question 4

// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// Solution

// var tableNumber = parseInt(prompt("Enter A Number"))
// var tablelength = parseInt(prompt("Enter A length"))
// for (let i = 1; i <= tablelength; i++) {
//     console.log(tableNumber + "X" + i + "=" + tableNumber * i)

// }

// ******************************************************************************
// Question 5
// Write a program to print items of the following array
// using for loop:
// Solution

// var fruits = ['Apple', 'banana', 'Mango', 'Orange', 'Strawberry']

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }


// for (let i = 0; i < fruits.length; i++) {

//     console.log('Element At  Index ' + i + " is " + fruits[i])
// }

// ******************************************************************************
// Question 6
// Generate the following series in your browser. See
// example output.
// Solution

// A Counting
// document.write("Counting : <br/>")
// var countingArray = []
// for (var i = 1; i <= 15; i++) {
//     countingArray.push(i)
// }

// document.write(countingArray + "<br/>")
// B Reverse Counting

// document.write("Reverse Counting : <br/>")
// var ReverseArray = []
// for (var i = 10; i >= 0; i--) {
//     ReverseArray.push(i)
// }
// document.write(ReverseArray + "<br/>")



// C Even Number

// document.write("Even Number : <br/>")
// var evenArray = []
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         evenArray.push(i)
//     }
// }
// document.write(evenArray + "<br/>")


// D Odd Number

// document.write("Odd Number : <br/>")
// var oddArray = []
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 != 0) {
//         oddArray.push(i)
//     }
// }
// document.write(oddArray + "<br/>")


// C Series Number
// document.write("Series Number : <br/>")
// var seriesArray = []
// for (var i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         seriesArray.push(i + "K")
//     }
// }
// document.write(seriesArray + "<br/>")
// ******************************************************************************

// Question 7

// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// Solution


// var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// console.log(a);
// var s = prompt("Enter what you want to Search:");
// s = s.toLowerCase();
// var i = 0;
// for (i = 0; i < a.length; i++) {
//     if (s == a[i])

//     {
//         alert(a[i] + " is available at Index " + a.indexOf(a[i]) + " In  Our Bakery ")
//         break;
//     }
// }
// if (i == a.length) {
//     alert("We Are Sorry" + a[i] + " is NOt available In  Our Bakery")
// }

// ******************************************************************************
// Question 8

// // You have an arrayWrite a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
// Solution


// var a = [24, 53, 78, 91, 12];
// var lg = 0;

// for (i = 0; i < a.length; i++) {
//     if (a[i] > lg) {
//         lg = a[i]
//     }

// }
// document.write("Array Items : <br/>")
// document.write("The Largest Number : " + lg + "<br/>");



// ******************************************************************************
// Question 9

// Write a program to identify the smallest number in the
// given array
// A = [24, 53, 78, 91, 12]

// Solution


// var a = [24, 53, 78, 91, 12];
// var sm = a[1]

// for (i = 0; i < a.length; i++) {
//     if (a[i] < sm) {
//         sm = a[i]
//     }

// }
// document.write("Array Items : <br/>")
// document.write("The Smallest Number : " + sm + "<br/>");



// ******************************************************************************
// Question 10

// Write a program to print multiples of 5 ranging 1 to
// 100.

// Solution

// for (i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         console.log(i)
//     }
// }


// ******************************************************************************
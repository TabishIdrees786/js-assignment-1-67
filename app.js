// Chapter 1 - 9
// problem 1
// alert("Welcome To Js Land \n Happy Coding")
// problem 2
// var a = prompt("Enter your age")
// alert("Your age is " + a)
// problem 3
// document.write("<h1>Rules for naming JS variables</h1>")
// document.write("<p>Variable names can only contain numbers,$ and _ . For example $my_1stVariable</p>")
// document.write("<p>Variables must begin with a $,or _ . For example $name, _name or name</p>")
// document.write("<p>Variable names are case sensitive</p>")
// document.write("<p>Variable names should not be JS Keywords</p>")
// Chapter 9 - 11
// PROBLEM# 1
// var city = prompt("Enter your City");
// city = city.toLowerCase();
// if (city == "karachi") {
//     alert("Welcome To City Of Ligt")
// } else {
//     alert("Welcome")
// }
// PROBLEM# 2
// var gender = prompt("Enter your Gender");
// gender = gender.toLowerCase();
// if (gender == "male") {
//     alert("Good Moorning Sir")
// } else if (gender == "female") {
//     alert("Good moorning ma'am")
// } else {
//     alert("Good Moorning")
// }
// PROBLEM# 3
// var signal = prompt("color of road traffic signal ", "Red, Blue, Green");
// signal = signal.toLowerCase();
// if (signal == "red") {
//     alert("Must Stop")
// } else if (signal == "yellow") {
//     alert("Ready to Move")
// } else if (signal == "green") {
//     alert("Move on")
// } else {
//     alert("Wrong Color")
// }
// PROBLEM# 4
// var a = prompt("Enter Your Car fuel");
// if (+a < 0.25) {
//     alert("Please refill the fuel in your car")
// } else {
//     alert("Enjoy your drive")
// }
// PROBLEM# 5
// var math = prompt("Enter Your Maths Marks");
// var physic = prompt("Enter Your Physics Marks");
// var chemistry = prompt("Enter Your Chemistry Marks");
// var tot = +math + +physic + +chemistry;
// tot = Math.ceil(tot / 300 * 100);
// if (tot <= 39) {
//     alert("Your percentage is " + tot + "% F Grade")
// } else if (tot <= 49) {
//     alert("Your percentage is " + tot + "% D Grade")
// } else if (tot <= 59) {
//     alert("Your percentage is " + tot + "% C Grade")
// } else if (tot <= 69) {
//     alert("Your percentage is " + tot + "% B Grade")
// } else if (tot <= 79) {
//     alert("Your percentage is " + tot + "% A Grade")
// } else if (tot <= 100) {
//     alert("Your percentage is " + tot + "% A+ Grade")
// } else {
//     alert("Put right Number")
// }
// PROBLEM# 6
// var rand = Math.random() * 10;
// rand = Math.floor(rand);
// var secretNum = prompt("Enter Your Number 1-10");
// if (+secretNum === rand) {
//     alert("Bingoo You win")
// } else if (+secretNum === rand + 1 || +secretNum === rand - 1) {
//     alert("Close enough to the correct answer")
// } else {
//     alert("Fail")
// }
// console.log(rand)
// PROBLEM# 7
// var a = prompt("Enter Number divisible by 3");
// if (+a === 0) {
//     alert("0 is not divisible by 3")
// } else if (+a % 3 === 0) {
//     alert(a + " is divisible by 3")
// } else {
//     alert(a + " is not divisible by 3")
// }
// PROBLEM# 8
// var a = prompt("Enter Number");
// if (+a % 2 === 0) {
//     alert("The Number is Even")
// } else if (+a % 2 !== 0) {
//     alert("This Number is Odd")
// } else {
//     alert("Enter Number")
// }
// PROBLEM# 9
// var temp = prompt("Enter Temperature");
// if (+temp <= 10) {
//     alert("OMG! Today’s weather is so Cool.")
// } else if (+temp <= 20) {
//     alert("Today’s Weather is cool.")
// } else if (+temp <= 30) {
//     alert("The Weather today is Normal.")
// } else if (+temp > 30) {
//     alert("It is too hot outside.")
// } else {
//     alert("Enter right Temperature")
// }
// PROBLEM# 10
// var fistNum = prompt("Enter First Number");
// var oper = prompt("Enter Operator +,-,* and /");
// var secNum = prompt("Enter Second Number");
// if (oper === "+") {
//     alert(+fistNum + +secNum)
// } else if (oper === "-") {
//     alert(+fistNum - +secNum)
// } else if (oper === "*") {
//     alert(+fistNum * +secNum)
// } else if (oper === "/") {
//     alert(+fistNum / +secNum)
// } else {
//     alert("Enter Right Number or operator")
// }
// Chapter 12 - 13
// PROBLEM# 1
// var int1 = prompt("Enter Integer 1");
// var int2 = prompt("Enter Integer 2");
// if (+int1 > +int2) {
//     alert("Integer 1 is Greater")
// } else if (+int1 < +int2) {
//     alert("Integer 2 is Greater")
// } else if (+int1 == +int2) {
//     alert("Both Integer in Equel")
// } else {
//     alert("Select Number")
// }
// PROBLEM# 2
// var intt = prompt("Enter any Number");
// if (+intt > 0) {
//     alert("positive Number")
// } else if (+intt < 0) {
//     alert("Negative Number")
// } else if (+intt == 0) {
//     alert("Zero")
// } else {
//     alert("Select Number")
// }
// PROBLEM# 3
// var vowel = prompt("Enter Any Character of Alphabet");
// vowel = vowel.toLocaleLowerCase();
// if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
//     alert("Character is Vowel")
// } else {
//     alert("Character is not Vowel")
// }
// PROBLEM# 4
// var password = prompt("Enter Password", "Pakistan Zindabad");
// if (password === "Pakistan Zindabad") {
//     alert("Password is Corrct")
// } else {
//     alert("Password is Incorrect")
// }
// PROBLEM# 5
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert("Good day");
// } else {
//     alert("Good evening");
// }
// Chapter 14 - 16
// Problem# 1
// var Arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// problem #2

// var arr =[
//     ["Tabish", "Shayan", "Shami"], ["765", "777", "787"], ["89%", "91%", "92%"]
// ]
// problem #3

// var arr1 = prompt("Enter arr1");
// var arr2 = prompt("Enter arr2");
// var arr3 = prompt("Enter arr3");
// var arr = [arr1, arr2, arr3];
// alert(arr);
// var arr4 = prompt("Enter arr4")
// arr.push(arr4);
// alert(arr)
// problem #4

// var arr =["This", "is", "my", "cat"]
// var string = arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3];
// alert(string)
// Chapter 17 - 20
// PROBLEM# 1
// document.write("<h1>Chapter 17-20</h1>")
// var array1 = [
//     [0, 1, 2, 3],
//     [0, 2, 0, 1],
//     [2, 1, 0, 1]
// ];
// document.write("<h2>Multidimensional Array</h2>" + array1[0] + "<br>" + array1[1] + "<br>" + array1[2]);
// PROBLEM# 2
// document.write("<h2>Counting</h2>")
// for (i = 1; i <= 10; i++) {
//     document.write(i + "<br>")
// }
// PROBLEM# 3
// document.write("<h2>Table</h2>")
// var a = prompt("Enter a Number to show its Multiplication Table");
// var b = prompt("Enter length multiplication table")
// for (var i = 1; i <= +b; i++) {
//     document.write(a + "*" + i + "=" + +a * i + "<br>")
// }
// PROBLEM# 4
// document.write("<h2>fruits</h2>")
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (i = 0; i <= fruits.length - 1; i++) {
//     document.write(fruits[i] + "<br>")
// }
// PROBLEM# 5
// document.write("<h2>Counting:</h2>")
// document.write("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15")
// document.write("<h2>Reverse counting:</h2>")
// document.write(" 10, 9, 8, 7, 6, 5, 4, 3, 2, 1")
// document.write("<h2>Even:</h1>")
// document.write("0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20")
// document.write("<h1>Odd:</h2>")
// document.write("1, 3, 5, 7, 9, 11, 13, 15, 17, 19")
// document.write("<h2>Series:</h2>")
// document.write("2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k")
// PROBLEM# 6
// var backry = prompt("Welcome to Cakery What do you wnat Sir/Madam");
// var a = backry.toLocaleLowerCase();
// var city1 = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (var j = 0; j <= city1.length; j++) {
//     if (a == city1[j]) {
//         alert(backry + " " + " is available at index " + j)
//     }
// }
// PROBLEM# 7
// document.write("<h2>Largest Number In Array</h2>")
// var arr = [24, 53, 78, 91, 12];
// var largest = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i]) {
//         largest = arr[i];
//     }
// }
// document.write(largest)
// PROBLEM# 8
// document.write("<h2>Smallest Number In Array</h2>")
// var arr = [24, 53, 78, 91, 12];
// var smallest = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (largest > arr[i]) {
//         largest = arr[i];
//     }
// }
// document.write(smallest)
// PROBLEM# 9
// document.write("<h2> program to print multiples of 5 ranging 1 to 100</h2>")
// for (i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         document.write(i + " ")
//     }
// }
// document.write("<hr>")

// Chapter 21-25

// Task 1
// var a = prompt("Enter Your First Name");
// var b = prompt("Enter Your Last Name");
// var c = a + " " + b;
// alert("Hello" + " " + c);

// Task 2
// var a = prompt("Enter Your Msg");
// alert("Your Msg length is " + a.length)

// Task 3
// var a = "Pakistani";
// var b = a.indexOf("n");
// alert("The index of n in pakistani is " + b)

// Task 4
// var a = "Hello World";
// var b = a.lastIndexOf("l");
// alert("The last index of l in Hello World is " + b)

// Task 5
// var a = "pakistani";
// var b = a.charAt(3);
// alert("Character at index 3 is : " + b)

// Task 6
// var a = prompt("Enter Your First Name");
// var b = prompt("Enter Your Last Name");
// alert("Hello" + " " + a + " " + b);

// Task 7
// var city = "Hydrabad";
// var after_replacement = city.replace("Hydr", "Islam");
// alert(after_replacement)

// Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var b = message.replace(/and/g, "&");
// alert(b);

// Task 9
// var a = "472";
// var b = Number(a);
// var c = parseInt(a);
// console.log(typeof(b))
// console.log(typeof(a))
// console.log(typeof(c))

// Task 10
// var a = prompt("Enter Anything");
// a = a.toLocaleUpperCase();
// alert(a)

// Task 11
// var a = prompt("Enter Anything");
// b = a.slice(0, 1);
// b = b.toLocaleUpperCase();
// a = b + a.slice(1)
// alert(a)

// Task 12
// Miss

// Task 13
// Miss

// Task 14
// Miss

// Task 15
// Miss

// Task 16
// Miss

// Task 17
// var a = prompt("Enter Anything");
// a = a.charAt(a.length - 1);
// alert("Last Character of input is " + a)

// Task 18
// Miss

// Chapter 26-30

// Task 1
// var a = prompt("Enter positive Integer");
// a = Number(a);
// console.log("Round of Value " + Math.round(a))
// console.log("floor of Value " + Math.floor(a))
// console.log("Ceil of Value " + Math.ceil(a))

// Task 2
// var a = prompt("Enter negative Integer");
// a = Number(a);
// console.log("Round of Value " + Math.round(a))
// console.log("floor of Value " + Math.floor(a))
// console.log("Ceil of Value " + Math.ceil(a))

// Task 3
// var a = prompt("Enter negative Integer");
// a = Number(a);
// a = Math.abs(a);
// alert(a)

//Task 4
// var a = Math.random() * 6;
// a = Math.ceil(a);
// alert("Random Number is " + a)

//Task 5
// var a = Math.random() * 2;
// a = Math.ceil(a);
// console.log(a)
// if (a === 2) {
//     alert("Random Coin Value is Head")
// } else if (a === 1) {
//     alert("Random Coin Value is tail")
// }

//Task 6
// var a = Math.random() * 100;
// a = Math.ceil(a);
// alert("Random Number between 1 to 100 : " + a)

// Task 7
// Miss

//Task 8
// var a = Math.random() * 10;
// a = Math.ceil(a);
// console.log(a)
// var b = prompt("Enter Num 1 to 10");
// if (a === +b) {
//     alert("Congratulation You win")
// } else {
//     alert("Try Again")
// }

// Chapter 31-34

// Task 1
// var a = new Date();
// alert(a)

// Task 2
// var a = new Date();
// var month = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
// alert("Current Month is " + month[a.getMonth()]);

// Task 3
// var a = new Date();
// var month = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// alert("Today is " + month[a.getDay()]);

// Task 4
// var a = new Date();
// var month = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// if (a.getDay === "0" || a.getDay === "6") {
//     alert("Today is Funday")
// } else {
//     alert("Today is " + month[a.getDay()])
// }

// Task 5
// Miss

// Task 6
// var a = new Date();
// var c = a.getTime();
// console.log(c)
// b = a.getTime() / (1000 * 60 * 60);
// console.log(b)

// Task 7
// var a = new Date();
// var b = a.getHours();
// var c = a.getMinutes();
// console.log(b)
// console.log(c)
// if (b === 12) {
//     alert("Its " + 12 + ":" + c + " PM")
// } else if (b === 13) {
//     alert("Its " + 01 + ":" + c + " PM")
// } else if (b === 14) {
//     alert("Its " + 02 + ":" + c + " PM")
// } else if (b === 15) {
//     alert("Its " + 03 + ":" + c + " PM")
// } else if (b === 16) {
//     alert("Its " + 04 + ":" + c + " PM")
// } else if (b === 17) {
//     alert("Its " + 05 + ":" + c + " PM")
// } else if (b === 18) {
//     alert("Its " + 06 + ":" + c + " PM")
// } else if (b === 19) {
//     alert("Its " + 07 + ":" + c + " PM")
// } else if (b === 20) {
//     alert("Its " + 08 + ":" + c + " PM")
// } else if (b === 21) {
//     alert("Its " + 09 + ":" + c + " PM")
// } else if (b === 22) {
//     alert("Its " + 10 + ":" + c + " PM")
// } else if (b === 23) {
//     alert("Its " + 11 + ":" + c + " PM")
// } else {
//     alert("Its " + b + ":" + c + " AM")
// }

// Task 8
// var a = new Date("December 31, 2020")
// alert(a);

// Task 9
// var a = new Date("June 18, 2015");
// a = a.getTime();
// var b = new Date();
// b = b.getTime();
// var c = b - a;
// alert(Math.round(c / (1000 * 60 * 60 * 24)) + " Days have passed since 1st Ramzan, 2015")

// Task 10, 11, 12
// Miss

// Task 13
// var b = prompt("Enter Your Year of Birth", "e.g 1999")
// b = Number(b);
// var a = new Date();
// a = a.getFullYear();
// var c = a - b;
// alert("Your age is " + c)

// Task 14
// var a = prompt("Enter Your February Units");
// document.write("<h1>K-Electric Bill</h1>")
// document.write("Customer Name: <b>ABC Customer</b> <br>")
// document.write("Month: <b>February</b> <br>")
// document.write("Number of Units: " + "<b>" + a + "</b> <br>")
// document.write("Charges per Unit: <b>16</b> <br><br>")
// a = a * 16;
// document.write("Net Amount Payable (within due date) : " + "<b>" + a + "</b> <br>")
// document.write("Late Payment Surcharge: <b>350</b> <br>")
// document.write("Gross Amount Payable (after due date) : " + "<b>" + ((+a) + 350) + "</b> <br>")

// Chapter 35-38

// Task 1
// var a = new Date();
// document.write("Current Date is " + a)

// Task 10
// var a = prompt("Enter palindrome Word");
// var b = "";
// for (var i = a.length - 1; i >= 0; i--) {
//     console.log(a[i])
//     b = b + a[i];
// }
// if (a === b) {
//     alert("Good")
// } else {
//     alert("Bad")
// }

// Task 14
// function calcCircumference(radius) {
//     var a = 3.142;
//     var b = 2 * a * radius;
//     return b
// }
// var a = calcCircumference(8);
// alert("The circumference is " + a)

// function calcArea(radius) {
//     var a = 3.142;
//     var b = a * radius * radius;
//     return b
// }
// var a = calcArea(8);
// alert("The Area is " + a)


// chapter 38-42
// Task 1
// Task 2
// var a = prompt("Enter Number","e.g 2011")
// a = Number(a)
// if(a%4 == 0){
//     alert(a + " is Leap Year")
// }
// else{
//     alert(a + " is not Leap Year")
// }

// Task 3
// var a = prompt("Enter Triangle 1st side length","5")
// var b = prompt("Enter Triangle 2nd side length","5")
// var c = prompt("Enter Triangle 3rd side length","5")
// a = Number(a);
// b = Number(b);
// c = Number(c);
// var d = (a+b+c)/2;
// var e = d*(d-a)*(d-b)*(d-c);
// alert("According to formula The Area of a Triangle is " + e + " cm")

// Task 4
// function Result(){
// var a = document.getElementById("phy").value;
// var b = document.getElementById("che").value;
// var c = document.getElementById("math").value;
// a=Number(a);
// b=Number(b);
// c=Number(c)
// var res = ((a+b+c)*100)/300;
// console.log(res)
// if(res >= 0 && res <= 100){
//     alert("Your Percentage is "+ res + "%")
// }
// else{
//     alert("Enter Correct Marks")
// }
// }

// Task 5
// var a = prompt("Enter Your Name")
// var b = a.indexOf("a");
// b = b+1;
// var c = 0;
// alert("The index of a in your name is " + b)
// for(var i = 0; i< a.length; i++){
//     if(a[i] == "a"){
//         c++;
//     }
// }
// alert(c + " Times a in your Name")

// Task 6
// var a = prompt("Enter Sentence")
// for(var i = 0; i< a.length; i++ ){
//     if(a.charAt(i)== "a"||a.charAt(i)== "e"||a.charAt(i)== "i"||a.charAt(i)== "o"||a.charAt(i)== "u"){
//         a = a.slice(0,i)+a.slice(i+1);
//     }
// }
// alert(a)

// Task 7

// Task 8

// Task 9
// var a = prompt("Enter Your Working Hours working hours are 8", "8")
// var b = a-8;
// var c = b*12;
// a = a-b;
// var d = a*10;
// if(a >= 0 && a<=100){
// alert("Your Salary is "+ (c+d) +" Rupees Per day")
// }
// else{
//     alert("Enter correct number")
// }

// Task 10



// Chapter 43 to 48

// Task # 1
// function alerts() {
//     alert("Pakistan Zindabad")
// }

// Task # 2
// On Html sheet

// Task# 3
// function del1() {
//     var a = document.getElementById("tr1");
//     a.innerHTML = "tabish";
// }

// Task# 4
// On Html Sheet

// Task # 5
// var a = 0;

// function incb() {
//     ++a
//     var b = document.getElementById('counter');
//     b.value = a
// }

// function decb() {
//     --a
//     var b = document.getElementById('counter');
//     b.value = a
// }

// Chapter 49-52
// Task 1
// function sub() {
//     var a = document.getElementById("Name").value;
//     var b = document.getElementById("Class").value;
//     var c = document.getElementById("rn").value;
//     var d = document.getElementById("City").value;
//     var e = document.getElementById("dd1");
//     a = a.toUpperCase();
//     d = d.toUpperCase();
//     e.innerHTML = "Name: " + a + "<br>" + "Class: " + b + "<br>" + "Roll No: " + c + "<br>" + "City: " + d + "<br>";
// }
// Task 2
// var a = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ducimus, doloribus at ea reprehenderit beatae perspiciatis error cumque, doloremque delectus culpa dolor laboriosam! Molestiae deleniti corrupti fuga, obcaecati delectus vero."

// function ppe() {
//     document.getElementById("pp").innerHTML = a;
// }

// Chapter 53-57
// function im1() {
//     var a = document.getElementById("im1");
//     a.className = "im11";
//     document.getElementById("im2").className = "im2";
//     document.getElementById("im3").className = "im3";
// }

// function im2() {
//     var a = document.getElementById("im2");
//     a.className = "im11";
//     document.getElementById("im1").className = "im1";
//     document.getElementById("im3").className = "im3";
// }

// function im3() {
//     var a = document.getElementById("im3");
//     a.className = "im11";
//     document.getElementById("im2").className = "im2";
//     document.getElementById("im1").className = "im1";
// }

// CHAPTER 58 -67

// Task # 1
// var a =  document.getElementById("main-content")

// task # 2

// var a =  document.getElementById("main-content")
// for(var i =0; i< 11 ; i++){
//     console.log(a.childNodes[i])
// }


// task # 3

// var a = document.getElementsByClassName("render")
// for(i = 0; i<5; i++){
// var b = a[i];
// console.log(b)
// }

// // task #  04

// var a = document.getElementById("first-name")
// a.value = "Tabish"

// task # 5

// var a = document.getElementById("last-name")
// var b = document.getElementById("email")
// a.value = "idrees"
// b.value = "tabishrajput18@gmail.com"

// task # 6
// alert("Node type of form-content id is "+document.getElementById("form-content").nodeType)

// task # 7
// alert("Node type of lastName id is "+document.getElementById("lastName").nodeType)

// task # 8
// var b = document.createElement("p")
// var c = document.createTextNode("Tabish");
// b.appendChild(c);
// var a = document.getElementById("lastName");
// a.appendChild(b);
// console.log(a)

// task # 9
// var a = document.getElementById("main-content");
// console.log(a.firstChild)
// console.log(a.lastChild)

// task # 10
// var a = document.getElementById("lastName");
// console.log(a.nextElementSibling)
// console.log(a.previousElementSibling)

// task # 11
// var a = document.getElementById("email");
// console.log(a.parentNode)
// console.log(a.parentNode.nodeType)

console.log("Welcome to JavaScript");

// 2. Declare and print personal details
let studentName = "Zakwan Farkande";
let rollNumber = 101;
let branch = "CSE";
let city = "Solapur";

console.log(studentName);
console.log(rollNumber);
console.log(branch);
console.log(city);

// 3. Change marks using let
let marks = 50;
console.log(marks);

marks = 75;
console.log(marks);

// 4. Const variable
const collegeName = "MIT-VPU Solapur";
console.log(collegeName);


//collegeName = "Other College";


// 5. Redeclaration using var and let
var number = 10;
var number = 20;
console.log(number); // Output: 20

let value = 10;
//let value = 20; // Error: Identifier 'value' has already been declared


// 6. Declare without a value
let x;
console.log(x); // Output: undefined

x = "Hello";
console.log(x); // Output: Hello


// 7. Swap two variables
let a = "Mango";
let b = "Apple";

let temp = a;
a = b;
b = temp;

console.log(a); // Apple
console.log(b); // Mango


// 8. Change count
let count = 0;
console.log(count);

count = 1;
console.log(count);

count = 2;
console.log(count);

count = 3;
console.log(count);


// 9. Corrected code
let price = 100;
const correctedCity = "Solapur";
let name = "Riya";
name = "Asha";

console.log(price);
console.log(correctedCity);
console.log(name); // Asha


// 10. Student Card
const studentCardName = "Zakwan Farkande";
let age = 19;
const course = "B.Tech CSE";
const college = "MIT-VPU Solapur";

console.log("----- STUDENT CARD -----");
console.log("Name: " + studentCardName);
console.log("Age: " + age);
console.log("Course: " + course);
console.log("College: " + college);

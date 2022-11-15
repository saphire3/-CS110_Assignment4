const functions = require('./Functions');
console.log(functions.factorial(4));
console.log(functions.gcd(8, 3));
console.log(functions.lcm(12, 3));
console.log(functions.toHexadecimal(1200));

//2. Write a program that in a separate file, contains the following mathematical functions.You
//must import this file into a tester file for testing.

//1. factorial: A function that returns the factorial of a given positive number(using loop).

//2. gcd: A function that returns the Greatest Common Divisor of two positive integers using
//the Euclidean algorithm.

//3. hcf: A function that returns the Highest Common Factor of two positive integers.This
//function should call your function in question 2.3.

//4. toHexadecimal: A function that converts a given decimal positive integer into its
//corresponding Hexadecimal value.Hint: You can have an array of characters from ‘A’ to
//‘F’ (where index of ‘A’ is zero and index of ‘F’ is five) and get the right letter using your
//remainder as its index.

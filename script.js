// Exercise 1-----------------------------------------------------------------

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have your parents permission to access this page?');
//     }
//   }

// The following function returns true if the parameter age is greater than 18.
// Otherwise, it asks for a confirmation and returns its result.
//Rewrite it, to perform the same, but without if...else, and using arrow function.


let age=19
let checkAge = (age >= 18) ? age => console.log("true") : age => confirm('Do you have your parents permission to access this page?');
checkAge(age)
                                         
// Exercise 2 -----------------------------------------------------------------

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// P.S. In this task the function should support only natural values of n: integers up from 1.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//       result *=  x;
//     }
//     return result;
// }
// console.log(pow(3,3))



let pow = (x,n) => {let result = x;  for (let i = 1; i < n; i++) {result *=  x;}return result; };


console.log(pow(3,3))








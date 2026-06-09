// // task 1
// function greet(name) {
//   return `hello ${name}`;
// }
// const result = greet('shawon');
// console.log(result);
// // task 2
// const bioInfo = () => {
//   let name = 'shawon';
//   return `hello ${name}`;
// };
// console.log(bioInfo());
// // task 3
// const biggestNumberCheck = (a, b) => {
//   if (a > b) {
//     return `the biggest number is ${a}`;
//   } else {
//     return `biggest number is ${b}`;
//   }
// };
// console.log(biggestNumberCheck(222, 2));
// // task 4
// const arguments = (a, b) => {
//   return a + b;
// };
// console.log(arguments(3, 4));
// // task 5
// function sumAll() {
//   let sum = 0;
//   for (i = 0; i < arguments.length; i++) sum += arguments[i];
//   return sum;
// }
// console.log(sumAll(12, 13, 14, 15, 16));
// console.log(sumAll(12, 13, 14, 15));
// console.log(sumAll(12, 13, 14));
// // // task 6

// function variable() {
//   let num = 40;
//   console.log(num);
// }

// variable();
// // task 7

// function factorial(n) {
//   let result = 1;
//   for (i = 1; i <= n; i++) result *= i;
//   return result;
// }
// console.log(factorial(7));
// // task 8

function reverseString(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// console.log(reverseString('hello'));
// task12
function minMax(a, b) {
  return {
    min: Math.min(a, b),
    max: Math.max(a, b),
  };
}
const okay = minMax(12, 66);
console.log(okay);
console.log(okay.min);
console.log(okay.min);
// ---------------------

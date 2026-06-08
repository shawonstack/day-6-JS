// // function add(a, b) {
// //   return a + b;
// // }

// const result = add(4, 5);
// // console.log(result);
// function add(a, b) {
//   console.log(a + b);
// }

// const result1 = add(5, 10);

// console.log(result1);

// // ---------
// function test() {
//   console.log('a');
//   return 'done';
//   console.log('b');
// }
// test();
// // -----------
// function chckAge(age) {
//   if (age >= 18) {
//     return 'adult';
//   }
//   return 'minor';
// }
// const res = chckAge(12);
// console.log(res);
// ------
// function verifyPassword(pass) {
//   if (pass === 12345) {
//     return true;
//   }
//   return false;
// }
// const res = verifyPassword(12345);
// console.log(res);
// // ----------
// function calculateDiscount(price) {
//   return price * 0.1;
// }
// const discount = calculateDiscount(1000);
// console.log(discount);
function user() {
  return {
    name: 'shawon',
    age: 26,
    study: 'cse',
  };
}
const result3 = user();
console.log(result3.study);

// ------
function getNumbers() {
  return [10, 20, 30];
}

const nums = getNumbers();

console.log(nums[1]);

// --------- function return another fucntion
function shawon() {
  return function () {
    console.log('hello from callback');
  };
}
shawon();
// ----- price and vat
function calculateTotal(price, vat) {
  return price + vat;
}
const total = calculateTotal(1000, 100);
console.log('total price including vat is:', total);

// function add(a, b) {
//   return a + b;
// }

const result = add(4, 5);
// console.log(result);
function add(a, b) {
  console.log(a + b);
}

const result1 = add(5, 10);

console.log(result1);

// ---------
function test() {
  console.log('a');
  return 'done';
  console.log('b');
}
test();
// -----------
function chckAge(age) {
  if (age >= 18) {
    return 'adult';
  }
  return 'minor';
}
const res = chckAge(12);
console.log(res);
------
function verifyPassword(pass) {
  if (pass === 12345) {
    return true;
  }
  return false;
}
const res = verifyPassword(12345);
console.log(res);
// ----------
function calculateDiscount(price) {
  return price * 0.1;
}
const discount = calculateDiscount(1000);
console.log(discount);

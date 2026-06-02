// kono function ke variable e store korake function expression bole
const aboutPage = function about() {
  console.log('explore the new era');
};
// aboutPage();
const numberAdd = function (a, b) {
  // console.log(a + b);
};
numberAdd(20, 30);

const squreValue = function (num) {
  console.log(num * num);
};
// squreValue(4);

const array = [
  function () {
    console.log('task 1');
  },
  function () {
    console.log('task 2');
  },
];

const user = {
  name: 'Blood',

  age: function () {
    console.log(42);
  },
};

// user.age();

const food = function () {
  console.log('natinal food is Jackfruit');
};
const result = food;
// food();

const mother = () => {
  console.log('my mother is the most imortant person in the world for me');
};
// mother();

// একটা Function Expression বানা যা ৩টা number receive করে তাদের average return করবে।
const avg = (a, b, c) => {
  let sum = a + b + c;
  let average = sum / 3;

  console.log('sum:', sum);

  return average;
};

console.log('average:', avg(10, 20, 30));

// একটা Function Expression বানা যা number even হলে: even and odd hole odd
const numberChecking = num => {
  if (num % 2 === 0) {
    console.log('this is even number', num);
  } else {
    console.log('this is odd number', num);
  }
};
numberChecking(12);

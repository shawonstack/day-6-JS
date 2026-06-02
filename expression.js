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

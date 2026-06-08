// scope releted

function room() {
  let name = 'shawon';
  console.log(name);
}
// room();
function calculateSalary() {
  let salary = 40000;
  let bonus;
  console.log(salary);
}
// calculateSalary();
let name = 'Global';

function show() {
  let name = 'Local';

  console.log(name);
}

// show();
function outer() {
  let message = 'hello';
  function inner() {
    console.log(message);
  }
  inner();
}
outer();
function creaatUser() {
  let role = 'admin';
  function getRole() {
    return role;
  }
  return getRole;
}

console.log(creaatUser());

function createUser() {
  let role = 'Admin';

  function getRole() {
    return role;
  }

  return getRole();
}

console.log(createUser());
let x = 10;

function test() {
  console.log(x);
}

test();
let company = 'Apple';

function outer() {
  let department = 'iOS';

  function inner() {
    console.log(company);
    console.log(department);
  }

  inner();
}

outer();

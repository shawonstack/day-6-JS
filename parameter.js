function orderFood(foodName) {
  console.log(`Preparing ${foodName}`);
}
// multiple perameter
function userInfo(name, age, city) {
  console.log(name);
  console.log(age);
  console.log(city);
}
// argument order maters
function userInfo(name, age) {
  console.log(name, age);
}

userInfo(22, 'Blood');

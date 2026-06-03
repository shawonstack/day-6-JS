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

// userInfo(22, 'Blood');
//  enginner q
function login(email, password) {
  console.log(email);
  console.log(password);
}
function login(email, password) {
  console.log(email);
  console.log(password);
}

const product = () => {
  console.log('apple brand');
};
// product();
function orderFood(food) {
  console.log(`prepering ${food}`);
}
// orderFood('pizza');

function information(country, city, area) {
  console.log(country);
  console.log(city);
  console.log(area);
}
// information('bangladesh', 'dhaka', 'mirpur');
function addToCart(productID, item) {
  console.log(productID);
  console.log(item);
}
addToCart(12, 3);

function login(email, password) {
  console.log('user email is:', email);
  console.log('user password is:', password);
}
login('shawon934764@gmail.com', 'shawn123');

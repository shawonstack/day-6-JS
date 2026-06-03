function find(name = 'shawon') {
  console.log(`hello ${name}`);
}

function movie(language = 'english') {
  console.log(`playing movie is ${language} language`);
}
// ------------------
function greet(name = 'Guest') {
  console.log(name);
}

greet(undefined);
function createUser(name, username = name) {
  console.log(username);
}

createUser('blood');

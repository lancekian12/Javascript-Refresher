var name = "Max";
var age = 29;
var hasHobbies = true;

function summarize(userName, userAge, userHasHobby) {
  return `Name is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobby}`;
}

console.log(summarize("kian", 22, "gym"));
console.log(summarize(name, age, hasHobbies));

console.log(name);

// const name = "Max";
// var age = 29;
// const hasHobbies = true;

// age = 30;

// const summarize = (userName, userAge, userHasHobby) => {
//   return `Name is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobby}`;
// };

// const add = (a, b) => a + b;
// console.log(add(1, 2));

// const addOne = (a) => a + 1;

// console.log(addOne(1));

// const addRandom = () => 1 + 2;
// console.log(addRandom());

// console.log(summarize("kian", 22, "gym"));
// console.log(summarize(name, age, hasHobbies));

// console.log(name);

// const person = {
//   name: "lance kian",
//   age: 29,
//   greet() {
//     console.log("Hi, I am " + this.name);
//   },
// };

// console.log(person.greet());

const hobbies = ["Sports", "Cooking"];

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(
  hobbies.map((hobby) => {
    return "hobby: " + hobby;
  })
);
console.log(hobbies);

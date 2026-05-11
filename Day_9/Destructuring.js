function welcome(name = "Guest") {
  // default params
  console.log(`Welcome ${name}!`);
}

welcome("Asad");
welcome("Tabish");
welcome("Ibrahim");
welcome("Ejaz");
welcome();

const nums = [1, 2, 3, 4, 5]; // spread operator
const newNums = [...nums, 6, 7, 8];
console.log(newNums);

const obj = { name: "Asad" };
const updatedObj = { ...obj, age: 23 };
console.log(updatedObj);

const cal = {
  // rest operator
  sum: (...nums) => nums.reduce((a, b) => a + b, 0), // rest parameters
};

console.log(cal.sum(1, 2, 43, 4));

// destructuring

const [first, second, third, fourth] = ["Asad", "Tabish", "Ibrahim", "Ejaz"];

const [one, two, ...three] = [1, 3, 5, 6, 7];

console.log(first, second, third, fourth);
console.log(one, two, three);

const { name, age } = { name: "Asad", age: 23 };
console.log(name, age);

// DESCRIPTION:

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// SOLUTION:

function problem(x) {
  return typeof x === "number" ? x * 50 + 6 : "Error";
}

console.log(problem(1));
console.log(problem("hello"));

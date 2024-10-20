// DESCRIPTION:

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// SOLUTION:

function findAverage(array) {
  function findAverage(array) {
    if (array.length === 0) {
      return 0;
    }
    let sum = array.reduce((x, n) => x + n, 0);
    return sum / array.length;
  }
}

console.log(findAverage([1, 2, 3]));

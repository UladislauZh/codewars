// DESCRIPTION:

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// SOLUTION:

function positiveSum(arr) {
  let search = arr.filter((x) => x > 0);
  let n = 0;
  let sum = search.reduce((x, n) => x + n, 0);
  return sum;
}
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, 2, 3, 4, -5]));
console.log(positiveSum([]));

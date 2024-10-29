// DESCRIPTION:

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// SOLUTION:

function isPalindrome(x) {
  let str = x.toLowerCase();
  return str === str.split("").reverse().join("") ? true : false;
}

console.log(isPalindrome("aba"));
console.log(isPalindrome("hello"));

// DESCRIPTION:

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

// SOLUTION:

function position(letter) {
  return "Position of alphabet: " + String(letter.charCodeAt() - 96);
}

console.log(position("e"));

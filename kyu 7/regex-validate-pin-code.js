// DESCRIPTION:

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// SOLUTION:

function validatePIN(pin) {
  let i = pin.length;

  if (i != 4 && i != 6) {
    return false;
  }

  while (i--) {
    if (pin[i] < "0" || pin[i] > "9") {
      return false;
    }
  }

  return true;
}

console.log(validatePIN("1234"));

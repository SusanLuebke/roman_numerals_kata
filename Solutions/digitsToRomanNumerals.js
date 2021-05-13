
function digitsToRomanNumerals(num) {
  const romanMap = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  let romanNumeral = "";

  // this checks for edge cases based on brief
  if (num <= 0 || num > 3000) {
    return null;
  }

  // this reverses the keys that in JS come in sorted low to high; instead need high to low
  var keys = Object.keys(romanMap);
  keys = keys.reverse();

  // looping through num and converting to RN
  for (let i = 0; i < keys.length; i++) {
    if (num === Number(keys[i])) {
      romanNumeral = romanMap[keys[i]];
      return romanNumeral;
    } else {
      // this takes num and first divides by 1000; ex num is 2050/1000 so a = 2, since > than 0, add the letter the loop through 2x
      let a = Math.floor(num / Number(keys[i]));
      if (a >= 0) {
        for (let j = 0; j < a; j++) {
          romanNumeral += romanMap[keys[j]];
        }
      }
      // modulo, keeps on looping through as long as there is a divisible remainder
      num = num % Number(keys[i]);
    }
  }
  return romanNumeral;
}

// Need this for VSC, not repl.it
module.exports = {
  digitsToRomanNumerals,
};

// Part I
// 1 to 3000
// 1 --> I
// 10 --> X
// 7 --> VII

// start with biggest number, as that will weed out the vast majority
// we need to have the numbers big to little so Object.entries doesn't work as it isn't gauranteed

// Need to test in repl.it
// console.log("Digit to Roman numerals: "+ digitsToRomanNumerals(5));

// Original version in having to reverse and really it was about two arrays to avoid keys/values


// function digitsToRomanNumerals(num) {
//   if(num <= 0 || num > 3000) {
//      return null;
//   }

//   var result = '';
//   var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//   var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
//   for (var x = 0; x < romans.length; x++) {
//     while (num >= numbers[x]) {
//       result += romans[x];
//       num -= numbers[x];
//     }
//   }
//   return result;
// }

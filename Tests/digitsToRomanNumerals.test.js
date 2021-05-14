const { digitsToRomanNumerals } = require("../Solutions/digitsToRomanNumerals");

describe("digitsToRomanNumerals", () => {
  test("returns a null if number is <= 0 or <= 3000", () => {
    expect(digitsToRomanNumerals(0)).toBe(null);
    expect(digitsToRomanNumerals(3001)).toBe(null);
    expect(digitsToRomanNumerals(10000)).toBe(null);
  });

  test("returns a Roman numeral", () => {
    expect(digitsToRomanNumerals(1)).toBe("I");
    expect(digitsToRomanNumerals(5)).toBe("V");
    expect(digitsToRomanNumerals(10)).toBe("X");
  });
});

test("returns a Roman numeral with doubles and triples", () => {
  expect(digitsToRomanNumerals(20)).toBe("XX");
  expect(digitsToRomanNumerals(3)).toBe("III");
  expect(digitsToRomanNumerals(30)).toBe("XXX");
});

test("returns a Roman numeral with I, V, X combinations", () => {
  expect(digitsToRomanNumerals(4)).toBe("IV");
  expect(digitsToRomanNumerals(9)).toBe("IX");
  expect(digitsToRomanNumerals(11)).toBe("XI");
});

test("returns a Roman numeral with longer outputs", () => {
  expect(digitsToRomanNumerals(2050)).toBe("MML");
  expect(digitsToRomanNumerals(1999)).toBe("MCMXCIX");
  expect(digitsToRomanNumerals(813)).toBe("DCCCXIII");
});

test("returns a Roman numeral with less prevelant roman numerals", () => {
  expect(digitsToRomanNumerals(90)).toBe("XC");
  expect(digitsToRomanNumerals(111)).toBe("CXI");
  expect(digitsToRomanNumerals(2222)).toBe("MMCCXXII");
});

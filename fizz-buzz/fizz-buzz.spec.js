/**
 *
 * What is FizzBuzz?
 *
 * FizzBuzz is a simple game where you count up from 1 to a given number. The game has the following rules:
 *
 * 1. If the number is not a multiple of 3 or 5, you say the number.
 * 2. If the number is a multiple of 3, you say "Fizz" instead of the number.
 * 3. If the number is a multiple of 5, you say "Buzz" instead of the number.
 * 4. If the number is a multiple of both 3 and 5, you say "FizzBuzz" instead of the number.
 *
 * 5. Extension: if you want to try something more challenging.
 * If the number contains 3, you say "Fizz" instead of the number.
 * If the number contains 5, you say "Buzz" instead of the number.
 * If the number is a multiple of 3 or 5 but also contains 3 or 5, you must combine the rules.
 *    For example 15 is a multiple of 3 and 5, so you say "FizzBuzz" but also contains a 5 so becomes "FizzBuzzBuzz".
 *
 */
class FizzBuzz {
  static convert(value) {
    if (value === 0) return "0";

    let returnValue = "";
    if (this.isMultipleOf3(value)) returnValue = "Fizz";
    if (this.isMultipleOf5(value)) returnValue = "Buzz";
    if (this.isMultipleOf3And5(value)) returnValue = "FizzBuzz";
    if (this.contains3(value)) returnValue += "Fizz";
    if (this.contains5(value)) returnValue += "Buzz";

    return returnValue ? returnValue : value.toString();
  }
  catch(e) {
    return "Invalid"
  }

  static isMultipleOf3(value) {
    if (value%3 === 0) return true;
  }

  static isMultipleOf5(value) {
    if (value%5 === 0) return true;
  }

  static isMultipleOf3And5(value) {
    if (value%3 === 0 && value%5 === 0) return true;
  }

  static contains3(value) {
    if (value.toString().includes("3")) return true;
  }

  static contains5(value) {
    if (value.toString().includes("5")) return true;
  }

  // static multiple(value) {
  //   if (value%3 === 0 && value%5 === 0) return "FizzBuzz";
  //   else if (value%3 === 0) return "Fizz";
  //   else if (value%5 === 0) return "Buzz";
  //   else return "";
  // }

  // static contains(value, currentString) {
  //   if (value.toString().includes("3")) currentString += "Fizz";
  //   if (value.toString().includes("5")) currentString += "Buzz";
  //   return currentString;
  // }
}

describe("FizzBuzz", () => {
  [
    { value: "Invalid", expectation: "Invalid"},
    { value: 0, expectation: "0"},
    { value: 1, expectation: "1" },
    { value: 2, expectation: "2" },
    { value: 4, expectation: "4" },
    { value: 7, expectation: "7" },
    { value: 8, expectation: "8" },
    { value: 11, expectation: "11" },
    { value: 3, expectation: "FizzFizz" },
    { value: 6, expectation: "Fizz" },
    { value: 9, expectation: "Fizz" },
    { value: 12, expectation: "Fizz" },
    { value: 10, expectation: "Buzz" },
    { value: 15, expectation: "FizzBuzzBuzz" },
    { value: 13, expectation: "Fizz" },
    { value: 23, expectation: "Fizz" },
    { value: 30, expectation: "FizzBuzzFizz"},
    { value: 55, expectation: "BuzzBuzz"},
    { value: 135, expectation: "FizzBuzzFizzBuzz"}
  ].forEach(({ value, expectation }) => {
    it(`should convert ${value} to ${expectation}`, () => {
      expect(FizzBuzz.convert(value)).toBe(expectation);
    });
  });
});

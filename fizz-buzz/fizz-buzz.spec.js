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
    if (value === 3) return "Fizz";

    return value.toString();
  }
}

describe("FizzBuzz", () => {
  [
    { value: 1, expectation: "1" },
    { value: 2, expectation: "2" },
    { value: 4, expectation: "4" },
    { value: 3, expectation: "Fizz" },
    { value: 6, expectation: "Fizz" },
  ].forEach(({ value, expectation }) => {
    it(`should convert ${value} to ${expectation}`, () => {
      expect(FizzBuzz.convert(value)).toBe(expectation);
    });
  });
});

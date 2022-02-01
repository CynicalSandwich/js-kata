import fizzBuzz from '../src/fizzBuzz';

describe('fizzBuzz tests', function () {
    it('3 should return "Fizz"', () => {
        expect(fizzBuzz(3)).toStrictEqual("Fizz");
    });
    it('5 should return "Buzz"', () => {
        expect(fizzBuzz(5)).toStrictEqual("Buzz");
    });
    it('15 should return "FizzBuzz"', () => {
        expect(fizzBuzz(15)).toStrictEqual("FizzBuzz");
    });
    it('1 should return 1', () => {
        expect(fizzBuzz(1)).toStrictEqual(1);
    });
    it('2 should return 2', () => {
        expect(fizzBuzz(2)).toStrictEqual(2);
    });
    it('83 should return 83', () => {
        expect(fizzBuzz(83)).toStrictEqual(83);
    });
    it('68955 should return "FizzBuzz"', () => {
        expect(fizzBuzz(68955)).toStrictEqual("FizzBuzz");
    });
})
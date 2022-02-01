import calculator from '../src/simpleCalculator1';

describe('simpleCalculator1 tests', function () {
    it('should return the result of "1 + 2"', () => {
        expect(calculator("1 + 2")).toStrictEqual(3);
    });
    it('should return the result "5 - 5"', () => {
        expect(calculator("5 - 5")).toStrictEqual(0);
    });
    it('should return the result of "6 * 3"', () => {
        expect(calculator("6 * 3")).toStrictEqual(18);
    });
    it('should return the result of "9 / 3"', () => {
        expect(calculator("9 / 3")).toStrictEqual(3);
    });
    it('should return the result of "54920 * 30592"', () => {
        expect(calculator("54920 * 30592")).toStrictEqual(1680112640);
    });
})
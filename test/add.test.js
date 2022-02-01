import add from '../src/add';

describe('adder tests', function () {
    it('should return the sum of 1 and 2', () => {
        expect(add(1, 2)).toStrictEqual(3);
    });
    it('should return the sum 5 and 5', () => {
        expect(add(5, 5)).toStrictEqual(10);
    });
    it('should return the sum of -1 and -2', () => {
        expect(add(-1, -2)).toStrictEqual(-3);
    });
    it('should return the sum of 0 and 0', () => {
        expect(add(0, 0)).toStrictEqual(0);
    });
    it('should return the sum of 54920 and 30592', () => {
        expect(add(54920, 30592)).toStrictEqual(85512);
    });
})
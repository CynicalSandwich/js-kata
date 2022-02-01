import multiply from '../src/multiply';

describe('multiply tests', function () {
    it('should return the product of 1 and 2', () => {
        expect(multiply(1, 2)).toStrictEqual(2);
    });
    it('should return the product 5 and 5', () => {
        expect(multiply(5, 5)).toStrictEqual(25);
    });
    it('should return the product of -1 and -2', () => {
        expect(multiply(-1, -2)).toStrictEqual(2);
    });
    it('should return the product of 0 and 0', () => {
        expect(multiply(0, 0)).toStrictEqual(0);
    });
    it('should return the product of 54920 and 30592', () => {
        expect(multiply(54920, 30592)).toStrictEqual(1680112640);
    });
})
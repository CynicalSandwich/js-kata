import subtract from '../src/subtract';

describe('subtract tests', function () {
    it('should return the difference of 1 and 2', () => {
        expect(subtract(1, 2)).toStrictEqual(-1);
    });
    it('should return the product 5 and 5', () => {
        expect(subtract(5, 5)).toStrictEqual(0);
    });
    it('should return the product of -1 and -2', () => {
        expect(subtract(-1, -2)).toStrictEqual(1);
    });
    it('should return the product of 0 and 0', () => {
        expect(subtract(0, 0)).toStrictEqual(0);
    });
    it('should return the product of 54920 and 30592', () => {
        expect(subtract(54920, 30592)).toStrictEqual(24328);
    });
})
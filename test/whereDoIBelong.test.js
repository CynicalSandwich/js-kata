import getIndexToIns from '../src/whereDoIBelong';

describe('whereDoIBelong tests', function () {
    it('should return 3', () => {
        expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toStrictEqual(3);
    });
    it('should return 2', () => {
        expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toStrictEqual(2);
    });
    it('should return 1', () => {
        expect(getIndexToIns([40, 60], 50)).toStrictEqual(1);
    });
    it('should return 0', () => {
        expect(getIndexToIns([3, 10, 5], 3)).toStrictEqual(0);
    });
    it('should also return 2', () => {
        expect(getIndexToIns([5, 3, 20, 3], 5)).toStrictEqual(2);
    });
    it('should return 2 again', () => {
        expect(getIndexToIns([2, 20, 10], 19)).toStrictEqual(2);
    });
})
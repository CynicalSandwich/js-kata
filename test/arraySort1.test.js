import sort from '../src/arraySort1';

describe('arraySort1 tests', function () {
    it('should return [1,2,3]', () => {
        expect(sort([3, 2, 1])).toStrictEqual([1, 2, 3]);
    });
    it('should return [1,2,3,4,5]', () => {
        expect(sort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
    });
    it('should return [1,2,3,4,5,6,7,8,9,10]', () => {
        expect(sort([3, 5, 6, 2, 1, 9, 10, 7, 4, 8])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('should return [7,8,9,10,20,40]', () => {
        expect(sort([20, 40, 7, 8, 10, 9])).toStrictEqual([7, 8, 9, 10, 20, 40]);
    })
})
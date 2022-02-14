import romanNumeral from '../src/romanNumerals';

describe('romanNumeral function', function () {
    it('should return "I" when passed 1', () => {
        expect(romanNumeral(1)).toStrictEqual("I");
    });
    it('should retun "II" when passed 2', () => {
        expect(romanNumeral(2)).toStrictEqual("II");
    })
})
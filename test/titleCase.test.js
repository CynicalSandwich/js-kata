import titleCase from '../src/titleCase';

describe('titleCase tests', function () {
    it(`titleCase("I'm a little tea pot") should return a string.`, () => {
        expect(typeof (titleCase("I'm a little tea pot"))).toBe('string');
    });
    it(`titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot`, () => {
        expect(titleCase("I'm a little tea pot")).toStrictEqual("I'm A Little Tea Pot");
    });
})
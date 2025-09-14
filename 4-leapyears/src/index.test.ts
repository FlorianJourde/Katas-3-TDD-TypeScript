import {isLeapYears} from "./index"

describe('LeapYears', () => {
    it('throw error if value provided is not a number', () => {
        const expected: any = [];

        expect(() => isLeapYears(expected)).toThrow('Value must be an integer.')
    })

    it('return true if 4 provided', () => {
        const expected: number = 4;

        const result: boolean = isLeapYears(expected);

        expect(result).toEqual(true);
    })

    it('return true if 4 provided', () => {
        const expected: number = 4;

        const result: boolean = isLeapYears(expected);

        expect(result).toEqual(true);
    })

    it('return false if 5 provided', () => {
        const expected: number = 5;

        const result: boolean = isLeapYears(expected);

        expect(result).toEqual(false);
    })

    it('return false if 100 provided', () => {
        const expected: number = 100;

        const result: boolean = isLeapYears(expected);

        expect(result).toEqual(false);
    })

    it('return true if 400 provided', () => {
        const expected: number = 400;

        const result: boolean = isLeapYears(expected);

        expect(result).toEqual(true);
    })

    it('return true if 2008 provided', () => {
        const expected: number = 2008;

        const result: boolean = isLeapYears(expected);

        expect(result).toEqual(true);
    })

    it('return true if 2100 provided', () => {
        const expected: number = 2100;

        const result: boolean = isLeapYears(expected);

        expect(result).toEqual(false);
    })

    it('return true if 2009 provided', () => {
        const expected: number = 2009;

        const result: boolean = isLeapYears(expected);

        expect(result).toEqual(false);
    })
})

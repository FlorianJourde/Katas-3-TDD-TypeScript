import {PrimeFactors} from "./index"

describe("PrimeFactors", () => {
    it("throw error if no value provided", () => {
        const value = undefined;

        expect(() => PrimeFactors.factorsOf(value!)).toThrow('Value must be an integer.');
    })

    it("throw error if float value provided", () => {
        const value = 5.6;

        expect(() => PrimeFactors.factorsOf(value)).toThrow('Value must be an integer.');
    })

    it('returns [] when 0 provided', () => {
        const value = 0;

        expect(PrimeFactors.factorsOf(value)).toEqual([]);
    })

    it('returns [2] when 2 provided', () => {
        const value = 2;

        expect(PrimeFactors.factorsOf(value)).toEqual([2]);
    })

    it('returns [2, 2] when 4 provided', () => {
        const value = 4;

        expect(PrimeFactors.factorsOf(value)).toEqual([2, 2]);
    })

    it('returns [2, 2, 2] when 8 provided', () => {
        const value = 8;

        expect(PrimeFactors.factorsOf(value)).toEqual([2, 2, 2]);
    })

    it('returns [3, 3] when 9 provided', () => {
        const value = 9;

        expect(PrimeFactors.factorsOf(value)).toEqual([3, 3]);
    })
})

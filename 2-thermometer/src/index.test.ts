import {thermometer} from "./index"

describe('Thermometer', () => {
    it('returns 0 if empty array provided', () => {
        // Arrange
        const values: number[] = [];

        // Act
        const result = thermometer(values);

        // Assert
        expect(result).toEqual(0);
    })

    it('returns 0 if no array provided', () => {
        const values: undefined = undefined;

        const result = thermometer(values);

        expect(result).toEqual(0);
    })

    it('throw error if more than 10000 values provided', () => {
        const values: number[] = new Array(10001);

        expect(() => thermometer(values)).toThrow('Too many values provided.')
    })

    it('returns 1 is [2, 9, 1] provided', () => {
        const values = [2, 9, 1];

        const result = thermometer(values)

        expect(result).toEqual(1);
    })

    it('returns 1 is [1, 9, 2] provided', () => {
        const values = [1, 9, 2];

        const result = thermometer(values)

        expect(result).toEqual(1);
    })

    it('returns -1 is [2, 9, -1] provided', () => {
        const values = [2, 9, -1];

        const result = thermometer(values)

        expect(result).toEqual(-1);
    })

    it('returns -2 is [2, 9, -2, -3] provided', () => {
        const values = [2, 9, -2, -3];

        const result = thermometer(values)

        expect(result).toEqual(2);
    })

    it('returns 2 is [-2, 9, 2, -3] provided', () => {
        const values = [-2, 9, 2, -3];

        const result = thermometer(values)

        expect(result).toEqual(2);
    })

    it('returns 1 is [9, 2, -3, 10, -2, 24, 21, 19, -4, 1, -5, -16] provided', () => {
        const values = [9, 2, -3, 10, -2, 24, 21, 19, -4, 1, -5, -16];

        const result = thermometer(values)

        expect(result).toEqual(1);
    })

    it('returns 5 is [-5, 5] provided', () => {
        const values = [-5, 5];

        const result = thermometer(values)

        expect(result).toEqual(5);
    })

    it('returns 5 is [5, -5] provided', () => {
        const values = [-5, 5];

        const result = thermometer(values)

        expect(result).toEqual(5);
    })
})

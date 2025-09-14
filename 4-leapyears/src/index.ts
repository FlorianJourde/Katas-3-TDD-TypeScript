export function isLeapYears(year: number): boolean {
    if (!Number.isInteger(year)) throw 'Value must be an integer.'

    const isDivisibleByFour = year % 4 === 0;
    const isDivisibleByOneHundred = year % 100 === 0;
    const isDivisibleByFourHundreds = year % 400 === 0;

    if (isDivisibleByOneHundred && isDivisibleByFour) return isDivisibleByFourHundreds;

    return isDivisibleByFour;
}

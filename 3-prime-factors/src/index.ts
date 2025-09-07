export class PrimeFactors {
    public static factorsOf(number: number): Array<number> {
        if (!Number.isInteger(number)) throw 'Value must be an integer.';

        let factors: Array<number> = [];
        let divider: number = 2;

        while (number > 1) {
            if (number % divider === 0) {
                number = number / divider;
                factors.push(divider);
                divider = 2;
            } else if (divider < number) {
                divider++;
            } else {
                number--;
                divider = 2;
            }
        }

        return factors;
    }
}


export function thermometer(temperatures: number[] | undefined): number {
    const defaultTemperature = 0;

    if (!Array.isArray(temperatures)) return defaultTemperature;
    if (temperatures?.length > 10000) throw 'Too many values provided.';

    let closestToZero: number | undefined;

    for (const temperature of temperatures) {
        if (closestToZero === undefined) closestToZero = temperature;
        if (Math.abs(temperature) === Math.abs(closestToZero)) closestToZero = Math.abs(temperature);
        if (Math.abs(temperature) < Math.abs(closestToZero)) closestToZero = temperature;
    }

    return closestToZero === undefined ? 0 : closestToZero;
}


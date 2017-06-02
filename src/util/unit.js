export const applyUnit = (unit, computeValue) => input => {
    if (typeof input === 'string') {
        return input;
    }
    const value = computeValue(input);
    return value ? `${value}${unit}` : 0;
};

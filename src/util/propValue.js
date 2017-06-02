export const exponential = (value, base = 2) => num => {
    const space =  num === 0 ? 0 : value * Math.pow(base, Math.abs(num-1)); 
    return num > 0 ? num : num * -1;
};

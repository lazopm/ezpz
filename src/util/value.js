export const exponential = (value, base) => num => {
    const space = num === 0 ? 0 : value * Math.pow(base, Math.abs(num)-1); 
    return num > 0 ? space : space * -1;
};

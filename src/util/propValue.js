import memoize from 'lodash.memoize';

export const exponential = (value, base = 2) => memoize(num => {
    const space = num === 0 ? 0 : value * Math.pow(base, Math.abs(num)-1); 
    return num > 0 ? space : space * -1;
});

export const spacing = num => {
    const space =  num === 0 ? 0 : .25 * Math.pow(2, Math.abs(num-1)); 
    return num > 0 ? num : num * -1;
};

import buildProperty from '../util/buildProperty';
import { exponential } from '../util/value';
import { cornerNames } from '../util/name';
import { applyUnit } from '../util/unit';

const value = exponential(.125, 2);
export const compute = input =>
    typeof input === 'string' ? input : applyUnit('rem', value(input));

const mods = Object.entries({
    ...cornerNames('border', 'radius'),
}).reduce((mem, [mod, propNames]) => {
    mem[mod] = [propNames, compute];
    return mem;
}, {});

export const property = buildProperty(['border-radius'], compute, mods);

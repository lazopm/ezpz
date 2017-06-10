import buildProperty from '../util/buildProperty';
import { exponential } from '../util/value';
import { edgeNames } from '../util/name';
import { applyUnit } from '../util/unit';

const value = exponential(.25, 2);

export const compute = input =>
    typeof input === 'string' ? input : applyUnit('rem', value(input));

const mods = Object.entries({
    ...edgeNames('padding'),
}).reduce((mem, [mod, propNames]) => {
    mem[mod] = [propNames, compute];
    return mem;
}, {});

export const property = buildProperty(['padding'], compute, mods);

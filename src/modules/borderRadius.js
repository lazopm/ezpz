import buildProperty from '../util/buildProperty';
import { exponential } from '../util/value';
import { cornerNames } from '../util/name';
import { applyUnit } from '../util/unit';

const compute = applyUnit('rem', exponential(.125, 2));

const mods = Object.entries({
    ...cornerNames('border', 'radius'),
}).reduce((mem, [mod, propNames]) => {
    mem[mod] = buildProperty(propNames, compute);
    return mem;
}, {});

const borderRadius = buildProperty(['border-radius'], compute, mods);

export default borderRadius;

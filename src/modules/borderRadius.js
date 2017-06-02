import buildProperty from '../util/buildProperty';
import { exponential } from '../util/propValue';
import { cornerNames } from '../util/propName';
import { applyUnit } from '../util/unit';

const compute = applyUnit('rem', exponential(.125));

const mods = Object.entries({
    ...cornerNames('border', 'radius'),
}).reduce((mem, [mod, propNames]) => {
    mem[mod] = buildProperty(propNames, compute);
    return mem;
}, {});

const borderRadius = buildProperty(['border-radius'], compute, mods);

export default borderRadius;

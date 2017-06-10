import buildProperty from '../util/buildProperty';
import { exponential } from '../util/value';
import { edgeNames } from '../util/name';
import { applyUnit } from '../util/unit';

const value = exponential(.125, 2);
const compute = input =>
    typeof input === 'string' ? input : applyUnit('rem', value(input));

const mods = Object.entries({
    ...edgeNames('padding'),
}).reduce((mem, [mod, propNames]) => {
    mem[mod] = buildProperty(propNames, compute);
    return mem;
}, {});

const padding = buildProperty(['padding'], compute, mods);

export default padding;

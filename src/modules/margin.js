import buildProperty from '../util/buildProperty';
import { exponential } from '../util/propValue';
import { edgeNames } from '../util/propName';
import { applyUnit } from '../util/unit';

const compute = applyUnit('rem', exponential(.25));

const mods = Object.entries({
    ...edgeNames('margin'),
}).reduce((mem, [mod, propNames]) => {
    mem[mod] = buildProperty(propNames, compute);
    return mem;
}, {});

const margin = buildProperty(['margin'], compute, mods);

export default margin;

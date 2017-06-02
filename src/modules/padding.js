import buildProperty from '../util/buildProperty';
import { spacing } from '../util/propValue';
import { edgeNames } from '../util/propName';
import { applyUnit } from '../util/unit';

const compute = applyUnit('rem', spacing);

const mods = Object.entries({
    ...edgeNames('padding'),
}).reduce((mem, [mod, propNames]) => {
    mem[mod] = buildProperty(propNames, compute);
    return mem;
}, {});

const padding = buildProperty(['padding'], compute, mods);

export default padding;

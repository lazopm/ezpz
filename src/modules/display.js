import buildProperty from '../util/buildProperty';

const valueMap = {
    block: 'block', 
    flex: 'flex',
    inlineBlock: 'inline-block',
};

const mods = Object.entries(valueMap).reduce((mem, [mod, value]) => {
    mem[mod] = buildProperty(['display'], value);
    return mem;
}, {});

const display = buildProperty(['display'], null, mods);

export default display;

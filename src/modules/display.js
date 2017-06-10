import buildProperty from '../util/buildProperty';

export const valueMap = {
    block: 'block', 
    flex: 'flex',
    inlineBlock: 'inline-block',
};

const mods = Object.entries(valueMap).reduce((mem, [mod, value]) => {
    mem[mod] = [['display'], value]
    return mem;
}, {});

export const property = buildProperty(['display'], null, mods);

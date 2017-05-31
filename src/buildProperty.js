import aphrodite from 'aphrodite';
const { StyleSheet } = aphrodite;

const spice = (prop, mods) => {
    for (let [name, mod] of Object.entries(mods)) {
        Object.defineProperty(prop, name, {
            get: () => value => spice(getAphroditeDefinition({
                ...prop._definition,
                ...mod(value)._definition,
            }), mods)
        })
    };
    return prop;
}

const buildDefinition = (value, propNames, toValue) => propNames.reduce((mem, name) => {
    mem[name] = toValue(value);
    return mem;
}, {});

const getAphroditeDefinition = def => StyleSheet.create({peitho: def}).peitho;

const buildProperty = (propNames, toValue, mods = {}) => {
    let ss;
    const func = value => {
        const css = buildDefinition(value, propNames, toValue);
        const ss = getAphroditeDefinition(css);
        return spice(ss, mods);
    };
    return spice(func, mods);
};

export default buildProperty;

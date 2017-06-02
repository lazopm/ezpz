import aphrodite from 'aphrodite';
const { StyleSheet } = aphrodite;

const buildDefinition = stack => stack.reduce((mem, [propNames, toValue, value]) => {
    const computed = toValue(value);
    propNames.forEach(name => mem[name] = computed);
    return mem;
}, {});

const defineModProps = (obj, mods, stack) => {
    //obj._stack = stack;
    for (let [name, property] of Object.entries(mods)) {
        Object.defineProperty(obj, name, {
            get: () => value => {
                property(value, stack);
                return obj;
            }
        });
    };

    let ss;
    Object.defineProperty(obj, '_definition', {
        get: () => {
            console.log('definition!')
            if (!ss) { ss = StyleSheet.create({ peitho: buildDefinition(stack)}) }
            return ss.peitho._definition;
        }
    })
    Object.defineProperty(obj, '_name', {
        get: () => {
            console.log('name!')
            if (!ss) { ss = StyleSheet.create({ peitho: buildDefinition(stack)}) }
            return ss.peitho._name;
        }
    })
    return obj;
}

const buildProperty = (propNames, toValue, mods = {}) => {
    const property = (value, preStack) => {
        const item = [propNames, toValue, value];
        return preStack ? preStack.push(item) : defineModProps({}, mods, [item]);
    };
    return defineModProps(property, mods, []);
};

export default buildProperty;

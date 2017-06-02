const buildDefinition = (propNames, compute, args) => {
    return propNames.reduce((mem, name) => {
        mem[name] = compute(...args);
        return mem;
    }, {});
};

const GET_CONFIG = Symbol();
const proxyMods = (mods, compute, def = {}) => {
    return new Proxy(def, {
        get: (target, prop, receiver) => {
            if (prop in mods) {
                return (...args) => {
                    const [propNames, modCompute = compute] = mods[prop][GET_CONFIG];
                    const newDef = buildDefinition(propNames, modCompute, args);
                    Object.assign(target, newDef); 
                    return receiver;
                }
            }
            else {
                return target[prop];
            }
        },
    });
};

const buildProperty = (propNames, compute, mods = {}) => new Proxy(new Function(), {
    apply: (target, _, args) => {
        const initialDef = buildDefinition(propNames, compute, args);
        return proxyMods(mods, compute, initialDef);
    },
    get: (target, prop) => {
        if (prop === GET_CONFIG) {
            return [propNames, compute]
        }
        else if (prop in mods) {
            return proxyMods(mods, compute)[prop];
        }
        return target[prop];
    },
});

export default buildProperty;

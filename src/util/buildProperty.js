import memoize from 'lodash.memoize';

const buildDefinition = memoize((value, ...propNames) =>
    propNames.reduce((mem, name) => {
        mem[name] = value; 
        return mem;
    }, {})
);

const GET_CONFIG = Symbol();
const proxyMods = (mods, compute, def = {}) => {
    return new Proxy(def, {
        get: (target, prop, receiver) => {
            if (prop in mods) {
				const [propNames, modCompute = compute] = mods[prop][GET_CONFIG];
				if (typeof compute === 'function') {
					return (...args) => {
						const newDef = buildDefinition(modCompute(...args), ...propNames);
						Object.assign(target, newDef); 
						return receiver;
					}
                }
				const newDef = buildDefinition(modCompute, ...propNames);
				Object.assign(target, newDef); 
				return receiver
				
            }
            else {
                return target[prop];
            }
        },
    });
};
const buildProperty = (propNames, compute, mods = {}) => new Proxy(new Function(), {
    apply: (target, _, args) =>
        proxyMods(mods, compute, buildDefinition(compute(...args), ...propNames)),
    get: (target, prop) =>
        prop === GET_CONFIG ?
            [propNames, compute]
        : prop in mods ?
            proxyMods(mods, compute)[prop]
        : target[prop]
});

export default buildProperty;

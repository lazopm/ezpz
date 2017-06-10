const buildDefinition = (value, ...propNames) => propNames.reduce((mem, name) => {
    mem[name] = value; 
    return mem;
}, {})

const GET_CONFIG = Symbol();
const proxyMods = (mods, computeFallback, def = {}) => {
    return new Proxy(def, {
        get: (target, prop, receiver) => {
            if (prop in mods) {
				const [propNames, compute] = mods[prop][GET_CONFIG];
                const modCompute = compute || computeFallback;
				if (typeof modCompute === 'function') {
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

const buildProperty = (propNames, compute, mods = {}) => 
    typeof compute === 'function' ?
        new Proxy(compute, {
            apply: (target, _, args) =>
                proxyMods(mods, compute, buildDefinition(compute(...args), ...propNames)),
            get: (target, prop) => {
                if (prop === GET_CONFIG) {
                    return [propNames, compute];
                }
                else if (prop in mods) {
                    console.log('prop', prop);
                    return proxyMods(mods, compute)[prop];
                }
                return target[prop];
            }
        })
    : proxyMods(mods, compute, buildDefinition(compute, ...propNames));

export default buildProperty;

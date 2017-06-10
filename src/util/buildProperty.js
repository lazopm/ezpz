const definition = (value, ...propNames) => propNames.reduce((mem, name) => {
    mem[name] = value; 
    return mem;
}, {})

const GET_CONFIG = Symbol();
const proxyMods = (mods, def = {}) => {
    return new Proxy(def, {
        get: (target, prop, receiver) => {
            if (prop in mods) {
                const [props, compute] = mods[prop];
				if (typeof compute === 'function') {
					return (...args) => {
						Object.assign(target, definition(compute(...args), ...props));
						return receiver;
					}
                }
				Object.assign(target, definition(compute, ...props));
				return receiver
            }
            return target[prop];
        },
    });
};

const buildProperty = (propNames, compute, mods = {}) => new Proxy(new Function(), {
    apply: (target, _, args) => {
        const def = definition(compute(...args), ...propNames);
        return proxyMods(mods, def);
    },
    get: (target, prop) => proxyMods(mods)[prop]
})
export default buildProperty;

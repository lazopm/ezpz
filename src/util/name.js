const join = (...args) => args.filter(x => x).join('-');
const camelCase = str => str.split('-').map((s, i) =>
    i === 0 ? s : s[0].toUpperCase() + s.slice(1)
).join('');

const edges = ['top', 'bottom', 'left', 'right'];

export const edgeNames = (prop, append) => {
    const names = edges.reduce((mem, edge) => {
        mem[edge] = [join(prop, edge)];
        return mem;
    }, {});
    return Object.assign(names, {
        vertical:   [...names.top, ...names.bottom],
        horizontal: [...names.left, ...names.right],
    });
};

const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
export const cornerNames = (prop, append) => {
    const names = corners.reduce((mem, corner) => {
        mem[camelCase(corner)] = [join(prop, corner, append)];
        return mem;
    }, {});
    return Object.assign(names, { 
        top:    [...names.topLeft, ...names.topRight],
        bottom: [...names.bottomLeft, ...names.bottomRight],
        left:   [...names.topLeft, ...names.bottomLeft],
        right:  [...names.topRight, ...names.bottomRight],
    });
};

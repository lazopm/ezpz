export const edgeNames = name => {
    const names = {
        top: [`${name}-top`],
        bottom: [`${name}-bottom`],
        left: [`${name}-left`],
        right: [`${name}-right`],
    };
    return Object.assign(names, {
        vertical: [...names.top, ...names.bottom],
        horizontal: [...names.left, ...names.right],
    });
};

export const cornerNames = (name, append) => {
    const names = { 
        topLeft: [`${name}-top-left-${append}`],
        topRight: [`${name}-top-right-${append}`],
        bottomLeft: [`${name}-bottom-left-${append}`],
        bottomRight: [`${name}-bottom-right-${append}`],
    };
    return Object.assign(names, { 
        top:    [...names.topLeft, ...names.topRight],
        bottom: [...names.bottomLeft, ...names.bottomRight],
        left:   [...names.topLeft, ...names.bottomLeft],
        right:  [...names.topRight, ...names.bottomRight],
    });
};

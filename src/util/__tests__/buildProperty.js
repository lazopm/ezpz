import buildProperty from '../buildProperty';

const INPUT = Symbol('in');
const OUTPUT = Symbol('out');
const compute = jest.fn(() => OUTPUT); 
const modCompute = jest.fn(() => OUTPUT);

afterEach(() => {
    compute.mockClear();
    modCompute.mockClear();
});

describe('no mods', () => {
    const prop = buildProperty(['a', 'b'], compute);
    test('calls the compute function', () => {
        prop(INPUT);
        expect(compute).toHaveBeenCalledWith(INPUT);
    });
    test('returns the right output', () => {
        const result = prop(INPUT);
        expect(result).toHaveProperty('a', OUTPUT);
        expect(result).toHaveProperty('b', OUTPUT);
    });
});
describe('with mods', () => {
    const prop = buildProperty(['a'], compute, {
        mb: [['b'], OUTPUT],
        mc: [['c'], modCompute],
    });
    test('calls the compute function', () => {
        prop(INPUT);
        expect(compute).toHaveBeenCalledWith(INPUT);
    });
    test('returns the right output', () => {
        expect(prop(INPUT)).toHaveProperty('a', OUTPUT);
    });
    test('mods call their compute function', () => {
        prop.mc(INPUT);
        expect(modCompute).toHaveBeenCalledWith(INPUT);
    });
    test('mod returns the right output', () => {
        expect(prop.mc()).toHaveProperty('c', OUTPUT);
    });
    test('mods accept value as compute', () => {
        expect(prop.mb).toHaveProperty('b', OUTPUT);
    });
    test('mods can be chained', () => {
        const result = prop().mb.mc();
        expect(result).toHaveProperty('a', OUTPUT);
        expect(result).toHaveProperty('b', OUTPUT);
        expect(result).toHaveProperty('c', OUTPUT);
    });
})

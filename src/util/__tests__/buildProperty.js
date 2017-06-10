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
        b: buildProperty(['b'], OUTPUT),
        c: buildProperty(['c'], modCompute),
        d: buildProperty(['d']),
    });
    test('calls the compute function', () => {
        prop(INPUT);
        expect(compute).toHaveBeenCalledWith(INPUT);
    });
    test('returns the right output', () => {
        expect(prop(INPUT)).toHaveProperty('a', OUTPUT);
    });
    test.only('mods inherit compute', () => {
        console.log(prop.d);
        prop.d(INPUT);
        expect(compute).toHaveBeenCalledWith(INPUT);
    });
    test('mods call their compute function', () => {
        prop.c(INPUT);
        expect(modCompute).toHaveBeenCalledWith(INPUT);
    });
    test('mod returns the right output', () => {
        expect(prop.c(INPUT)).toHaveProperty('c', OUTPUT);
    });
    test('mods accept value as compute', () => {
        expect(prop.b).toHaveProperty('b', OUTPUT);
    });
    test('mods can be chained', () => {
        const result = prop().b.c().d();
        expect(result).toHaveProperty('a', OUTPUT);
        expect(result).toHaveProperty('b', OUTPUT);
        expect(result).toHaveProperty('c', OUTPUT);
    });
})

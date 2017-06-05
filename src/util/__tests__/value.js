import { exponential } from '../value';

describe('exponential', () => {
    const base2 = exponential(1, 2);
    const base3 = exponential(1, 3);

    test('0 should be 0', () => {
        expect(base2(0)).toBe(0);
        expect(base3(0)).toBe(0);
    });

    test('base', () => {
        expect(base2(1)).toBe(1);
        expect(base2(3)).toBe(4);
        expect(base3(1)).toBe(1);
        expect(base3(3)).toBe(9);
    });

    test('negative values', () => {
        expect(base2(-1)).toBe(-1);
        expect(base2(-3)).toBe(-4);
    });

    test('undefined value should be NaN', () =>
        expect(isNaN(base2())).toBe(true)
    );
});

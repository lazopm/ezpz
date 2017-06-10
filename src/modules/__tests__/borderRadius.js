import {
    property as borderRadius,
    compute,
} from '../borderRadius';

const v1 = compute(1);

test('can be called with a number', () => {
    expect(borderRadius(1)).toHaveProperty('border-radius', v1);
});
test('can be called with a string', () => {
    expect(borderRadius('a')).toHaveProperty('border-radius', 'a');
});

describe('mods', () => {
    test('corners', () => {
        expect(borderRadius.topLeft(1))
            .toHaveProperty('border-top-left-radius', v1);
        expect(borderRadius.topRight(1))
            .toHaveProperty('border-top-right-radius', v1);
        expect(borderRadius.bottomLeft(1))
            .toHaveProperty('border-bottom-left-radius', v1);
        expect(borderRadius.bottomRight(1))
            .toHaveProperty('border-bottom-right-radius', v1);
    });
    describe('combos', () => {
        test('top', () => {
            const top = borderRadius.top(1);
            expect(top).toHaveProperty('border-top-left-radius', v1);
            expect(top).toHaveProperty('border-top-right-radius', v1);
        });
        test('bottom', () => {
            const bottom = borderRadius.bottom(1);
            expect(bottom).toHaveProperty('border-bottom-left-radius', v1);
            expect(bottom).toHaveProperty('border-bottom-right-radius', v1);
        });
        test('left', () => {
            const left = borderRadius.left(1);
            expect(left).toHaveProperty('border-top-left-radius', v1);
            expect(left).toHaveProperty('border-bottom-left-radius', v1);
        });
        test('right', () => {
            const top = borderRadius.right(1);
            expect(top).toHaveProperty('border-top-right-radius', v1);
            expect(top).toHaveProperty('border-bottom-right-radius', v1);
        });
    });
    test('can be chained', () => {
        const result = borderRadius(1).top('a').topRight('b');
        expect(result).toHaveProperty('border-radius', v1);
        expect(result).toHaveProperty('border-top-left-radius', 'a');
        expect(result).toHaveProperty('border-top-right-radius', 'b');
    });
});

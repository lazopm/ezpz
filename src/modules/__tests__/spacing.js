import {
    property as padding,
    compute as paddingCompute,
} from '../padding';

import {
    property as margin,
    compute as marginCompute,
} from '../margin';

const testProperty = (name, property, compute) => {
    describe(name, () => {
        const v1 = compute(1);
        test('can be called with a number', () => {
            expect(property(1)).toHaveProperty(name, v1);
        });
        test('can be called with a string', () => {
            expect(property('a')).toHaveProperty(name, 'a');
        });

        describe('mods', () => {
            test('edge', () => {
                expect(property.top(1)).toHaveProperty(`${name}-top`, v1);
                expect(property.bottom(1)).toHaveProperty(`${name}-bottom`, v1);
                expect(property.left(1)).toHaveProperty(`${name}-left`, v1);
                expect(property.right(1)).toHaveProperty(`${name}-right`, v1);
            });
            test('combo', () => {
                const horizontal = property.horizontal(1);
                const vertical = property.vertical(1);
                expect(vertical).toHaveProperty(`${name}-top`, v1);
                expect(vertical).toHaveProperty(`${name}-bottom`, v1);
                expect(horizontal).toHaveProperty(`${name}-left`, v1);
                expect(horizontal).toHaveProperty(`${name}-right`, v1);
            });
            test('can be chained', () => {
                const result = property(1).vertical('a').top('b');
                expect(result).toHaveProperty(name, v1);
                expect(result).toHaveProperty(`${name}-bottom`, 'a');
                expect(result).toHaveProperty(`${name}-top`, 'b');
            });
        });
    });
};

testProperty('padding', padding, paddingCompute);
testProperty('margin', margin, marginCompute);

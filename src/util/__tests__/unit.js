import { applyUnit } from '../unit';

describe('applyUnit', () => {
    test('numbers', () => {
        expect(applyUnit('rem', 2.4)).toBe('2.4rem')
    });
    test('negative numbers', () => {
        expect(applyUnit('rem', -2.2)).toBe('-2.2rem')
    });
    test('0', () => {
        expect(applyUnit('rem', 0)).toBe(0)
    });
});

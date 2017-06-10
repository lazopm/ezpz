import { property as display, valueMap } from '../display';

Object.keys(valueMap).forEach(mod => {
    const value = valueMap[mod];
    test(value, () => {
        expect(display[mod]).toHaveProperty('display', value);
    });
})

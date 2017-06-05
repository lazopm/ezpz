import { edgeNames, cornerNames } from '../name';

describe('edge property names', () => {
    const {
        top, bottom,
        left, right,
        vertical,
        horizontal,
    } = edgeNames('x');

    test('base edges', () => {
        expect(top).toEqual(['x-top']);
        expect(bottom).toEqual(['x-bottom']);
        expect(left).toEqual(['x-left']);
        expect(right).toEqual(['x-right']);
    });

    test('combination edges', () => {
        expect(vertical)
            .toEqual(expect.arrayContaining([
                ...top,
                ...bottom
            ])
        );
        expect(horizontal)
            .toEqual(expect.arrayContaining([
                ...left, 
                ...right
            ])
        );
    });
});

describe('corner property names', () => {
    const {
        topLeft, topRight,
        bottomLeft, bottomRight,
        top, bottom,
        left, right,
    } = cornerNames('x', 'y');

    test('base corners', () => {
        expect(topLeft)
            .toEqual(['x-top-left-y']);
        expect(topRight)
            .toEqual(['x-top-right-y']);
        expect(bottomLeft)
            .toEqual(['x-bottom-left-y']);
        expect(bottomRight)
            .toEqual(['x-bottom-right-y']);
    });

    test('combination corners', () => {
        expect(top)
            .toEqual(expect.arrayContaining([
                ...topLeft,
                ...topRight,
            ])
        );
        expect(bottom)
            .toEqual(expect.arrayContaining([
                ...bottomLeft,
                ...bottomRight,
            ])
        );
        expect(left)
            .toEqual(expect.arrayContaining([
                ...bottomLeft,
                ...topLeft,
            ])
        );
        expect(right)
            .toEqual(expect.arrayContaining([
                ...topRight,
                ...bottomRight,
            ])
        );
    });

});

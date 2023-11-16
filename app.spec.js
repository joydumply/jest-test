const multiply = require('./app');

// it('check that 2 * 2 equal 4', () => {
//     expect(multiply(2,2)).toBe(4);
// });

describe('testing app.js', () => {
    it('check that 2 * 2 equal 4', () => {
        expect(multiply(2,2)).toBe(4);
    });
    it('check that no args than return 0', () => {
        expect(multiply()).toBe(0);
    });
});
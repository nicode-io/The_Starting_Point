import { add } from './calc';

describe('calculator', () => {
    describe('should perform addition', () => {
        it('add two positive numbers', () => {
            expect(add(1, 2)).toEqual(3);
        });
        it('add two negative numbers', () => {
            expect(add(-1, -2)).toEqual(-3);
        });
        it('add one positive number and on negative number', () => {
            expect(add(-1, 2)).toEqual(1);
            expect(add(2, -1)).toEqual(1);
        });
    });

});

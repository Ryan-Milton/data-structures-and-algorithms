'use strict';

const shifter = require('./array-shift.js');

describe('This is a function that should take in an array and a number. The function should return the array with the number in the middle index.', () => {
    describe('Testing the insertShiftedArray function', () => {
        test('The function works, test #1', () => {
            expect(shifter([1,2,3,4,5],6)).toEqual([1,2,3,6,4,5]);
        });
    });
    describe('Testing the insertShiftedArray function', () => {
        test('The function works, test #2', () => {
            expect(shifter([2,4,6,8],5)).toEqual([2,4,5,6,8]);
        });
    });
    describe('Testing the insertShiftedArray function', () => {
        test('The function works, test #3', () => {
            expect(shifter([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
        });
    });
})
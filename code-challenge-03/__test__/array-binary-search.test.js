'use strict';

const binarySearch = require('./../lib/array-binary-search.js');

describe('Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.', () => {
    const testArr = ['a','b','c','d'];

    describe('Testing the BinarySearch function.', () => {
        test('BinarySearch works!', () => {
            expect(binarySearch(testArr, 'c')).toBe(2);
        });
    });
    describe('Testing if only one parameter is entered and it is an array.', () => {
        test('The first parameter is an array.', () => {
            expect( () => binarySearch(1)).toThrow();
        });
    });
    describe('Testing to make sure the value passed in is not undefined.', () => {
        test('The value is undefined.', () => {
            expect( () => binarySearch(testArr, undefined)).toThrow();
        });
    });
})
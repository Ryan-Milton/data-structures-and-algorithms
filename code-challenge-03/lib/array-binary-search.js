'use strict';

function binarySearch(sortedArr, value) {
    if(!Array.isArray(sortedArr)) throw new Error('An array must be entered.');

    if(value === undefined) throw new Error('This value is undefined');

    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i] === value) {
            return i;
        }
    }
    return -1;
}

module.exports = binarySearch;
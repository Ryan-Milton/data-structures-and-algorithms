'use strict';

function reverseArray(arr){
    arrReversed = [];
    for(let i = 0; i < arr.length; i++){
        arrReversed[arr.length-i-1]=arr[i]; //Tim Li helped me get to this particular line of code.
    }
    return arrReversed;
}
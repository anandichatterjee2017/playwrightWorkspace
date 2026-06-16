"use strict";
/*
Arrays are hte collection of similar datatypes
Each variable in an array is also known as array element
Each variable of array is referenced by a particular integer number
which is also known as array index
The total number of variables in array decide the length of an array
The very first index or an array always starts from 0 and the last index is length-1
1D, 2D
*/
const array1 = [1, 2, 3, 4, 5, 6, 7];
//console.log(array1.length);
//console.log(array1[2]);
const numbs = new Array(10);
/*
numbers[0] = 1;
numbers[2] = 2;
numbers[9] = 10;
*/
for (let i = 1; i < numbs.length; i++) {
    numbs[i] = Math.floor(Math.random() * 100) + 1;
    //console.log(numbs[i]);
}
for (const numbr in numbs) {
    console.log(numbr);
}

'use strict';

/**
 * @name generateFib
 * @desc generates fibonacci sequence
 * @param {integer} max no. till which seq. is to be generated
 * @return {array} array with it's elements in fibonacci sequence
 */
function generateFib(max) {
    let a = 0, b = 1, temp;
    let fibArr = [a, b];
    while ((a+b) <= max) {
        console.log(max, b);
        temp = b;
        b = a + b;
        a = temp;

        fibArr.push(b);
    }
    return fibArr;
}
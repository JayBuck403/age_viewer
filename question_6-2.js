#!/usr/bin/env node
/**
 * missingNumber - This function takes an array of the first n integers 
 *                   as a parameter and prints the missing number or numbers 
 *                   in the array.
 * @array - List of first n integers.
 */

function missingNumber (array) {
  if ((array[0] !== 1 && array[0] !== 0) || array[0] === 0 && array[10] === 2)
    console.log("1 is missing.");

  for (let i = 1; i < array.length; i++) {
    if (array[i] - array[i-1] !== 1) {
      console.log((array[i]-1) + " is missing");
    }
  }
}

let myArray = new Array(1, 2, 3, 4, 5, 6, 7, 9);
missingNumber(myArray);

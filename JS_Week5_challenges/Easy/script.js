/*EASY: Using ES6 syntax, write a function that takes in an array of numbers and outputs the maximum number.
*/

const maxNumber = (theArray) => {
    theArray.sort((a, b) => a - b).reverse();
    // console.log(theArray) // check to make sure the array is sorted from high to low
    let output = theArray[0];
    return output
}

let input1 = [1, 2, 3]  //Output: 3
let input2 = [3, 6, 4, 5, 2, 1]  //Output: 6
let input3 = [3, 3, 3]  //Output: 3

console.log(maxNumber(input1))
console.log(maxNumber(input2))
console.log(maxNumber(input3))

/*MEDIUM: Write a function that takes in an array of numbers and outputs the average 
of all the numbers.*/

// Make a for loop that adds each index to the previous for the full length of the array
// create a new sum variable
// then create an average variable that is sum/theArraylength
// compare average to oput to see if they matches
// if they do return the average

const findAverage = (theArray, expectation) => {

    let sum = 0;

    theArray.forEach(value => {
        sum += value;
    });
    // console.log(sum) // check to make sure the for loop calculated correctly 
    let average = sum / theArray.length
    return `Your array average is ${average} and your expectation is ${expectation}`
    
}

let input1 = [1, 4, 7];
let output1 = 4;
let input2 = [10, 5];
let output2 = 7.5;
let input3 = [1.5, 3, 2.5, 1];
let output3 = 2;

console.log(findAverage(input1, output1))// Output: 4
console.log(findAverage(input2, output2))// Output: 7.5
console.log(findAverage(input3, output3))// Output: 2

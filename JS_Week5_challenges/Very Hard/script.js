/*--VERY HARD: Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself 
in that string. Output the first character in a string that is unique.
Input: “the quick brown fox jumps over the calm kitten quietly”  Output: “b”
Input: “this hat is the greatest!”  Output: “g”
Input: “what a wonderful day it has been!”  Output: “o”
--*/

//First the String into an array by letter
//Then loop through the arrary comparing each character to the rest
// every time a character matches the another in the array, count it 
// the first time you loop through the array and it doesnt match any other character in the array, break from the array and return that value.


let str = `the quick brown fox jumps over the calm kitten quietly`

const uniqueChar = (text) => {

    let textArray = text.split('');

    for (i = 0; i < textArray.length; i++) {

        let counter = 0

        for (v = 0; v < textArray.length; v++) {
            
           if(textArray[i] === textArray[v]) {
               counter += 1 ;
           }
        }

        if (counter < 2) {
            var  unique = textArray[i]
            break; // the First time the conditon is meet break the loop
        }
    }
    return unique;
}

console.log(uniqueChar(str))

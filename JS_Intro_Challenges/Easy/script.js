// Level 2: Easy 
// EASY: Create two variables and assign a person’s name to each. Console log a 
// statement that says which name is shorter or longer, and by how many characters.                                                       Example output: “The name Thomas is longer than John by 2 characters”


var nameOne = 'Tony Stark';
var nameTwo = 'Steve Rodgers';

 
if (nameOne.length > nameTwo.length) {
     console.log( nameOne + ' is longer than ' + nameTwo + ' by ' + (nameOne.length - nameTwo.length) + ' characters. ')

 } else if (nameTwo.length > nameOne.length ) {
    console.log( nameTwo + ' is longer than ' + nameOne + ' by ' + ( nameTwo.length - nameOne.length) + ' characters. ')
 
 } else {
    console.log( 'Neither ' + nameOne + ' or ' + nameTwo + ' is longer, they have the same amount of characters.')
 
};
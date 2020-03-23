// Level 3: Medium 
// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), 
// whispering (typing in all lowercase), or neither. Use prompt to get user input, 
// and then console log whether the user was shouting, whispering, or talking normally. */

var userEntry = prompt('Please Enter some text')

if (userEntry == userEntry.toUpperCase() ) {
   console.log("You don't have to yell, calm down ")} //Yelling

else if (userEntry == userEntry.toLowerCase() ) { //Whispering
   console.log('Why are we whispering?')}

else {
   console.log ('Thank you for your normal conversation tone') //Normal Speech
};
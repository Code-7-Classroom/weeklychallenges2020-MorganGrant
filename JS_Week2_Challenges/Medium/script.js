//Medium Challenge
//Create a program that accepts a number (1 - 12) as input and converts that number into the corresponding month
//For Example: If the user enters 3 it should return "March"
//Bonus: alert the user if they enter an invalid number (less than 1 or greater than 12)

var monthNumber = parseInt(prompt('Please enter a number in between 1-12'));
var month = ['NOT a month', 'January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December' ];


( 12 >= monthNumber && monthNumber >= 1 )
   ? alert(`Month number ${monthNumber} is ${month[monthNumber]}`)
   : alert(`You've entered an invalid value. What you entered is ${month[0]}.`);


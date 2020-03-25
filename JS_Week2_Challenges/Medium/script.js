//Medium Challenge
//Create a program that accepts a number (1 - 12) as input and converts that number into the corresponding month
//For Example: If the user enters 3 it should return "March"
//Bonus: alert the user if they enter an invalid number (less than 1 or greater than 12)

var monthNumber = prompt('Please enter a number in between 1-12');



switch(monthNumber) {
   case 1:
      console.log('Month number ' + monthNumber + ' is January' );
      break;
   case 2:
      console.log('Month number ' + monthNumber + ' is February' );
      break;
   case 3:
      console.log('Month number ' + monthNumber + ' is March' );
      break;
   case 4:
      console.log('Month number ' + monthNumber + ' is April' );
      break;
   case 5:
      console.log('Month number ' + monthNumber + ' is May' );
      break;
   case 6:
      console.log('Month number ' + monthNumber + ' is June' );
      break;
   case 7:
      console.log('Month number ' + monthNumber + ' is July' );
      break;
   case 8:
      console.log('Month number ' + monthNumber + ' is August' );
      break;
   case 9:
      console.log('Month number ' + monthNumber + ' is September' );
      break;
   case 10:
      console.log('Month number ' + monthNumber + ' is October' );
      break;
   case 11:
      console.log('Month number ' + monthNumber + ' is November' );
      break;
   case 12:
      console.log('Month number ' + monthNumber + ' is December' );
      break;
   default:
      console.log('You have entered an invalid value')
   
}

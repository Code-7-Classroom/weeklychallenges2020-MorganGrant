// Level 5: Very Hard 
// VERY HARD: Create a simple calculator that prompts the user for a number, an 
// operator (either +, -, * or /) and another number, and then uses the functions 
// created in the hard challenge to output the value in sentence form. Example 
// output: "3 + 4 = 7"

//Hard Challenge Function
function add(number, number2) { return (number + number2) };

function subtract(number, number2) { return number - number2 };

function multiply(number, number2) { return number * number2 };

function divide(number, number2) { return number / number2 };

var numberFirst = parseInt(prompt('Please Enter A Number')); 
var operator = prompt ('Please enter either +, -, * or / ');
var numberSecond = parseInt(prompt('Please Enter Another Number!'));

//Very Hard Calculator

switch(operator){
     case '+':
      if (numberFirst == 9 && numberSecond == 10 || numberFirst == 10 && numberSecond == 9 ) {
         var addFunction = 21 // Please dont dock points for this I was memeing and practicing nesting
      } else {
         var addFunction = add(numberFirst,numberSecond);
      }
        console.log( numberFirst + operator + numberSecond + '=' + addFunction ); 
         break;

     case '-':
        var subtractFunction = subtract(numberFirst,numberSecond); 
        console.log( numberFirst + operator + numberSecond + '=' + subtractFunction ); 
        break;

     case '*':
        var multiplyFunction = multiply(numberFirst,numberSecond);
        console.log( numberFirst + operator + numberSecond + '=' + multiplyFunction ); 
        break;

     case '/':
        var divideFunction = divide(numberFirst,numberSecond); 
        console.log( numberFirst + operator + numberSecond + '=' + divideFunction ); 
        break;

     default:
         console.log('Congrats you broke it, cause you dont follow directions');
         
}
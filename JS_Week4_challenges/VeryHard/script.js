/*VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1
*/

/*
1. I need to find the highest amount/coin in the array
2. I need to check if I can subtract that number from the amount
3-a. If I can substract it from the a amount push that number into a new array.
3-b. If I cannot subtract it from the amount, try the next highest amount.
4. Repeat steps 2-3b for the entire length array or until the amount is reduced to 0
5. Count the length of the aneww array that was made in 3-a
6. If I've gone through all of  my coins and the amount hasn't been reduced to 0 print -1  

*/

const coins = [1, 2, 5];
var amount = 11;

const calcCoins = (coinsArray, total) => {
    //Sort the coins array to it start at the highest value and ends at the lowest
    coinsArray.sort((a, b) => a - b).reverse();
    // Making sure my coins have been sorted
    // console.log(coinsArray)

    //I want to make an empty array I can push my coins into
    var countCoins = [];

    for (c = 0; c < coinsArray.length; c++) {
        while (total >= coinsArray[c] && 0 != coinsArray[c]) {
            total -= coinsArray[c];
            countCoins.push(coinsArray[c])
        }
    }
        
    if( total != 0 ) {
        console.log(-1)
    } else {
        // console.log(countCoins) // Checks which coins where specifically pushed into the array
        console.log(countCoins.length)
    }
}

calcCoins([1, 2, 5], 11)
calcCoins([2], 3)


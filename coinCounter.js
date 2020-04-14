/////////////////////////////////////////////////////////
//This is an example of a solution for a recursive function to calculate the amount of money in change as per Monday's lesson prompt part 1. Here I use the spread operator to add a value to an existing array.
///////////////////////////////////////////////// 
// Part 1
// Create a coin counter function that uses recursion to solve the problem.

const recursiveCounter = function(totalAmountInPennies, coinChangeArr = [], counter = 0) {
    // console.log("totalAmountInPennies", totalAmountInPennies);
    // console.log("coinChangeArr", coinChangeArr);
    // console.log("counter", counter);
    const coins = [25, 10, 5, 1];
    if (counter >= 4) {
        return coinChangeArr;
    } else {
        const amount = Math.floor(totalAmountInPennies / coins[counter]);
        const remainder = totalAmountInPennies - (amount*coins[counter]);
        const newCoinArr = [...coinChangeArr, amount]; 
        return recursiveCounter(remainder, newCoinArr, counter + 1);
    }
}

// console.log(recursiveCounter(101));

///////////////////////////////////////////
// This is an example of a for loop (not tested, so it may have errors) that does the same task as the recursive coin counter function. The point is to demonstrate that a for loop has side effects, while a recursive function does not.
//////////////////////////////////////////////

// let amountInPennies = 100;
// let coinchangeArr = [];
// for (let i = 0; i < 4; i++) {
//     let coins = [25, 10, 5, 1];
//     const amount = Math.floor(amountInPennies / coins[i]);
//     const amountInPennies = amountInPennies - (amount*coins[i]);
//     coinChangeArr.push(amount);
// }



/////////////////////////////////////////////////////////////////
/// This is from Monday's lesson prompt on creating a Coin Counter.This is an example of currying and using closures to create a coin counter. HOWEVER, this is not a useful way to make a coin counter because you maknually have to pass in the arguments to each callback. 
//////////////////////////////////////////////////////////
// Part 2
// Create a coin counter function that uses a closure that can be used with functions for each type of change (quarters, nickels, dimes and pennies).

const counter = function(dollarAmount) {
    const centsAmount = dollarAmount * 100;
    return (centsAmount) => {
        const quarters = Math.floor(centsAmount / 25);
        const dimesRemainder = centsAmount % 25;
        // console.log("quarters " + quarters);
        return (quartersRemainder) => {
            const dimes = Math.floor(dimesRemainder / 10);
            const nickleRemainder = centsAmount % 10;
            // console.log("dimes " + dimes);
            return (nickleRemainder) => {
                const nickles = Math.floor(nickleRemainder / 5);
                const pennies = centsAmount % 5;
                // console.log("nickels " + nickles);
                return (pennies) => {
                    // console.log("pennies " + pennies);
                    return [quarters, dimes, nickles, pennies];
                }
            }
        }
    }
}

const quarterCalculator = counter(2.22)(222)(22)(0)(2);
// console.log(quarterCalculator);






////////////////////////////////////////////////////////////
/// This is a better interpretation of the second prompt from Monday's lesson prompt on the Coin Counter.
//////////////////////////////////////////////////////////
// Part 2
// Create a coin counter function that uses a closure that can be used with functions for each type of change (quarters, nickels, dimes and pennies).

const counterRoundTwo = function(countBy) {
    return (dollarAmount) => {
        const centsAmount = dollarAmount * 100;
        const counted = centsAmount / countBy;
        return `There are about ${counted} ${countBy}-cent coins in $${dollarAmount}`;
    }
}

// This is an example of using a closure to create a function factory. 
// let quartersCounter = counterRoundTwo(25);
// let dimesCounter = counterRoundTwo(10);
// let nicklesCounter = counterRoundTwo(5);
// let penniesCounter = counterRoundTwo(1);
// console.log(quartersCounter(1.50));
// console.log(counterRoundTwo(25)(1.50));
// console.log(dimesCounter(.9));
// console.log(nicklesCounter(.30));
// console.log(penniesCounter(.16));
// console.log(quartersCounter);













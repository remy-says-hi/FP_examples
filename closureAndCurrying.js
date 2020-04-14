/////////////////////////////////////////////////////////////////
//This is from one of the whiteboarding prompts on closures from Mondays lessons.
///////////////////////////////////////////////////////////
// Problem #4 (Harder)
// Use closures to create multiple functions to first add to and then multiply a value. It should be possible to do the following:
// const addTwoMultiplyByThree = addaMult(2)(3);
// const addFiveMultiplyByNine = addaMult(5)(9);

const addaMult = function(addition) {
    return function(multiplier) {
        return function(input) {
            return `${input} added to ${addition} is equal to ${input + addition}, and ${input} multiplied by 3 is equal to ${input * multiplier}`;
        }
    }
}
//////////////////////////////////////////////////
//each of these groups of functions have the same output
// const addTwo = addaMult(2);
// const multiplyByThree = addTwo(3);
// console.log(multiplyByThree(5));

// const addTwoMultiplyByThree = addaMult(2)(3);
// console.log(addTwoMultiplyByThree(5));

// console.log(addaMult(2)(3)(5));
//////////////////////////////////////////////////

//This is the output for the prompt's other requirement
// const addFiveMultiplyByNine = addaMult(5)(9);
// console.log(addFiveMultiplyByNine(5));
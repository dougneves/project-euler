/** PROBLEM 0001 - https://projecteuler.net/problem=1
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23. 
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

function sumOfAllMultiplesOf3and5(max) {
    max--; //max value is not inclusive
    
    //find how many multiples of 3, 5 and 3and5
    const countBy3 = Math.floor(max / 3);
    const countBy5 = Math.floor(max / 5);
    const countBy15 = Math.floor(max / 15);

    // sum of integers => 1+2+3+4 = 4*(4+1)/2
    // 3+6+9+12 = (3*1) + (3*2) + (3*3) + (3*4) = 3*(1+2+3+4) = 3*(4*(4+1)>2)
    const sum3 = 3 * ((countBy3 * (countBy3 + 1)) / 2);
    const sum5 = 5 * ((countBy5 * (countBy5 + 1)) / 2);
    const sum15 = 15 * ((countBy15 * (countBy15 + 1)) / 2);

    //sum up the sum of multiples of 3 and 5, and substract the sum 3and5 (multiples of 15)
    return sum3 + sum5 - sum15;
}

const max = 1000;

console.log(`The sum of all multiples of 3 and 5 bellow ${max} is`, sumOfAllMultiplesOf3and5(max));

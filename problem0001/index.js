function sumOfAllMultiplesOf3and5(mox) {
    let result = 0;
    for (let i = 3; i < max; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i;
        }
    }
    return result;
}

const max = 1000;

console.log(`The sum of all multiples of 3 and 5 bellow ${max} is`, sumOfAllMultiplesOf3and5(max));

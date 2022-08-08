
const numbers = [167, 190, 301, 120, 165, 137, 265];


function getMin(numbers) {
    let minNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minNumber) {
            minNumber = numbers[i];
        }
    }
    return minNumber;
}

const resultOfMinNumber = getMin(numbers);
console.log(resultOfMinNumber);
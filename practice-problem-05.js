let numbers = [2, 5, 7, 14, 19, 33, 41, 53, -8, 61, 69, 74, 83];
let positiveNumbers = [];
function positiveNumber (numbers) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        } else {
            break;
        }
    }
    return positiveNumbers;
}

let output = positiveNumber (numbers);
console.log(output);
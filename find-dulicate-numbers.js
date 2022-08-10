let numbers = [22, 10, 14, 33, 22, 51, 14, 30, 35, 33, 47, 66, 14, 90, 22];
let uniqueNumbers = [];
for (i = 0; i < numbers.length; i++) {
    if (uniqueNumbers.includes(numbers[i]) !== false) {
        uniqueNumbers.push(numbers[i]);
    }
}
let difference = numbers.filter((x, i) => numbers.indexOf(x) !== i);
console.log(difference);

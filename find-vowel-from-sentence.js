let line = "i love bangladesh";
let split = line.split("")
let vowel = ['a', 'e', 'i', 'o', 'u'];
let chaCount = parseInt(split.length);
let difference = split.filter(x => vowel.includes(x) === true);
console.log(difference.length);
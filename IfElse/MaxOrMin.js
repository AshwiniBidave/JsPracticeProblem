function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let result1 = generateRandomIntegerInRange(100, 999);
let result2 = generateRandomIntegerInRange(100, 999);
let result3 = generateRandomIntegerInRange(100, 999);
let result4 = generateRandomIntegerInRange(100, 999);
let result5 = generateRandomIntegerInRange(100, 999);
//print 5 random result
console.log(result1,result2,result3,result4,result5);
// To get maximum number.
if ((result1 > result2) && (result1 > result3) && (result1 > result4) && (result1 > result5)) {
    console.log(result1 + " is the maximum result.");
} else if ((result2 > result1) && (result2 > result3) && (result2 > result4) && (result2 > result5)) {
    console.log(result2 + " is the maximum result.");
} else if ((result3 > result1) && (result3 > result2) && (result3 > result4) && (result3 > result5)) {
    console.log(result3 + " is the maximum result.");
} else if ((result4 > result1) && (result4 > result2) && (result4 > result3) && (result4 > result5)) {
    console.log(result4 + " is the maximum result.");
} else console.log(result5 + " is the maximum result.");


// To get minimum number.
if ((result1 < result2) && (result1 < result3) && (result1 < result4) && (result1 < result5)) {
    console.log(result1 + " is the minimum result.");
} else if ((result2 < result1) && (result2 < result3) && (result2 < result4) && (result2 > result5)) {
    console.log(result2 + " is the minimum result.");
} else if ((result3 < result1) && (result3 < result2) && (result3 < result4) && (result3 > result5)) {
    console.log(result3 + " is the minimum result.");
} else if ((result4 < result1) && (result4 < result2) && (result4 < result3) && (result4 < result5)) {
    console.log(result4 + " is the minimum result.")
} else console.log(result5 + " is the maximum result.");



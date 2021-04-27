// Find the sum of the digits of all the numbers from 1 to N (both ends included).
// Examples

// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

// Solution 1
sumOf = (t) => {
    let sumArray = [];
    for(let i = 1;i < t + 1;i++){
        sumArray.push(i >= 10? (i.toString().split('').map(j => Number(j))).reduce((a,b)=>a+b): i)
    ;} return sumArray.reduce((a,b)=>a+b)
}
console.log(sumOf(15))

// Solution 2
sumOf = (t) => {
    let result = [...Array(t).keys()].map(el => el += 1);
    let answer = []
    result.forEach(i => {answer.push(i >= 10? (i.toString().split('').map(j => Number(j))).reduce((a,b)=>a+b): i)
    }); return answer.reduce((a,b) => a + b)
}


console.log(sumOf(15))

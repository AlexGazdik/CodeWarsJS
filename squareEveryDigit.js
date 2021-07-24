function squareDigits(num){
    const numString = num.toString();
    const numArray = numString.split('');
    const arrayLength = numArray.length;
    const arraySquares = []
    for(let i = 0; i < arrayLength; i++){
        arraySquares.push(numArray[i] ** 2)
    }
    let result = arraySquares.join('');
    return Number(result);
    
// FEFACTOR
let squareDigit = (num) => {
    return Number(num.toString().split('').map(x => x ** 2).join(''));
}

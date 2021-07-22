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
    

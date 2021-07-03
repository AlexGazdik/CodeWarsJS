function squareSum(numbers){
      let squares = []
      if(numbers.length === 0) {
            return 0;
      } else {
      for(let i = 0;i < numbers.length;i++) {
            squares.push(numbers[i] ** 2)
            }; 
      let result = squares.reduce(function (a, b) {
            return a + b
      })
      ;return result
      }
}

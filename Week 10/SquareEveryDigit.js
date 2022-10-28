function squareDigits(num){
   let answerArray = []
   let numString = num.toString()
  let numArray = numString.split('')
  numArray.forEach(digit => {
    let numDigit = parseInt(digit)
     let digitSquared = numDigit ** 2
     answerArray.push(digitSquared)
})
  let answer = answerArray.join('')
  
  return(parseInt(answer))
}
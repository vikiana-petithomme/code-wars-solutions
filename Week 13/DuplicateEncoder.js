function duplicateEncode(word){
    let letters = Array.from(word)
    answerArray = []
    letters.forEach(letter => {
      console.log(letter)
      let duplicate = 0
      for (let i =0; i < word.length; i++){
        if (letter.toLowerCase() === word[i].toLowerCase()){
          duplicate ++
          console.log(duplicate)
         
        }
      }
       if (duplicate >= 2){
            answerArray.push(')')
          } else {
            answerArray.push('(')
          }  
         console.log(answerArray)
    })
    let answer = answerArray.join('')
    return answer
  }
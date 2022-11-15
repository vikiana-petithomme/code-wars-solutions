function spinWords(string){
    //TODO Have fun :)
    
    let words = string.split(' ')
    let answerArray = []
    words.forEach(word => {
      if (word.length >= 5){
        let wordArray = Array.from(word)
        let reverseArray = wordArray.reverse()
        let newWord = reverseArray.join('')
        console.log(newWord)
        answerArray.push(newWord)
      } else {
        answerArray.push(word)
      }
    })
    let answerString = answerArray.join(' ')
    return answerString.toString()
  }
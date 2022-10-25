function reverseWords(str) {
    // Go for it
    let newStr = []
    let words = str.split(' ')
    console.log(words)
    words.forEach(word => {
      console.log(word)
      let wordArray = word.split('')
      let arrayReverse= wordArray.reverse()
      console.log(arrayReverse)
      let reverseJoin = arrayReverse.join('')
      console.log(reverseJoin)
      newStr.push(reverseJoin)
    })
    console.log(newStr)
    let answer = newStr.join(' ')
    return answer
    
  }
  
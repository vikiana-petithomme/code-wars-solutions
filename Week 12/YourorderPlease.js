function order(words){
    // ...
    let eachWord = words.split(' ')
    console.log(eachWord)
    let answer = []
    eachWord.forEach(word => {
      console.log(word)
      let characters = word.split('')
      console.log(characters)
        characters.forEach(character => {
          console.log(character)
          if (character == 1){
            answer[0] = word 
            console.log(answer)
          } else if ( character == 2){
            answer[1] = word
            console.log(answer)
  
          } else if ( character == 3){
            answer[2] = word
                      console.log(answer)
  
          } else if ( character == 4){
            answer[3] = word
                      console.log(answer)
  
          } else if ( character == 5){
            answer[4] = word
                      console.log(answer)
  
          } else if ( character == 6){
            answer[5] = word
                      console.log(answer)
  
          } else if ( character == 7){
            answer[6] = word
                      console.log(answer)
  
          } else if ( character == 8){
            answer[7] = word
                      console.log(answer)
  
          } else if ( character == 9){
            answer[8] = word
                      console.log(answer)
          }
        })
    })
    return answer.join(' ')
  }
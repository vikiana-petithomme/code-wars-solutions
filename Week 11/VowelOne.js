function vowelOne(s){
  
    let vowels = ['a','e','i','o','u']
    let letters = s.split('')
    let answerString = []
    for(let i=0; i<letters.length; i++){
       let letter = letters[i].toLowerCase()
      if(vowels.includes(letter)){
        answerString.push(1)
      }else {
        answerString.push(0)
      }
    }
    let answer = answerString.join('')
    return answer
    // ...
  }
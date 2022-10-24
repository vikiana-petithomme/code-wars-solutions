function findShort(s){
    let words = s.split(' ')
    console.log(words)
    wordLength = []
    for(let i = 0; i < words.length; i++ ){
  
      wordLength.push(words[i].length)
  
    }
    
    return (Math.min.apply(Math, wordLength))
  }
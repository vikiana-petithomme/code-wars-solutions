function duplicateCount(text){
    //...
    let letters = Array.from(text)
    let multiples =[]
    letters.forEach(letter => {
      let count = 0
      for (let i=0; i < letters.length; i++){
          if (letter.toLowerCase() === letters[i].toLowerCase()){
          count ++
        }
      }
      if (count >= 2 && !(multiples.includes(letter.toLowerCase()))){
       multiples.push(letter.toLowerCase())
      }
    })
    return multiples.length
  }
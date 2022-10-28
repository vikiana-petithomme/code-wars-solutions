function disemvowel(str) {
    let vowels = ["a","e","i","o","u"]
    let stringWithVowels = Array.from(str)
    let newStringArray= []
    for (let i=0; i < stringWithVowels.length; i++){
     if (vowels.includes(stringWithVowels[i].toLowerCase())){
       console.log('delete me')
     } else {
       newStringArray.push(stringWithVowels[i])
     }
    }
    
    let newString = newStringArray.join('')
    return newString
  }
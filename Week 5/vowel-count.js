function getCount(str) {
    let numberOfVowels = 0
    let givenString = Array.from(str)
    console.log(givenString)
    let vowels = ["a","e","i","o","u"]
    console.log(vowels.includes(givenString[0]))
    for(let i = 0; i < givenString.length; i++){
      if (vowels.includes(givenString[i])){
          numberOfVowels++ 
         }
    }
    return numberOfVowels
    
  }
           
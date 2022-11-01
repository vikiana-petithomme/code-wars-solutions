function solution(str, ending){
  // TODO: complete
  
  let letters = str.split('')
  let endingLetters = ending.split('')
  let num = endingLetters.length
  let match = []
  for (let i = 1; i <= num; i++){
    if(letters[letters.length - i] === endingLetters[(endingLetters.length - i)]){
       match.push(true)
    } else {
       match.push(false)
    }
  }
  if(match.includes(false)){
    return false 
  } else {
    return true
  }
}
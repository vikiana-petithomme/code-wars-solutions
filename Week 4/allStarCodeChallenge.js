function strCount(str, letter){  
    //code here
    strArray = Array.from(str)
    console.log(strArray)
    console.log(letter)
    console.log(str.includes(letter))
    counter = 0
    for (let i = 0; i < strArray.length; i++){
      if (strArray[i].includes(letter)){
        counter ++
      } else {
        counter += 0 
      }
    }
    return counter
  }
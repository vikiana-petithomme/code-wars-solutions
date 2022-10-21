function feast(beast, dish) {
    let beastArray = Array.from(beast)
    console.log(beastArray)
    let beastLastIndex = beastArray.length - 1
    let dishArray = Array.from(dish)
    console.log(dishArray)
    let dishLastIndex = dishArray.length - 1
    console.log(beastArray[beastLastIndex], dishArray[dishLastIndex])
    let firstLetter =  (beastArray[0] === dishArray[0])
    let lastLetter = (beastArray[beastLastIndex] === dishArray[dishLastIndex])
    if (firstLetter === true && lastLetter === true) {
      return true 
    } else {
      return false
    }
  }
  
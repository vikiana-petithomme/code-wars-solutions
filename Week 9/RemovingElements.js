function removeEveryOther(arr){
    newArray = []
    
    for(let i = 0; i < arr.length; i++){
      if(i%2 === 0 ){
        newArray.push(arr[i])
      }else {
        
      }
    }
    return newArray
  }
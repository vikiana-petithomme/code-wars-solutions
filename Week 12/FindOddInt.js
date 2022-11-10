function findOdd(A) {
    //happy coding!
    let answer = null
    A.forEach(n => {
        let occurrence = 0
       for (let i=0; i < A.length; i++){
         if(n === A[i]){
             occurrence ++
         }
    }
      if (occurrence %2 === 1){
            answer = n
      }
    })
    
     return answer
  }
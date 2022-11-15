function findOutlier(integers){
    //your code here
    
   for (let i=0; i < integers.length; i++){
     
     if(integers[0] % 2 === 0 && (integers[1] % 2 === 1 || integers[1] % 2 === -1) || (integers[0] % 2 === 1 || integers[0] % 2 === -1) && integers[1] % 2 === 0){
        if(integers[2] % 2 === 1 || integers[2]%2 === -1 ){
           if (integers[i] % 2 === 0){
            return integers[i]
          }
        } else if (integers[2] % 2 === 0){
           if(integers[i] % 2 === 1 || integers[i]%2 === -1 ){
          return integers[i]
        }
        }
     } else if(integers[0]% 2 === 0){
          if(integers[i] % 2 === 1 || integers[i]%2 === -1 ){
          return integers[i]
        }
     } else if (integers[0] % 2 === 1 || integers[0]%2 === -1 ){
        if (integers[i] % 2 === 0){
          return integers[i]
       }
     }
   }
  }
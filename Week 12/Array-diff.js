function arrayDiff(a, b) {
    let answer = []
   
    if(b.length === 0){
      return a
    } else {
        for(let i=0; i <a.length; i++){
            if (b.includes(a[i])){
                console.log('delete me')
            } else {
                answer.push(a[i])
            }
        }    
        return answer
    }
}
const reverseSeq = n => {
    let countdown = []
    for (let i= n; i > 0; i--){
      countdown.push(i)
    }
    return countdown
  };
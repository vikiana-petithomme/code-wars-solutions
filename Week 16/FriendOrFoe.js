function friend(friends){
    //your code here
    
    // filter(funtion)
    
    let mutuals = friends.filter(user => user.length === 4 )
    
    return mutuals
  }
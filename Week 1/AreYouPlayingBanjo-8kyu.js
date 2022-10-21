function areYouPlayingBanjo(name) {
    // Implement me
    let nameArray = Array.from(name)
    if (nameArray[0] === "r" || nameArray[0] === "R"){
      return name + " plays banjo";
    } else { 
      return name + " does not play banjo";
  
    }
    
    
  }
  
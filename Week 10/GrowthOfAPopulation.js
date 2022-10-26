function nbYear(p0, percent, aug, p) {
    // your code
  
  let rate = percent / 100 
  
  let pop = p0 
  
  let i= 0
  
  do {
    i++ 
    pop = Math.floor(pop + (pop * rate) + aug)
  }
  
  while(!(pop >= p))
  return i 
  
}
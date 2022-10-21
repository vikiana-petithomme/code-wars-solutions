function filter_list(l) {
    // Return a new array with the strings filtered out  
       let newList = []
    l.forEach(item => {
         let type = typeof item
         if (type === 'number'){
           newList.push(item)
         }
       })
    
    return newList
      }
function isPalindrome(x) {
    // your code here
    
    let splitText = Array.from(x)  
    let reverseArray = splitText.reverse()  
    let reverseText = reverseArray.join('')
    let reverse = reverseText.toLowerCase()
    let original = x.toLowerCase()
    console.log(original)
    console.log(reverse)
    return (original === reverse)
  }
function getSumOfDigits(integer) {
    var sum = null;
    var digits =  Math.floor(integer).toString().split('');
    console.log(digits)
    for(var ix = 0; ix < digits.length; ix++) {
      sum += parseInt(digits[ix]);
    }
    return sum;
  }
exports.factorial = function(num) {
  function fact(number){
    if(number==1){
      return 1;
    }
    return number*fact(number-1)
  }
  return fact(num);
};

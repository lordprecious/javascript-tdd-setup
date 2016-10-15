// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumOfPrimes: function(a) {
    if (isNaN(a)){// checks for string input
    console.log("Invalid input");
    return [];
  }
  if(a < 2){
    console.log("prime number starts from 2");
    return[];
  }
  
  //var prime = [];
  var sum = 0;

  for(i = 2; i <=a; i++){
    var isprime = true;
    for(j = 2; j < i; j++){
      if(i % j === 0){
        isprime = false;
        break;
      }
    }

    if(isprime === true){
      //prime.push(i);
      sum = sum + i;
    }
  }
  //return prime;
  return sum;
   
  },

  //sumOfPrime(20)
  
}
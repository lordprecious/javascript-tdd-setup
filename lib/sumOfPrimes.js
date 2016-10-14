// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumOfPrimes: function(a, n) {
    if (!a || !n)
      return false;
    let d = n * a;
    let p = n - 1;
    return { a: d, n: p };
  },
  
}
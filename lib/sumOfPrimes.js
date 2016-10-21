// The function calculates the sum of prime numbers within a given range.
  sumOfPrimes: function(a) {
    if (isNaN(a)){// checks for string input
    console.log("Invalid input");
    return 0;
  }
  if(a < 2){
    console.log("prime number starts from 2");
    return 0;
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
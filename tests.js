'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sumOfPrimes.js');

describe("Test that constants are computed properly", function() {
  it("should return 41 given 15 as input", function() {
    assert(
      lib.sumOfPrimes(15) === 41
    );
  });
  it("should return 17 given 10 as input", function() {
    assert(
      lib.sumOfPrimes(10) === 17
    );
  });
  it("should return 10 given 5 as input", function() {
    assert(
      lib.sumOfPrimes(5) === 10
    );
  });
  it("should return 2 given 2 as input", function() {
    assert(
      lib.sumOfPrimes(2) === 2
    );
  });
  it("should return an error given a 0 as input", function() {
    assert(
      lib.sumOfPrimes(0) === "Prime numbers start from 2"
    );
  });
  it("should return an error given a charater or string as input", function() {
    assert(
      lib.sumOfPrimes("") === "invalid input"
    );
  });
  it("should return an error message given any number less than zero as input", function() {
    assert(
      lib.sumOfPrimes(-1) === "invalid input"
    );
  });
});
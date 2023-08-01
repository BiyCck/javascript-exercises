const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  const sum = nums.reduce(
    (accumulator, currentVal) => accumulator + currentVal
  , 0)
  return Number.parseInt(sum)
};

const multiply = function() {
  const nums = [...arguments];
  const product = nums.reduce(
    (accumulator, currentVal) => accumulator * currentVal
    , 1
  )
  return product
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(factor) {
  if(factor === 0){
    return 1;
  } else {
    var factorSum = 1
    for(let i = 1; i <= factor; i++){
      factorSum = factorSum * i;
    }
    return factorSum;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

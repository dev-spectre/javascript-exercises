const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
	return array.reduce((sum, num) => {
    sum += num;
    return sum;
  }, 0);
};

const multiply = function(...args) {
  return args.reduce((product, num) => {
    product *= num;
    return product
  }, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	if (num === 0) return 1;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
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

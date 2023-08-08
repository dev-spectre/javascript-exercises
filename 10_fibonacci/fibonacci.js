const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  if (num == 1 || num == 2) return 1;
  const memo = {};
  if (num in memo) return memo[num];
  const fib = fibonacci(num - 1) + fibonacci(num - 2);
  memo[num] = fib;
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;

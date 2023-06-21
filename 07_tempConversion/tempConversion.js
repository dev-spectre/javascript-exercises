const convertToCelsius = function(tempInFahrenheit) {
  const tempInCelsius = (tempInFahrenheit - 32) * 5/9;
  return Math.round(tempInCelsius * 1e1) / 1e1;
};

const convertToFahrenheit = function(tempInCelsius) {
  const tempInFahrenheit = tempInCelsius * 9/5 + 32;
  return Math.round(tempInFahrenheit * 1e1) / 1e1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

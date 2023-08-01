const convertToCelsius = function(temperature) {
  convertedTemperature = ((temperature - 32) * 5) / 9;
  return Number(convertedTemperature.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  convertedTemperature = (temperature * 9 / 5) + 32
  return Number(convertedTemperature.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

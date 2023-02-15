/**
 * @author Anton Ivanov <anton@ivanov.hk>
 */

/**
 * Converts Celsius temperature to Fahrenheit.
 * @param {string|number} celsiusTemperature - E.g. '36.6 C';
 * @param {number} [round] - How many decimals to round to. By default rounds
 * to integer.
 */
function toFahrenheit(celsiusTemperature, round = 0) {
  if (celsiusTemperature === null || celsiusTemperature === '' || celsiusTemperature === undefined) {
    throw new Error('Input was null/empty when trying to convert temperature to Celsius.');
  }

  const c = parseFloat(celsiusTemperature);
  const f = (c * 1.8) + 32;

  return roundTo(f, round);
}

/**
 * Converts Fahrenheit temperature to Celsius.
 * @param {string|number} fahrenheitTemperature - E.g. '100.5 F';
 * @param {number} [round] - How many decimals to round to. By default rounds
 * to integer.
 */
function toCelsius(fahrenheitTemperature, round = 0) {
  if (fahrenheitTemperature === null || fahrenheitTemperature === '' || fahrenheitTemperature === undefined) {
    throw new Error('Input was null/empty when trying to convert temperature to Fahrenheit.');
  }

  const f = parseFloat(fahrenheitTemperature);
  const c = (f - 32) / 1.8;

  return roundTo(c, round);
}

/**
 * Converts Celsius temperature to Fahrenheit, adding ' °F' to the result.
 * @param {string|number} celsiusTemperature - E.g. '36.6 C';
 * @param {number} [round] - How many decimals to round to. By default rounds
 * to integer.
 * @returns {string}
 */
function toFahrenheitFmt(celciusTemperature, round = 0) {
  return `${toFahrenheit(celciusTemperature, round)} °F`;
}

/**
 * Converts Fahrenheit temperature to Celsius, adding ' °C' to the result.
 * @param {string|number} fahrenheitTemperature - E.g. '100.5 F';
 * @param {number} [round] - How many decimals to round to. By default rounds
 * to integer.
 */
function toCelsiusFmt(fahrenheitTemperature, round = 0) {
  return `${toCelsius(fahrenheitTemperature, round)} °C`;
}

// Because rounding is not easy! E.g. parseFloat((1.005).toFixed(2)) is wrong
// https://stackoverflow.com/a/42368487/6269864
function roundTo(value, decimals) {
  if (!decimals || decimals === '0') {
    return Math.round(value);
  }

  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}


module.exports = { toFahrenheit, toCelsius, toFahrenheitFmt, toCelsiusFmt };

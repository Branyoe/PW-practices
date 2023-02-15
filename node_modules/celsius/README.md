# Celsius to Fahrenheit converter

A simple converter from Celsius to Fahrenheit and vice versa.

## Convert Fahrenheit to Celsius:

The `toCelsius(f, round)` function takes the Fahrenheit temperature `f` as
a number or as a string (if string, the string must start with a number), converts
it and rounds to the `round` number of decimal digits. By default it rounds to
the nearest integer.

```js
const { toCelsius } = require('celsius');

toCelsius(100); // 38
toCelsius(100, 3); // 37.778
toCelsius('105.981 degrees F', 5); // 41.10056
```

## Convert Celsius to Fahrenheit: 

The `toFahrenheit(c, round)` function takes the Celsius temperature `c` as
a number or as a string (if string, the string must start with a number), converts
it and rounds to the `round` number of decimal digits. By default it rounds to
the nearest integer.

```js
const { toFahrenheit } = require('celsius');

toFahrenheit(36); // 97
toFahrenheit(36.68, 3); // 98.024
toFahrenheit('-40.691 degrees C', 5); // -41.24380
```

## Append the °F or °C automatically

Use the functions `toCelsiusFmt()` and `toFahrenheitFmt()` with the same
parameters to return a string containing the converted number and the characters
` °C` or ` °F` respectively.
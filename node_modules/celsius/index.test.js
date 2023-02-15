const { toFahrenheit, toCelsius, toFahrenheitFmt, toCelsiusFmt } = require('./index');

describe('Celsius to Fahrenheit converter', () => {
  it('must convert F to C', () => {
    expect(toCelsius(100)).toBe(38);
    expect(toCelsius(100, 3)).toBeCloseTo(37.778);
    expect(toCelsius('105.981 degrees F', 5)).toBeCloseTo(41.10056);

    expect(toCelsiusFmt(100)).toBe('38 °C');
    expect(toCelsiusFmt(100, 3)).toBe('37.778 °C');
    expect(toCelsiusFmt('105.981 degrees F', 5)).toBe('41.10056 °C');
  });

  it('must convert C to F', () => {
    expect(toFahrenheit(36)).toBe(97);
    expect(toFahrenheit(36.68, 3)).toBeCloseTo(98.024);
    expect(toFahrenheit('-40.691 degrees C', 5)).toBeCloseTo(-41.24380);

    expect(toFahrenheitFmt(36)).toBe('97 °F');
    expect(toFahrenheitFmt(36.68, 3)).toBe('98.024 °F');
    expect(toFahrenheitFmt('-40.691 degrees F', 5)).toBe('-41.2438 °F');
  });
});

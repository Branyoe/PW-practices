//**Inyeccion de dependencias */
const { toFahrenheit, toCelsius } = require("celsius"); //uso de destructuración
// const convertFahrenheitToCelsius = require("celsius"); //modulo completo
// convertFahrenheitToCelsius.toCelsius //ejemplo de uso

//**Demo*/
const celsius = 36; //representa grados celsius
console.log(toFahrenheit(celsius)); //imprime la comversión de celsius a Fahrenheit usando toFahrenheit
console.log(toCelsius(toFahrenheit(celsius))); //imprime la comversión de Fahrenheit a celsius usando toCelsius
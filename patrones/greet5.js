//regresa un objeto personalizado para solo exponer lo deceado
let greeting = "Hello from greet5"

let greet = () => console.log(greeting);

module.exports = {
  // greet: greet
  greet //si la clave se llama igual que el valor puedes omitir la especificación de la llave
}
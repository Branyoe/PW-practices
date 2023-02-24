// const Emitter = require("./emitter.js");
const Emitter = require("events"); //al cambiar a este modulo el codigo sigue funcionando igúal
const config = require("./config");

const emtr = new Emitter();

emtr.on(config.events.GREET, () => console.log('Somewhere, someone said hello.'));

emtr.on(config.events.GREET, () => console.log('A greeting ocurred!'))

//Primero se define un evento con dos funciones
//despues detonamos el evento con el metodo emit
//estamo ejecutando funciones desde una instancia de Emitter
console.log('Hello!');
emtr.emit(config.events.GREET);

emtr.on(config.events.JUMP, () => console.log('someone jumped!'));

//estamos agregando un nuevo evento 'jump'
console.log(emtr);
emtr.emit(config.events.JUMP);
//emit no cambia su forma ya que es un metodo ya  establecido
//lo que cambia es emtr
//este es un objeto con dos propiedades
//greet y jump
// y ambos tienen una lista de callbacks almacenados


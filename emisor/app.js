const Emitter = require("./emitter.js");

const emtr = new Emitter();

emtr.on('greet', () => console.log('Somewhere, someone said hello.'));

emtr.on('greet', () => console.log('A greeting ocurred!'))

//Primero se define un evento con dos funciones
//despues detonamos el evento con el metodo emit
//estamo ejecutando funciones desde una instancia de Emitter
console.log('Hello!');
emtr.emit('greet');

emtr.on('jump', () => console.log('someone jumped!'));

//estamos agregando un nuevo evento 'jump'
console.log(emtr);
emtr.emit('jump');
//emit no cambia su forma ya que es un metodo ya  establecido
//lo que cambia es emtr
//este es un objeto con dos propiedades
//greet y jump
// y ambos tienen una lista de callbacks almacenados
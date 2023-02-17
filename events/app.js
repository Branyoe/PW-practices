let obj = {
  nombre: 'Carlos',
  edad: 44,
  apellido: 'Ulibarri',
  keypress: function() {
    return 'Se ha presionado una tecla';
  },
  mouseOver: function() {
    return 'El puntero está arriba'
  }
};
console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre'
console.log(obj[myKey]); //esta es una notacíon "notación de corchetes" y sirve para acceder a las propiedades de un objeto

//se juega con el valor de la key e imprime el valor de retorno en el metodo  
myKey = 'keypress'
console.log(obj[myKey]());

myKey = 'mouseOver'
console.log(obj[myKey]());

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function(){
  console.log('Hola desde el array');
});

//imprime todo el contenido del array y podemos obsevar
//que no hay ninguna sicriminacíon de tipo en su almacenamiento
console.log(myArray); 

//estamos accediendo a una función, guardada en un ojeto
//guardado en un array
console.log(myArray[2]['mouseOver']());

//accedemos a la posicion del array y como es una función
//nos permite invocarla
myArray[3]();

let funcArray = [];
funcArray.push(() => {
  console.log('Function 1');
});

funcArray.push(() => {
  console.log('Function 2');
});

funcArray.push(() => {
  console.log('Function 2');
});

//estamos recorriendo un array con el metodo forEach
//y cada elemento esta siendo invocado 
funcArray.forEach((item) => {
  item();
})



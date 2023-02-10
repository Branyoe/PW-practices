const greet = () => console.log('Hello');
greet();

//functions as parameterr
logGreeting = fn => fn();
logGreeting(function(){
  console.log('Hello from a function created on a fly');
});
//Estamos pasando la función greet 
//como parámetro e invocandola con el 
//nombre del argumento "fn"

//functions expression
let greetMe = () => console.log('Hello from the function expression');
greetMe();

logGreeting(greetMe)
//functions are first class, pass it as a parameter

let color = 'rojo';
let talla = 'M';
let modelo = 'Clasico';

console.log('Juan tiene una playera talla ' + talla + ' de color ' + color + ' modelo ' + modelo);
console.log(`Juan tiene una playera
talla ${talla}  
de color ${color}
modelo ${modelo}`)
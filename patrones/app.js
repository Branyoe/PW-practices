let greet = require("./greet1");
let greet2 = require("./greet2").greet;
// let greet2a = require("./greet2"); //forma recomendada cuando el mosulo solo tiene una prop
const greet3 = require("./greet3"); //objeto conrtruido/instanciado
const { greeting } = require("./greet3")
const Greet4 = require("./greet4"); //constructor

greet();
greet2();
// greet2a.greet();
greet3.greet();
greet3.greeting = "Hello from the app";

let greet3b = require("./greet3");
greet3b.greet();

let myGreet = new (Greet4)
myGreet.greet();

const greet5 = require("./greet5");
greet5.greet();
//reasignamiento en prop
greet5.greet = 3;
console.log(greet5.greet);
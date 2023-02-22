function Greetr(){
  this.greeting = "Hello from de function constructor";
  this.greet = function(){
    console.log(this.greeting);
  }
}

module.exports = new Greetr; //no es muy recomendado porque la referecia es siempre a un mismo objeto instaciado en memoria
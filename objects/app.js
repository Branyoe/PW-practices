//es un objeto literál JSON
let persona = {
  //propiedades
  nombre: 'Yoel',
  apellido: 'Hernández',
  domicilio: { //objeto anidado
    calle: "Madero #144",
    colonia: "Centro",
    cp: 28000,
    municipio: "Colima"
  },
  //metodos
  //retorna el nombre de la persona
  getName: function () { 
    return `${this.nombre} ${this.apellido}` 
  },
  //retorna la dirección de la persona
  getAddress: function () {
    const {calle, colonia, cp, municipio} = this.domicilio;
    return `${calle} ${colonia} CP: ${cp},${municipio}`
  }
};

//impresiones
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.getName());
console.log(persona.domicilio);
console.log(persona.getAddress());

// Definimos una función constructora llamada Person
function Cliente(nombre, anioNacimiento, direccion) {
  //Propiedades privadas
  const actual = new Date().getFullYear();

  //Métodos privados
  const saludo = function() {
    return 'Hola';  
  };

  //Propiedades públicas
  this._nombre = nombre;
  this._anioNacimiento = anioNacimiento;
  this._edad = actual - anioNacimiento;
  this._direccion = direccion;

  //Métodos públicos
  this.presentarse = function() {
    return`${saludo()}, mi nombre es ${this._nombre} y tengo ${this._edad} anios`;
  };
}

// Crear instancias de objetos usando la función constructora
const cliente1 = new Cliente('Juan', 1997, 'California');

console.log(cliente1.constructor === Cliente) // true
console.log(typeof cliente1, typeof Cliente); // object, function
console.log(cliente1.presentarse());

Cliente.prototype.despedirse = function() {
  return 'Adios !'
}

console.log(cliente1.despedirse()); // 'Adios!'
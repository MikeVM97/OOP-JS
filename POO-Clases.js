// UTILIZANDO CLASES (ES2015 - ES6)

// ✅ CLASES E INSTANCIAS

// Crear una clase llamada Person
class Person {
  // Propiedades
  name;

  // Constructor
  constructor(name) {
    this.name = name;
  }
  
  // Métodos
  introduceSelf() {
    return `¡Hola!, soy ${this.name}`
  }
}


// Instacia de la clase Person
const person1 = new Person('Gerard');
console.log(person1); // Person { name: 'Gerard' }
console.log(person1 instanceof Person); // true
console.log(person1.introduceSelf()); // 'Hola, soy Gerard'
console.log(Person.age)





// ✅ HERENCIA (extends, super)
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  // ✅ POLIMORFISMO: Sobreescribe el método de la clase heredada.
  introduceSelf() {
    console.log(
      `Mi nombre es ${this.name}, yo seré tu profesor de ${this.teaches}`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

const walsh = new Professor("Walsh", "Psicología");
walsh.introduceSelf(); // 'Mi nombre es Walsh, yo seré tu profesor de Psicología'

walsh.grade("mi tarea"); // una calificación aleatoria






// ✅ ENCAPSULAMIENTO: ocultar métodos y propiedades(#).
class Student extends Person {
  // Propiedad privada
  #year

  constructor(name, year, city) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(
      `${this.#greetings()} me llamo ${this.name} y estoy en el año ${this.#year}.`,
    );
  }

  canStudyArchery() {
    return this.#year > 1;
  }

  // Método privado
  #greetings() {
    return '¡Hola!'
  }
}

const summers = new Student("Summers", 2, 'California');

summers.introduceSelf(); // ¡Hola! me llamo Summers y estoy en el año 2.
console.log(summers.canStudyArchery()) // true

console.log(summers.name) // Summers
// PROPIEDAD PRIVADA Y MÉTODO PRIVADO ==> UNDEFINED
console.log(summers.year) // undefined
console.log(summers.greetings()) // undefined
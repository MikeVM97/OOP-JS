const URL = 'https://jsonplaceholder.typicode.com/todos';

class SuperHero {
  static staticProperty = 'Propiedad estática, solo puede ser invocado fuera de la clase.';
  static staticMethod = function() {
    return 'Método estático, solo puede ser invocado fuera de la clase.';
  }
  constructor(name, gender, superPowers) {
    this.name = name;
    this.gender = gender;
    this.superPowers = superPowers;
  }
  async getData() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  getName() {
    return this.name;
  }
  // Getters & Setters
  get Name() {
    return this.name;
  }
  set Name(newName) {
    this.name = newName;
  }
  
}

const avatar1 = new SuperHero('Batman', 'male', ['SuperFly', 'SuperCut']);

// static
console.log(SuperHero.staticProperty);
console.log(SuperHero.staticMethod());

// async
// avatar1.getData(); // ALL DATA

// getters, la diferencia entre get y funciones RADICA EN la forma como se invocan.
console.log(avatar1.getName()); // 'Batman'
console.log(avatar1.Name); // 'Batman'

// setters
avatar1.Name = 'Robbin';
console.log(avatar1.Name); // 'Robbin'
console.log(avatar1.getName()); // 'Robbin'

// los settes no son la única forma de reemplazar una propiedad.
avatar1.gender = 'female'
console.log(avatar1.gender); // 'female'


class Animal {
  public nombre: string; // Accesible desde cualquier lugar
  private edad: number; // Accesible solo dentro de la clase
  protected tipo: string; // Accesible dentro de la clase y subclases

  constructor(nombre: string, edad: number, tipo: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo;
  }

  public getEdad(): number {
    return this.edad;
  }

  public async getData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

class Perro extends Animal {
  constructor(nombre: string, edad: number) {
    super(nombre, edad, "Perro");
  }

  public mostrarDetalles(): void {
    console.log(`Nombre: ${this.nombre}`); // Acceso público
    console.log(`Edad: Dato privado, no accesible`); // Error, acceso privado
    console.log(`Tipo: ${this.tipo}`); // Acceso protegido
  }
}

const miPerro = new Perro("Buddy", 3);

console.log(miPerro.getEdad()); // Acceso a método público
miPerro.mostrarDetalles(); // Llamando a un método de la subclase

// public, accesible desde cualquier lugar.
console.log(miPerro.nombre); // Output: Buddy
console.log(miPerro.getData());

// protected, accesible desde la misma clase o sub-clases.
// console.log(miPerro.tipo)
// Aqui no puede ser accesible, pero sí en la clase Perro (línea 19,25)

// private, accesible únicamente desde la misma clase.
// console.log(miPerro.edad)
// Aquí no puede ser accesible, tampoco en la clase Perro. Solo puede usarse dentro de la clase Animal.
// Person.js - Define and export the Person class

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // Export the Person class
  export default Person;
  
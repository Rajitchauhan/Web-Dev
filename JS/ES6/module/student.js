// Student.js - Import the Person class and extend it

import Person from './module';

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

// Export the Student class
export default Student;

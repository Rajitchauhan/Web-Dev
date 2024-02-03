// app.js - Use the imported classes

import Person from './module';
import Student from './module';

// Create instances of the classes
let john = new Person("John Doe", 25);
let alice = new Student("Alice", 20, "A");

// Call methods on the instances
john.displayInfo();  // Output: Name: John Doe, Age: 25
alice.displayInfo(); // Output: Name: Alice, Age: 20, Grade: A
alice.study();       // Output: Alice is studying.


// In JavaScript, class import/export functionality is commonly used in 
// modular programming to organize code into separate files or modules. 
// The import and export keywords allow you to define and use classes across different files.
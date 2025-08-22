// Example of Node js Inheritance No.39

// Parent class (common for all persons)
class Person {
  constructor(name, age) {
    this.name = name;   // store name
    this.age = age;     // store age
  }

  talk() {
    console.log(`your name is ${this.name}`); // method for speaking
  }
}

// Student class (child of Person)
class Student extends Person {
  constructor(name, age, marks) {
    super(name, age);    // call parent constructor (Person)
    this.marks = marks;  // store student marks
    console.log("student called"); // message when student created
  }
}

// Teacher class (child of Person)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);     // call parent constructor (Person)
    this.subject = subject; // store teacher subject
    console.log("teacher called"); // message when teacher created
  }
}

// Create a student object
let s1 = new Student("sp", 20, 95);
// Output: "student called"

// Create a teacher object
let t1 = new Teacher("pp", 21, "maths");
// Output: "teacher called"

// Example usage
s1.talk(); // from parent -> "your name is sp"
t1.talk(); // from parent -> "your name is pp"

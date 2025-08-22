// function Project(name,age){
//   this.name = name;
//   this.age = age;
// }

// const { time } = require("console");

// p1 = new Project("shakti",20);
// p2 = new Project("bhakti",22);

// console.log(p1)
// console.log(p2)


class Persion{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  talk(){
    console.log(`your name is ${this.name}`)
  }
}

class Student extends Persion{
  constructor(name, age, marks){
    super(name,age) //parent called
    this.marks = marks;
    console.log("student called")
  }
}

class Teacher extends Persion{
  constructor(name, age, subject) {
    super(name,age) //parent called
    this.subject = subject;
    console.log("teacher called")
  }
}

let s1 = new Student("sp",20,95);
let t1 = new Teacher("pp",21,"maths");
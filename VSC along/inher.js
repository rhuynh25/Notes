//Define a person class with a constructor that sets the name and age properties

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Employee extends Person {
    //constructor for employee that takes the name,age, position: call the parent class constuctor
    constructor(name, age, position) {
      super(name, age);
      this.position = position;
    }
    //overde displayInfo method to include the position
    displayInfo() {
      console.log(
        Name: ${this.name}, Age:${this.age}, Position: ${this.position}
      );
    }
  }
  //create a new employee instance with the name , age , and position
  const employee1 = new Employee("Chris", 21, "Apprentice");
  const employee2 = new Person("Tom", 22, "Apprentice");
  //call the method
  employee1.displayInfo();
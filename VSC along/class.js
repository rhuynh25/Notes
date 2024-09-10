// Creating a class named Person

class Person { // Instance

constructor(name,age){
// "BluePrint"
  this.name = name; // Properties
  this.age = age;
  }
// Method to display informotation
  displayInfo(){
  console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// We are now creating an Object "AKA REAL PERSON" of the Person Class "AKA BLUEPRINT"
const person1 = new Person ("Richard", 26); //We created an Object or "person"
const person2 = new Person ("notRichard", 24);

person1.displayInfo(); // Output Name: Richard, 26
person1.displayInfo(); // Output Name: notRichard, 24



// EXAMPLE 2

class Student{
  constructor(name,age, grades){ //"BluePrint aka CONSTRUCTOR"
    this.name = name;
    this.age = age;
    this.grades = grades;
  }

  calculateAverageGrades(){ //Method calculates the avg grade
const sum = this.grades.reduce((total.grade) => total + grade, 0);
return sum / this.grades.length;
  }
}

const student = new Student("Richard", 26, {85, 90, 92, 88});
console.log("Average Grade:", student.calculateAverageGrades());





//OOP JS Practice 
class animals {
  constructor(){
  this.name = name;
  this.species = species;
  this.age = age;
  }

  


}
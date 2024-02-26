class student {
//private field
#password
#lastName
this.#lastName = lastName;

    //constructor function
    showInfo(fullName, age, isActive, payment) {
        this.fullName = fullName;
        this.age = age;
        this.isActive = isActive;
        this.payment = payment;
    }

}
const student1 = new student("İlke İlker", 25, false, 30000);
student1.showInfo();

herb.prototype = {
    constructor: "Herb",
    zone: "Akdeniz", "Marmara" 
    }

function cat(name) {
    this.name = name;
}

typeof cat.prototype;

introduce() {
    console.log("Hello, I am a admin");
}

function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");
  Dog.prototype.isPrototypeOf(beagle);
  Object.prototype.isPrototypeOf(Dog.prototype);// prototip özelliğine ulaşmak için kull

  let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Boncuk", "yellow");
  
  canary instanceof Bird;


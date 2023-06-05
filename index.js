//Static Methods and Properties

class Governor { 

  static staticGoverner(name, age, city) {
    console.log(`name: ${name} - age: ${age} - city: ${city}`)
  }
}

Governor.staticGoverner('Jack', 55, 'Seattle')

// --------------------------------------------------------------//----------------------------------------------------//

class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}. Nice to meet you!`);
  }

  introduce() {
    console.log(`I am ${this.age} years old and I live in ${this.city}.`);
  }

  celebrateBirthday() {
    this.age++;
    console.log(`Happy birthday to me! Now I am ${this.age} years old.`);
  }
}

class PostalWorker extends Person {
  deliverMail() {
    console.log(`${this.name} is delivering mail to the address ${this.city}.`);
  }

  collectMail() {
    console.log(`${this.name} is collecting mail from the address ${this.city}.`);
  }
}

class Chef extends Person {
  prepareDish(dish) {
    console.log(`${this.name} is preparing ${dish} in the kitchen.`);
  }

  serveDish(dish) {
    console.log(`${this.name} is serving ${dish} to the customers.`);
  }
}

const postalWorker1 = new PostalWorker("John Doe", 30, "123 Main St");
const postalWorker2 = new PostalWorker("Jane Smith", 35, "456 Elm St");

const chef1 = new Chef("Maedot Tamir", 40, "789 street");
const chef2 = new Chef("Naoh Alex", 45, "987 Rd");

postalWorker1.greet();
postalWorker1.introduce();
postalWorker1.deliverMail();
postalWorker1.collectMail();

postalWorker2.celebrateBirthday();
postalWorker2.introduce();
postalWorker2.deliverMail();
postalWorker2.collectMail();

chef1.greet();
chef1.prepareDish("Spaghetti Meat Ball");
chef1.serveDish("Spaghetti Meat Ball");

chef2.celebrateBirthday();
chef2.introduce();
chef2.prepareDish("Grilled Salmon");
chef2.serveDish("Grilled Salmon");

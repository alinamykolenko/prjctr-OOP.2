"use strick";

function War() {
  this.reminder = "STOP WAR IN UKRAINE - STAND WITH UKRAINE";
}

War.prototype.remind = function () {
  console.log(this.reminder);
};

// ------------------------------------------------------------------------

function Flower(name, colour, amount) {
  War.call(this);
  this.name = name;
  this.colour = colour;
  this.amount = amount;
  this.flowerShop = "Peremohy st 67, Kyiv";
}

Flower.prototype = Object.create(War.prototype);

Flower.prototype.whatColour = function () {
  console.log(`${this.name} is available in ${this.colour} colour.`);
};

Flower.prototype.whereToBuy = function () {
  console.log(
    `You can buy ${this.name} in a flower shop at ${this.flowerShop}`
  );
};
Flower.prototype.howMany = function () {
  console.log(`We have ${this.amount} ${this.name}s in our flower shop.`);
};

const rose = new Flower("Rose", "white", 4);

rose.remind();
rose.whatColour();
rose.whereToBuy();
rose.howMany();

console.log(rose);

// ------------------------------------------------------------------------

function Student(firstName, secondName, faculty, phrase, job) {
  War.call(this);
  this.firstName = firstName;
  this.secondName = secondName;
  this.faculty = faculty;
  this.phrase = phrase;
  this.job = job;
}

Student.prototype = Object.create(War.prototype);

Student.prototype.introduction = function () {
  console.log(
    `Hello! My name is ${this.firstName} ${this.secondName} and I study ${this.faculty}`
  );
};

Student.prototype.work = function () {
  console.log(`Currently I work as a ${this.job}`);
};

Student.prototype.sayPhrase = function () {
  console.log(this.phrase);
};

const maryna = new Student(
  "Maryna",
  "Nykytenko",
  "History",
  "I would like to reccomend our university",
  "tutor"
);

maryna.remind();
maryna.introduction();
maryna.work();
maryna.sayPhrase();
console.log(maryna);

// ------------------------------------------------------------------------

function Hospital() {
  War.call(this);
  this.department = "emergency";
  this.address = "Front St 205, Kyiv";
  this.phone = "+38 066 567 45 67";
}
Hospital.prototype = Object.create(War.prototype);

Hospital.prototype.findHospital = function () {
  console.log(`Hospital address: ${this.address}. Tel: ${this.phone}`);
};

// ------------------------------------------------------------------------

function Patient(name, symptom, daysInHospital) {
  Hospital.call(this);
  this.name = name;
  this.symptom = symptom;
  this.daysInHospital = daysInHospital;
}

Patient.prototype = Object.create(Hospital.prototype);

Patient.prototype.introducePatient = function () {
  console.log(`${this.name} has ${this.symptom}`);
};

Patient.prototype.takeMedicine = function () {
  console.log(`${this.name}, dont forget to take medicine`);
};

Patient.prototype.days = function () {
  console.log(
    `${this.name} stays in the hospital for ${this.daysInHospital} days`
  );
};

const stepan = new Patient("Stepan Semenov", "fever", 5);

stepan.remind();
stepan.findHospital();
stepan.introducePatient();
stepan.takeMedicine();
stepan.days();
console.log(stepan);

// ------------------------------------------------------------------------

function Doctor(name, experience, type) {
  Hospital.call(this);
  this.name = name;
  this.experience = experience;
  this.type = type;
  this.salary = 3000;
}

Doctor.prototype = Object.create(Hospital.prototype);

Doctor.prototype.introduceYourself = function () {
  console.log(
    `My name is ${this.name}, I work in an ${this.department} department.`
  );
};

Doctor.prototype.needToKnow = function () {
  console.log(
    `I am a ${this.type} and I have ${this.experience} of experience`
  );
};

Doctor.prototype.countSalary = function (numberOfPatients) {
  if (numberOfPatients < 10) {
    console.log(`Your salary ${this.salary}$`);
  } else if (numberOfPatients >= 10 && numberOfPatients < 20) {
    this.salary = this.salary * 2;
    console.log(`Your salary ${this.salary}$`);
  } else {
    this.salary = this.salary * 3;
    console.log(`Your salary ${this.salary}$`);
  }
};

const drJohn = new Doctor("John Didyk", "10 years", "surgeon");

drJohn.remind();
drJohn.findHospital();
drJohn.introduceYourself();
drJohn.needToKnow();
drJohn.countSalary(24);
console.log(drJohn);

// Classes in ES6: used for numerous reason:
// Reuse code

// Car, make, model, vin, getDescription(),

class Person {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	getGretting() {
		return `Hi my name is ${this.firstName + " " + this.lastName}`;
	}

	getDescription() {
		return `${this.firstName} ${this.lastName} is ${this.age}`;
	}
}

class Student extends Person {
	constructor(firstName, lastName, age, major) {
		super(firstName, lastName, age);
		this.major = major;
	}

	hasMajor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();
		return this.hasMajor()
			? `${description} and I am a ${this.major} student`
			: `${description}`;
	}
}

const me = new Person("Gonzalo", "Betancourt", 34);
const student = new Student("Alexa", "Betancourt", 8, "CSI");
console.log(me.getGretting());
console.log(me.getDescription());
console.log(student.hasMajor());
console.log(student.getDescription());

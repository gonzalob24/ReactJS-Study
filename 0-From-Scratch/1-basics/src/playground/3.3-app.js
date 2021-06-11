import React from "react";
import ReactDOM from "react-dom";

// components
import IndecisionApp from "./components/IndecisionApp";

const appRoot = document.querySelector("#app");

ReactDOM.render(<IndecisionApp />, appRoot);

class OldSyntax {
	constructor() {
		this.name = "Mike";
		this.getGreeting = this.getGreeting.bind(this);
	}

	getGreeting() {
		return `Hi my name is ${this.name}`;
	}
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax.getGreeting());
// name becomed undefined I need to bind
console.log("Get Gretting: ", getGreeting());
console.log("Old syntax: ", oldSyntax);

// ---- New syntax does not need me to write the constructor function or bind method

class NewSyntax {
	name = "Jen";

	getGreeting = () => {
		return `Hi my name is ${this.name}`;
	};
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log("NewSyntax: ", newSyntax);
console.log("New Get Greeting: ", newGetGreeting());

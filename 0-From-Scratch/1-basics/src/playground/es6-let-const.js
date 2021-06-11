var nameVar = "Gonzalo";
// I can reassign and declare variable again
var nameVar = "Alexa";
// let i can reassign but I cant declare it again
let nameLet = "Gonzalo";
nameLet = "Alison";
// I cannot reassing const nor declare it again
const nameConst = "Maria";

// Block level scope: let and const
function petName() {
	var petName = "Canelo";
	return petName;
}

var fullName = "Gonzalo Betancourt";
if (fullName) {
	var firstName = fullName.split(" ")[0];
	// let firstName = fullName.split(" ")[0];
}

console.log("nameVar: ", nameVar);
console.log("nameLet: ", nameLet);
console.log("nameConst: ", nameConst);
console.log("Petname: ", petName());
console.log("First name: ", firstName);

//we could use a regular function

function createNewPerson(name){
	const obj = {};
	obj.name = name;
	obj.greeting = function(){
		alert ('Hi, I am ' + obj.name + '.');
	};
	return obj;
}

//same as above but this is  better way, lets use a constuctor function
/*function Person(name){
	this.name = name;
	this.greeting = function(){
		alert ('Hi, I am ' + this.name + '.');
	};	
}

//this is how we call the constructor function to make some new objects
const person1 = new Person ('Bob');
const person2 = new Person ('Ross');*/

function Person(first, last, age, gender, interests){
	this.name = {
		first : first,
		last : last
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;

	this.bio = function(){
		alert(this.name.first + ' ' + this.name.last  + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + this.interests[1] + '.');
	}
	this.greeting = function(){
		alert('Hi, I am ' + this.name.first + '!');
	};
}

const person1 = new Person('Bob', 'Ross', 55, 'male', ['painting', 'nature', 'creativity']);

//Object Constructor
//storing an empty object in the person2 variable
const person2 = new Object();

person2.name = 'Bob';
person2.age = 55;
person2.greeting = function(){
	alert('Hello I am ' + this.name + '.');
}

// you can also pass an object literal to the object Cnstructor as a parameter
const person3 = new Object({
	name : 'Bob',
	age : 30,
	greeting : function(){
		alert('Hello there ' + this.name + '.');
	}
});

//can also use the create method, this is good when you only want to create a few instances of these objects
//with it you can create a new object based on any existing object
const person4 = Object.create(person3);

person4.name;
person4.greeting();

//create method does not support IE8



// data types
// javascript is a dynamically typed language that does
//  not require you to declare the data type before adding value to variable 
// e.g in c# you will have to call the data type e.g int y = 30
// where y must always be an integer

// lernt typeof
// typeof outputs the datatype of a value.

let x = 10;
let y = "cat";
let z = true;
console.log(typeof  x);
console.log(typeof  y);
console.log(typeof  z);


// this shows the datatypes

// null datatype is a bug in js
let a = null;
console.log(typeof a);
// null is regarded as an object

// objects
// Object: An object is a collection of key-value pairs. The key is the property name, and the value is the property value.
// Here, the pet object has three properties or keys: name, age, and type. The values are Fluffy, 3, and dog, respectively.

// let pet = {
//   name: "Fluffy",
//   age: 3,
//   type: "dog"
// };

// pet is the object.
// name,age,type are properties or property names
// fluffy,3,dog are property values

// symbol data types
// this is a unique and immutable value that may be used as an identifier for object properties

/*
Symbol: The Symbol data type is a unique and immutable value that may be used as an identifier for object properties.
In this example below, two symbols are created with the same description, but they are not equal.

const crypticKey1= Symbol("saltNpepper");
const crypticKey2= Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2); // false
*/ 
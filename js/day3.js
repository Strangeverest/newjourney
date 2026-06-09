// bracket notation and how it works
/*
bracket notation uses the square brackets to get charachers from a string
i.e
*/ 
// let name = "Amaka";
// console.log(name[2]);
// this outputs the third letter which is "a" because counting an array starts from zero, it basically how array works in php,dont know yet abou js

// let swear = "godpunishyou";
// console.log(swear[swear.length -1]);
// the variable.lenght shows us how many characters are in the string, while the minus one telss us to take the last on from the array/string

// let swear = "godpunishyou";
// console.log(swear[swear.length -5]);
// this outputs s because we took the last fifth character from the string
// using negative length it counts bacwards from 1 not zero unlike from the front of the array

let swear = "godpunishyou";
console.log(swear[swear.length -0]);
// this outputs undefined because we can subtract zero or so i think

// If you want to get multiple characters, you can use bracket notation like this:

// let greeting = "hello";
// let firstTwo = greeting[0] + greeting[1]; // "he"
// console.log(firstTwo);



// templates literals and interpolation

// They allow for easier string manipulation, including embedding variables directly inside a string, a feature known as string interpolation.

// Template literals make it easier to create strings that span multiple lines or include expressions (like variables or even JavaScript code) directly within the string.

// Here's an example of a template literal:

const name = "Alice";
const greeting = `Hello, ${name}!`;

console.log(greeting);
// Notice the use of backticks instead of single or double quotes. The ${name} syntax is an example of string interpolation, where the value of the variable name is directly inserted into the string.

// Here is an example using string concatenation and the plus (+) operator:

const name = "Alice";
const age = 25;
const message = "My name is " + name + " and I am " + age + " years old.";
console.log(message); 

// And here is an example using template literals and string interpolation:

const name = "Alice";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); 

// Another great feature of template literals is that they support multiline strings. With regular strings, you would need to use escape characters (\n) to create new lines. With template literals, you can simply write the string across multiple lines, and the formatting is preserved:

let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poem);
// Another feature of template literals is that they allow you to embed JavaScript expressions directly within the string, like in this example:

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output); 
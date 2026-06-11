// let sentence = "JavaScript is6 awesome!";
// let position = sentence.indexOf("awesome!");
// console.log(position); // 14


// Now, let's see what happens when the substring isn't found:

let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("fantastic");
console.log(position); // -1

// You can also specify where to begin searching within the string by providing a second argument to indexOf(). Here's an example:

let sentence = "JavaScript is awesome, and JavaScript is powerful!";
let position = sentence.indexOf("JavaScript", 10);
console.log(position); // 27
// In this case, the search for JavaScript begins after the 10th character, and so the second occurrence of JavaScript is found at index 27.
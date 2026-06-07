// let age;
// console.log(age); 
// // this will return undefined

// let age = 40;
// console.log(age); 
// // this output 40

// let age = 20;
// console.log(age); 
// age = 70
// console.log(age)
// // this outputs 70 because let is a flexible container


// const maxScore = 70;
// console.log(maxScore);
// this outputs 70

// const maxScore = 70;
// maxScore = 50;
// console.log(maxScore);
// this throws err


// let developer = "Kami";
// console.log(developer);
// this outputs Kami


// let developer = "Kami";
// console.log(developer);
// developer = "doctor";
// console.log(developer);
// this outputs kami then doctor

// let developer = "Kami";
// developer = "doctor";
// console.log(developer);
// this outputs doctor

// CONCATENATIONS

// let firstName = "Kami";
// let lastName = "Sama";
// console.log(firstName + " " + lastName);
// this outputs Kami Sama

// let firstName = "Kami";
// let lastName = "Sama";
// console.log(firstName + lastName);
// this outputs KamiSama

// let firstName = "Kami";
// firstName += " , Hello";
// console.log(firstName);
// this outputs Kami , Hello

// let firstName = "Kami";
// firstName =+ " , Hello";  err is here +=
// console.log(firstName);
// outputs NaN

// concat() method

let firstName = "Kami";
let lastName = "Sama";
let fullName = firstName.concat(" " , lastName).concat(" ", firstName);
console.log(fullName);
// this outputs kami Sama
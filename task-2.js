// Task 2
// Given the object below, increase the age property by 1. Then, output the whole object to the console.
const person = {
    firstName: "Martha",
    lastName: "Martin",
    age: 27
};
// Expected output:
// {
//     firstName: "Martha",
//     lastName: "Martin",
//     age: 28
// };

person.age += 1;
console.log(person);
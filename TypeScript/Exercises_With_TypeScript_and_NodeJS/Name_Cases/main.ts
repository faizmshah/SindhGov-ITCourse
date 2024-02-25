// declared a variable called "myName" by using let keyword, string is the data type of data stored in the variable, "Faiz"
let myName: string ="Faiz m shah";

// Print in loweracse
console.log(`Lowercase: ${myName.toLowerCase()}`);

//Print in Uppercase

console.log(`Uppercase: ${myName.toUpperCase()}`);

// Print in Title

console.log(`Titlecase: ${myName.replace(/\b\w/g,c=> c.toUpperCase())}`);
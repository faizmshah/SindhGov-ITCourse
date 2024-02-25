// declared a variable called "myName" by using let keyword, string is the data type of data stored in the variable, "Faiz"
var myName = "Faiz m shah";
// Print in loweracse
console.log("Lowercase: ".concat(myName.toLowerCase()));
//Print in Uppercase
console.log("Uppercase: ".concat(myName.toUpperCase()));
// Print in Title
console.log("Titlecase: ".concat(myName.replace(/\b\w/g, function (c) { return c.toUpperCase(); })));

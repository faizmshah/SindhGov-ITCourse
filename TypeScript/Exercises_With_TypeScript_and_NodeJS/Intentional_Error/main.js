/* Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
var Games = ["Cricket", "Foot Ball", "Ludo", "Pubg",];
// Attempting to access an index that is out of bounds
console.log(Games[4]); // This line will produce an index error
console.log("List of Games, I play:");
Games.forEach(function (Games, index) {
    console.log("".concat(index + 1, ". ").concat(Games));
});
console.log(Games);

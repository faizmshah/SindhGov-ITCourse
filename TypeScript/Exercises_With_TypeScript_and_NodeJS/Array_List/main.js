var Games = ["Cricket", "Foot Ball", "Ludo", "Pubg",];
console.log("List of Games, I play:");
Games.forEach(function (Games, index) {
    console.log("".concat(index + 1, ". ").concat(Games));
});

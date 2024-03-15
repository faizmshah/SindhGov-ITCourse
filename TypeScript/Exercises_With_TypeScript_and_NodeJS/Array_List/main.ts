let Games: string[] = ["Cricket","Foot Ball","Ludo","Pubg",];

console.log("List of Games, I play:");
Games.forEach((Games, index) => {
    console.log(`${index + 1}. ${Games}`);
});

// initializing an array
var friends = ["Mustafa", "Tanveer", "Azeem"];
// Print initial invitations
console.log("Initial Invitations:\n");
// sending invitation to initial array list.
friends.forEach(function (inviteToDinner) {
    console.log("Hey ".concat(inviteToDinner, ", we're having a dinner at our place next Monday, would you like to come over?\n"));
});
// absent friends
var absentFriends = friends[1];
// printing message for absent friends
console.log("\nUnfortunately ".concat(absentFriends, ", can't make to dinner."));
// changing array list
friends = ["Mustafa", "Tahir", "Azeem"];
// sending invitations to updated array list.
console.log("\nUpdated Invitations:\n");
friends.forEach(function (invitation) {
    console.log("Hey ".concat(invitation, ", we're having a dinner at our place next Monday, would you like to come over?\n"));
});
console.log("Good News: We found a bigger dinner table!");
// Add one new guest to the beginning of the array
friends.unshift("Ali");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(friends.length / 2);
friends.splice(middleIndex, 0, "Sara");
// Add one new guest to the end of the array
friends.push("ahmed");
// Print Final Invitations.
console.log("\nBig table Invitations:\n");
friends.forEach(function (biginvite) {
    console.log("Hey ".concat(biginvite, ", we're having a dinner at our place next Monday, would you like to come over?\n"));
});

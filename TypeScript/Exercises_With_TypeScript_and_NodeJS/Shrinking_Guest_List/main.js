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
// Print a message saying that you can invite only two people for dinner
console.log("Sorry, we can only invite two people for dinner.");
// Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, 
// Print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (friends.length > 2) {
    var removedGuest = friends.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner.\n"));
}
// Print a message to each of the two people still on your list, letting them know they’re still invited.
friends.forEach(function (invitation) {
    console.log("Hey ".concat(invitation, ", you're still invited to dinner.\n"));
});
//  Remove the last two names from your list, so you have an empty list
friends.pop();
friends.pop();
// Print your list to make sure you actually have an empty list at the end of your program.
console.log("Final Guest List:", friends);

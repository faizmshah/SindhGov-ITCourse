// initializing an array
var friends = ["Ali", "Mustafa", "Tanveer", "Azeem", "Shafique"];
// Print initial invitations
console.log("Initial Invitations:\n");
// sending invitation to initial array list.
friends.forEach(function (inviteToDinner) {
    console.log("Hey ".concat(inviteToDinner, ", we're having a dinner at our place next Monday, would you like to come over?\n"));
});
// absent friends
var absentFriends = friends[2];
// printing message for absent friends
console.log("\nUnfortunately ".concat(absentFriends, ", can't make to dinner."));
// changing array list
friends = ["Ali", "Mustafa", "Tahir", "Azeem", "Shafique"];
// sending invitations to updated array list.
console.log("\nUpdated Invitations:\n");
friends.forEach(function (invitation) {
    console.log("Hey ".concat(invitation, ", we're having a dinner at our place next Monday, would you like to come over?\n"));
});

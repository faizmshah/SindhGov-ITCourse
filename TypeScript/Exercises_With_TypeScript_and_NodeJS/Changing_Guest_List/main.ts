// initializing an array
let friends: string[] = ["Ali", "Mustafa", "Tanveer", "Azeem", "Shafique"];

// Print initial invitations
console.log("Initial Invitations:\n");
// sending invitation to initial array list.
friends.forEach((inviteToDinner) => {
    console.log(`Hey ${inviteToDinner}, we're having a dinner at our place next Monday, would you like to come over?\n`)
});

// absent friends
let absentFriends = friends [2];

// printing message for absent friends
console.log(`\nUnfortunately ${absentFriends}, can't make to dinner.`)

// changing array list
friends = ["Ali", "Mustafa", "Tahir", "Azeem", "Shafique"];

// sending invitations to updated array list.
console.log("\nUpdated Invitations:\n");
friends.forEach((invitation) => {
    console.log(`Hey ${invitation}, we're having a dinner at our place next Monday, would you like to come over?\n`);
});


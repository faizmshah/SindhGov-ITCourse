// Initialize the array
let placesToVisit: string[] = ["Makkah", "Madina", "Italy", "Germany","Norway" ];

// Print the array in its original order
console.log("1. Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("2. Alphabetical Order:", placesToVisit.sort());

// Show that the array is still in its original order
console.log("3. Original Order (still):", placesToVisit);

// Print the array in reverse alphabetical order without modifying the original list
console.log("4. Reverse Alphabetical Order:", placesToVisit.sort().reverse());

// Show that the array is still in its original order
console.log("5. Original Order (still):", placesToVisit);

// Reverse the order of the list and print it
placesToVisit.reverse();
console.log("6. Reversed Order:", placesToVisit);

// Reverse the order of the list again and print it
placesToVisit.reverse();
console.log("7. Back to Original Order:", placesToVisit);

// Sort the array in alphabetical order and print it
placesToVisit.sort();
console.log("8. Sorted in Alphabetical Order:", placesToVisit);

// Sort the array in reverse alphabetical order and print it
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("9. Sorted in Reverse Alphabetical Order:", placesToVisit);
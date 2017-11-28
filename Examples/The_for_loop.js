// i = 0                Initialization
// Say "hey" if i < 3   Condition
// Increase i by 1      final-expression

// 0 "hey"
// 1 "hey"
// 2 "hey"
// 3 stop

// ****** Important instead of i < 3 use i var.length and this will run for 
// length of the array.

for (var i = 0; i < 3; i++) {
    console.log("hey");
}

// i = i + 1
// i++
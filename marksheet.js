
// Grade Checking

let sub1 = 85;
let sub2 = 90;
let sub3 = 75;

let total = sub1 + sub2 + sub3;
let avg = total / 3;

console.log("Subject 1:", sub1);
console.log("Subject 2:", sub2);
console.log("Subject 3:", sub3);

console.log("Total Marks:", total);
console.log("Average Marks:", avg);

// Pass or Fail Checking
if (sub1 < 35 || sub2 < 35 || sub3 < 35) {
    console.log("Result: Fail");
    console.log("Grade: No Grade");
}
else {
    console.log("Result: Pass");

    // Grade Checking
    if (avg >= 90) {
        console.log("Grade: A+");
    }
    else if (avg >= 75) {
        console.log("Grade: B+");
    }
    else if (avg >= 50) {
        console.log("Grade: C");
    }
    else if (avg >= 35) {
        console.log("Grade: D");
    }
    else {
        console.log("Grade: F");
    }
}

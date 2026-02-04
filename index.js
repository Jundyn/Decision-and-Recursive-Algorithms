// ------------------------
// DECISION MAKING TASKS
// ------------------------

// 1) Leap Year Checker

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Testing Leap Year

console.log("=== Leap Year Tests ===");
let leapYears = [2000, 1900, 2004, 2023];
leapYears.forEach(year => {
    console.log(`${year}: ${isLeapYear(year) ? "Leap Year" : "Not a Leap Year"}`);
});
// Expected output:
// 2000: Leap Year
// 1900: Not a Leap Year
// 2004: Leap Year
// 2023: Not a Leap Year

// 2) Ticket Pricing

function getTicketPrice(age) {
    if (age <= 12) return 10;
    else if (age <= 17) return 15;
    else return 20;
}

// Testing Ticket Pricing
console.log("\n=== Ticket Pricing Tests ===");
let ages = [5, 13, 18, 30];
ages.forEach(age => {
    console.log(`Age ${age}: $${getTicketPrice(age)}`);
});
// Expected output:
// Age 5: $10
// Age 13: $15
// Age 18: $20
// Age 30: $20


// ------------------------
// RECURSION TASKS
// ------------------------

// 1) Fibonacci Sequence
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Testing Fibonacci
console.log("\n=== Fibonacci Tests ===");
let fibTests = [0, 1, 5, 8];
fibTests.forEach(n => {
    console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);
});
// Expected output:
// Fibonacci(0) = 0
// Fibonacci(1) = 1
// Fibonacci(5) = 5
// Fibonacci(8) = 21

// 2) Palindrome Checker
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (str.length <= 1) return true;
    if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1));
    return false;
}

// Testing Palindrome Checker
console.log("\n=== Palindrome Tests ===");
let strings = ["Racecar", "Hello", "A man, a plan, a canal, Panama", "12321"];
strings.forEach(s => {
    console.log(`"${s}": ${isPalindrome(s) ? "Palindrome" : "Not a Palindrome"}`);
});

// Expected output:
// "Racecar": Palindrome
// "Hello": Not a Palindrome
// "A man, a plan, a canal, Panama": Palindrome
// "12321": Palindrome

// ********** Day 0: Hello, World! ********** //

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    //console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
}

// **************************************************************************************************** //

// ********** Day 0: Data Types  ********** //

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
    console.log(firstInteger + Number(secondInteger));

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line.
    console.log(firstDecimal + Number(secondDecimal));

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The variable 'firstString' must be printed first.
    console.log(firstString + secondString);
}

// **************************************************************************************************** //

// ********** Day 1: Arithmetic Operators  ********** //

// Return a number denoting the rectangle's area.

function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

// Return a number denoting the perimeter of a rectangle.

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width)
    return perimeter;
}

// **************************************************************************************************** //

// ********** Day 1: Functions  ********** //

// first way //
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1)
    }
}

// second way //
function factorial(m) {
    let value = 1;
    for (let i = m; i > 1; i--) {
        value *= i;
    }
    return finalValue;
}

// **************************************************************************************************** //

// ********** Day 2: Conditional Statements: Switch ********** //

function getLetter(s) {
    let letter;
    // Write your code here
    const A = "aeiou";
    const B = "bcdfg";
    const C = "hjklm";
    const D = "npqrstvwxyz";
    switch (true) {
        case (A.includes(s[0])):
            letter = "A";
            break;
        case (B.includes(s[0])):
            letter = "B";
            break;
        case (C.includes(s[0])):
            letter = "C";
            break;
        case (D.includes(s[0])):
            letter = "D";
            break;
        default: ;
    }
    return letter;
}

// **************************************************************************************************** //

// ********** Day 2: Loops ********** //

let vowels = 'aeiuo'
function vowelsAndConsonants(s) {
    for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        }
    }
    for (var i = 0; i < s.length; i++) {

        if (!vowels.includes(s[i])) {
            console.log(s[i]);
        }
    }
}
vowelsAndConsonants("javascriptloops")


// **************************************************************************************************** //

// ********** Day 3: Intro to Conditional Statements ********** //

function main() {
    const N = parseInt(readLine().trim(), 10);
    if (N % 2 == 1) { console.log("Weird") }
    if (N % 2 == 0 && N >= 2 && N <= 5) { console.log("Not Weird") }
    if (N % 2 == 0 && N >= 6 && N <= 20) { console.log("Weird") }
    if (N % 2 == 0 && N > 20) { console.log("Not Weird") }
}

// **************************************************************************************************** //

// ********** Day 3: Arrays ********** //


// first way //
let nums = [2, 3, 6, 6, 5]
function getSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = nums[0];

    for (let i = 1; i < nums.length; i++) { //Bu döngünün amacı en büyük sayıyı bulmak.
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
            continue;
        }

        if ((nums[i] > secondLargest) && (nums[i] < largest)) { // Bu döngünün amacı ise en büyük sayıyı kullanarak en büyük ikinci sayıyı bulmak.
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}

// **************************************************************************************************** //
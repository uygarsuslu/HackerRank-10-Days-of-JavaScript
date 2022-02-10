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

// ********** Day 0: Arithmetic Operators  ********** //

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

// ********** Day 3: Intro to Conditional Statements ********** //

function main() {
    const N = parseInt(readLine().trim(), 10);
    if(N % 2 == 1) {console.log("Weird")}
    if(N % 2 == 0 && N >= 2 && N <= 5) {console.log("Not Weird")}
    if(N % 2 == 0 && N >= 6 && N <= 20) {console.log("Weird")}
    if(N % 2 == 0 && N > 20) {console.log("Not Weird")}
}
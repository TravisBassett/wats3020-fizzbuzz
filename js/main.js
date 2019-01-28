/* Code for WATS 3020 FizzBuzz Assignment */

//intializing variables
let isInteger,
    maxNumber,
    fbResults,
    fbText;


//Initialize a variable `isInteger` to use as a control value for the `while` loop.
isInteger = false;


// Creates a `while` loop so user will be prompted to enter a number until
// they enter a good number. This loop controlled by a conditional
// expression that looks at the value of `isSafeInteger`. When `isSafeInteger`
// becomes `true`, the `while` loop stops looping.

while (!isInteger) {
    let input = window.prompt("Enter a number greater than 0:");
    if (input === null) break;
    if (input.indexOf('.') < 0) {
        maxNumber = Number.parseInt(input);
        isInteger = Number.isSafeInteger(maxNumber) && maxNumber > 0;
    }
}

//Initialize the `fbResults` variable to an empty Array
fbResults = [];

// A `for` loop that will execute the `maxNumber` of times.
// There is logic inside the `for` loop to calculate FizzBuzz.
// Results of this logic are stored in an array called `fbResults`.
for (let i = 1; i <= maxNumber; i++) {
    let outputString = '';
    if (i % 3 === 0) {
        outputString += "fizz";
    }
    if (i % 5 === 0) {
        outputString += "buzz";
    }
    if (outputString.length === 0) {
        outputString = i;
    }
    fbResults.push(outputString);

}

// Uses a `for ... of` loop to concatenate the values from `fbResults`
// into the variable `fbText`.
fbText = '';

for (let value of fbResults) {
    fbText += value + '\n';
}


///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
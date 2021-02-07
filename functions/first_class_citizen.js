/**
 * you’ll see that functions in JavaScript are first-class objects, which means you can store functions in variables, 
 * pass them to other functions as arguments, and return them from other functions as values.
 */

//- Storing Functions in Variables
//- Functions are the first-class citizens in JavaScript. In other words, you can treat functions like values of other 
//  types.

//- The following declares the add() function and assigns the function name to the variable sum
function add(a, b) {
    return a + b;
}
let sum = add;
/**
 * In the assignment statement, we didn’t include the opening and closing parentheses at the end of the add identifier. 
 * We also didn’t execute the function but referencing the function itself.
 */

//- It means that we have two ways to execute the same function. We can call it normally as follows:

let result = add(10, 20);

//- Or execute it like this:

let result = sum(10,20);

//- Passing a function to another function
//- Because functions are values, you can pass a function as an argument into another function.

//- The following declares the average() function that takes three arguments. The third argument is a function:
function average(a, b, fn) {
    return fn(a, b) / 2;
}
//- Now, you can pass the sum function to the average() function as follows:
let result = average(10, 20, sum);

//- Adding Everything Together

function add(a, b) {
    return a + b;
}

let sum = add;

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(10, 20, sum);

log(result);

Output:

15

//- Returning functions from functions
/**
 * Since functions are values, you can return a function from another function.

   The following functions returns other functions that are called inside of them
 */
function a() {
    alert('A');
}
//alerts 'A', returns undefined

function b() {
    alert('B');
    return a;
}
//alerts 'B', returns function a

function c() {
    alert('C');
    return a();
}
//alerts 'C', alerts 'A', returns undefined

alert("Function 'a' returns " + a());
alert("Function 'b' returns " + b());
alert("Function 'c' returns " + c());


//- Another Example

//- The following example declares two functions that convert centimeters to inches and vice versa:

function cmToIn(length) {
    return length / 2.54;
}

function IntoCm(length) {
    return length * 2.54;
}
/**
 * The following convert() function has two parameters. The first parameter is a function and the second one is the 
 * length that will be converted based on the first argument:
 */
function convert(fn, length) {
    return fn(length);
}
/**
 * To convert cm to in, you can call the convert() function and pass the cmToIn function into the convert() function 
 * as the first argument:
 */
let inches = convert(cmToIn, 10);
console.log(inches);

Output:

3.937007874015748

/**
 * Similarly, to convert inches to centimeters, you can pass the inToCm function into the convert() function, like this:
 */
let cm = convert(IntoCm, 10);
console.log(cm);

Output:

25.4


/**
 * Summary
 
Functions are the first-class citizens in JavaSript.
You can pass functions to other functions as arguments, return them from other functions as values, and store them 

in variables.
 */
/**
 * FUNCTIONS
 * 
 * functions allow you structre your codes into smaller and more reuseable units
 */


//- Function Declaration
//To Declare a function, you must use the function keyword

function functionName(parameters) {
    // function body
    // ...
}

//- The function name as seen in the above code must be a valid javascript identifier and can accept one or more parameters

function say() {
    //...
}
`The code above declares a function ${say()}, with no parameter attached to it`

//- The following declares a function named square() that accepts one parameter:

function square(a) {
    //...
}

//- And the following declares a function named add() that accepts two parameters:

function add(a, b) {
   // ...
}

/**
 * Inside of a function, you can declare the logic you want your functions to carry out.
 * 
 * the following example is to function to log message which is a paramter assigned to greetUser() to the user console.
 */

 function greetUser(message){
     console.log(message)
 }

/* 
 * Calling a function (Invoking a function)

 * When a call a function, it executes the block inside it
 */

//- using the above greetUser function, in the example below, the function is being invoked using the Identifier name
//- along side the Argument you want to pass into it to be executed

function greetUser(message){
    console.log(message)
}
greetUser("Hello World")

//- We passed in an string argument "Hello World" while invoking the above function, this function will log on a console.

/**
 * PARAMETERS & ARGUMENTS
 * 
 * The terms parameters and arguments are often used interchangeably. However, they are essentially different.
 * The parameters are used when declaring the function. For example, in the greetUser() function, the message is the 
 * parameter.
 * 
 * On the other hand, the arguments are values the function receives from each parameter at the time the function is 
 * called. In the case of the greetUser() function, the 'Hello World' string is the argument.
 */


//- RETURNING A VALUE
/**
 * Every function in JavaScript returns undefined, unless otherwise specified. See the following example:
 */

function say(message) {
    console.log(message);
}

let result = say('Hello');
console.log('Result:', result); 

Output:

Hello
Result: undefined

//- To specify a return value for a function, you use the the return statement followed by an expression or a value, 
//  like this:

return expression;

//- For example, the following add() function returns the sum of the two arguments:

function add(a, b) {
    return a + b;
}

//- You can call a function by Invoking it inside a variable 
let sum = add(10, 20);
console.log('Sum:', sum);
//- The above shows how to call the add() function:

Output:

Sum: 30

//- The following example shows how to use multiple return statements in the function to return different values based 
//  on conditions:

function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}
/**
 * The compare() function compares two values. It returns:

    -1 if the first argument is greater than the second one.
    1 if the first argument is less than the second one.
    0 if  the first argument equals the second one.
 */

//- The function immediately stops executing when the return statement is reached. Therefore, you can use the return 
//- statement without a value to exit the function prematurely, like this:
function say(message) {
    // show nothing if the message is empty
    if (! message ) {
        return;
    }
    console.log(message);
}
//- In this example, if the message is blank (or undefined), the say() function will show nothing.

/**
 *  Function hoisting
 * 
 * In JavaScript, it is possible to use a function before it is declared. See the following example:
 */
showMe(); // a hoisting example

function showMe(){
    console.log('an hoisting example');
}
/**
 * The function hoisting is a mechanism that the JavaScript engine physically moves function declarations to the top 
 * of the code before executing them. The following shows the version of the code before the JavaScript engine executes it:
 */
function showMe(){
    console.log('a hoisting example');
}

showMe(); // a hoisting example




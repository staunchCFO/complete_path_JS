/**
 * An anonymous function is a function without a name. An anonymous function is often not accessible after its 
 * initial creation.
 */

let show = function () {
    console.log('Anonymous function');
};

show();

//- In this example, the anonymous function has no name between the function keyword and parentheses ().
//- Because we need to call the anonymous function later, we assign the function to the show variable.

/**
 * You can use Anonymous functions as Argument in another function
 * 
 * We often use anonymous functions as arguments of other functions. For example:
 */

setTimeout(function () {
    console.log('Execute later after 1 second')
}, 1000);

/**
 * In this example, we pass an anonymous function into the setTimeout() function. The setTimeout() function executes 
 * this anonymous function one second later.
 */

 //- Immediately invoked function execution
/**
 * If you want to create a function and execute it immediately after declaration, you can use the anonymous function 
 * like this:
 */

(function() {
    console.log('IIFE');
})();

How_it_works:

//- First, the following defines a function expression:

(function () {
    console.log('Immediately invoked function execution');
})

//- Second, the trailing parentheses () allow you to call the function:

(function () {
    console.log('Immediately invoked function execution');
})();

//- Sometimes you may want to pass in and Argument to it

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(`${person.firstName} ${person.lastName}`);
})(person);

/**
 * ARROW FUNCTIONS
 * 
 * ES6 introduced arrow function expression that provides a shorthand for declaring anonymous functions:

 * For example, this function:
 */

let show = function () {
    console.log('Anonymous function');
};

//- … can be shortened using the following arrow function:
let show = () => console.log('Anonymous function');

//- Similarly, the following anonymous function:
let add = function (a, b) {
    return a + b;
};

//- … is equivalent to the following arrow function:
let add = (a, b)  => a + b;   

/**
 * Summary
 * 
Anonymous functions are functions without names.
Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.
 */

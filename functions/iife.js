/**
 * You will learn about JavaScript immediately invoked function expressions (IIFE).
 * 
 * A JavaScript immediately invoked function expression is a function defined as an expression and executed 
 * immediately after creation. The following shows the syntax of defining an immediately invoked function expression:
 */

(function(){
    //...
})();

//- When you define a function, the JavaScript engine adds the function to the global object. See the following example:

function add(a,b) {
    return a + b;
}
//- On the Web Browsers, the add() function is added to the window object:

console.log(window.add);

//- Similarly, if you declare a variable outside of a function, the JavaScript engine also adds the variable to 
//  the global object:

var counter = 10;
console.log(window.counter); // 10

/**
 * In this syntax, the part on the right side of the assignment operator(=) is a function expression. Because a 
 * function is an expression, you can wrap it inside parentheses:
 */
let add = (function(a, b) {
    return a + b;
});

//- In addition, you can execute the function immediately after creating it:

let add = (function(a,b){
    return a + b;
})(10, 20);

console.log(add);

/**
 * In this example, the add variable holds the result of the function call.

   The following expression is called an immediately invoked function expression (IIFE) because the function is 
   created as an expression and executed immediately:
 */

//- This is the general syntax for defining an IIFE:

(function(){
    //...
})();

NB:
//- Note that you can use an arrow function to define an IIFE:

(() => {
    //...
})();

/**
 * By placing functions and variables inside an immediately invoked function expression, you can avoid polluting 
 * them to the global object:
 */
(function() {
    var counter = 0;
    

    function add(a, b) {
        return a + b;
    }

    console.log(add(10,20)); // 30
}());

/**
 * Named IIFE
 * 
An IIFE can have a name. However, it cannot be invoked again after execution:
 */

(function namedIIFE() {
    //...
})();



//More to come ......
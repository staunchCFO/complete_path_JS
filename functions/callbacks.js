/**
 * You will learn about JavaScript callback functions including synchronous and asynchronous callbacks.
 * 
 * 
 * In JavaScript, a callback is a function passed into another function as an argument to be executed later.
 */

//- Suppose that you the following numbers array:

let numbers = [1, 2, 4, 7, 3, 5, 6];

/**
 * To find all the odd numbers in the array, you can use the filter() method of the Array object.

   The filter() method creates a new array with the elements that pass the test implemented by a function.
 */

function isOddNumber(number) {
    return number % 2;
} 
//- The above function returns true is there are odd numbers
//- Now, you can pass the isOddNumber() to the filter() method:

const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers); // [ 1, 7, 3, 5 ]

/**
 * In this example, the isOddNumber is a callback function. When you pass a callback function into another 
 * function, you just pass the reference of the function i.e., the function name without the parentheses ().
 */

 //- To make it shorter, you can use an anonymous function as a callback:
let oddNumbers = numbers.filter(function(number) {
    return number % 2;
});
console.log(oddNumbers); // [ 1, 7, 3, 5 ]

//- In ES6, you can use the arrow functions:

let oddNumbers = numbers.filter(number => number % 2);

//- Suppose that you have a button with the id btn:

<button id="btn">Save</button>

//- To execute some code when the button is clicked, you use a callback and pass it to the addEventListener() method:

function btnClicked() { 
   // do something here
}
let btn = document.querySelector('#btn');
btn.addEventListener('click',btnClicked);

/**
 * The btnClicked in this example is a callback. When the button is clicked, the btnClicked() function is called to carry some actions.

   Now, you have the basic ideas of callbacks: passing a function into another function.

   Callbacks are used in two ways: synchronous and asynchronous functions.
 */

//- Synchronous callback functions

/**
 * If your code executes sequentially from top to bottom, it is synchronous. The isOddNumber() function is an 
 * example of a synchronous callback function.

    In the following example, the arrow function is a callback used in a synchronous function.

    The sort() method completes first before the console.log() executes:
 */

let numbers = [1, 2, 4, 7, 3, 5, 6];
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7 ]

/**
 * Asynchronous callback functions
 * 
 * Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of 
 * the code while waiting.

 * Note that JavaScript is a single-threaded programming language. It carries asynchronous operations via the 
 * callback queue and event loop.
 */

//- Suppose that you need to develop a script that downloads a picture from a remote server and process it after 
//  the download completes: 

function download(url) {
    // ...
}

function process(picture) {
    // ...
}

download(url);
process(picture);

/**
 * However, downloading a picture from a remote server takes time depending on the network speed and the size of the picture.

 * The following code uses the setTimeout() function to simulate the download() function:
 */

function download(url) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
    }, 3* 1000);
}
//- And this code emulates the process() function:

function process(picture) {
    console.log(`Processing ${picture}`);
}
//- When you execute the following code:

let url = 'https://www.javascripttutorial.net/foo.jg';

download(url);
process(url);

//- you will get the following output:

`Processing https://javascripttutorial.net/foo.jg
Downloading https://javascripttutorial.net/foo.jg ...`

/**
 * This is not what you expected because the process() function executes before the download() function. The correct 
 * sequence should be:

   Download the picture, wait for it to complete.
   Process the picture.
   To fix the issue above, you can pass the process() function to the download() function and execute the process() 
   function inside the download() function once the download completes, like this:
 */
function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        
        // process the picture once it is completed
        callback(url);
    }, 3000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://wwww.javascripttutorial.net/pic.jpg';
download(url, process);

Output:

`Downloading https://www.javascripttutorial.net/pic.jpg ...
Processing https://www.javascripttutorial.net/pic.jpg`

/**
 * In this example, the process() is a callback passed into an asynchronous function.

   When you use callbacks to continue code execution after asynchronous operations, these callbacks are called 
   asynchronous callbacks.
 */

//- To make the code cleaner, you can define the process() function as an anonymous function:

function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        // process the picture once it is completed
        callback(url);

    }, 3000);
}

let url = 'https://www.javascripttutorial.net/pic.jpg';
download(url, function(picture) {
    console.log(`Processing ${picture}`);
}); 

/**
 * 
 * Handling errors
The download() function assumes that everything works fine and does not consider any exceptions. The following 
code introduces two callbacks: success and failure to handle the success and failure cases respectively:
 */

function download(url, success, failure) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        // over simplification
        let error = url.length === 0 || !url; 
        // call the failure or success callback
        error ? failure(url) :  success(url);
    }, 3000);
}

download('',
    function(picture) {
        console.log(`Processing the picture ${picture}`);
    },
    function(picture) {
        console.log(`Handling error...`);
    }
);


/**
 * Nesting callbacks and the Pyramid of Doom
 * 
 * How do you download three pictures and process them sequentially? A typical approach is to call the download() 
 * function inside the callback function, like this:
 */

function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        // process the picture once it is completed
        callback(url);
    }, 3000);
}

const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
const url3 = 'https://www.javascripttutorial.net/pic3.jpg';

download(url1,function(picture){
    console.log(`Processing ${picture}`);
    // download the second picture
    download(url2,function(picture){
        console.log(`Processing ${picture}`);
        // download the third picture
        download(url3,function(picture){
            console.log(`Processing ${picture}`);
        });
    });
});

Output:

`Downloading https://www.javascripttutorial.net/pic1.jpg ...
Processing https://www.javascripttutorial.net/pic1.jpg
Downloading https://www.javascripttutorial.net/pic2.jpg ...
Processing https://www.javascripttutorial.net/pic2.jpg
Downloading https://www.javascripttutorial.net/pic3.jpg ...
Processing https://www.javascripttutorial.net/pic3.jpg`


//- Nesting many asynchronous functions inside callbacks is known as the pyramid of doom or the callback hell:

asyncFunction(function(){
    asyncFunction(function(){
        asyncFunction(function(){
            asyncFunction(function(){
                asyncFunction(function(){
                    
                });
            });
        });
    });
});

//- To avoid the pyramid of doom, you use promises or async/await functions.

/**
 * Summary
 * A callback is a function passed into another function as an argument to be executed later.
 * Callback functions can be synchronous or asynchronous.
 */


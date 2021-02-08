/**
 * 
 * @requires Array.map() You will learn how to use the JavaScript Array map() method to transform elements in an array.
 * 
 * The map() method takes two named arguments, the first one is required whereas the second one is optional.
 * Similar to the other iterative method such as  every(),  some(),  filter(), forEach() and  sort(), the callback() 
 * function has the following form:
 */

function callback(currentElement,index,array){
    // ... 
}

/**
 * The callback() function takes three arguments:

The currentElement is the current element of the array that is being processed.
The index is the index of the currentElement.
The array is the array object being traversed.
The currentElement is required while the index and array arguments are optional.

If you pass the contextObject to the map() method, you can reference the contextObject inside the callback() function using 
the this keyword.

It’s important to note that the map() method does not change the original array, it creates a new array of all elements that 
have been transformed by the callback function.
 */

let numbers = [16, 25, 36];
let results = numbers.map(Math.sqrt);
console.log(results);

Output:

 [4, 5, 6]

//- The following function maps through array1 and multiply its elements by 2
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2)

console.log(map1)
// expected output: Array [2, 8, 18, 32]


// When not to use map()
// Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; use forEach or 
// for...of instead.

// You shouldn't be using map if:

// you're not using the array it returns; and/or
// you're not returning a value from the callback.

/**
 * Mapping an array of numbers using a function containing an argument
 * The following code shows how map works when a function requiring one argument is used with it. The argument will 
 * automatically be assigned from each element of the array as map loops through the original array.
 */

let numbers = [1, 4, 9]
let doubles = numbers.map(function(num) {
  return num * 2
})

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]

// When undefined or nothing is returned:
let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function(num, index) {
  if (index < 3) {
     return num
  }
})
// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]






































































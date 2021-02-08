/**
 * @requires Array.length() of an Array
 * 
 * The Length of an Array gets the total number of datas contained in an Array
 */


/**
 * 1) Dense arrays
 * 
 * A dense array is an array where its elements have contiguous indexes starting at zero.
 */

let colors = ['red', 'green', 'blue'];
console.log(colors.length); // 3

//- When you empty the colors array, its length is zero:

colors = [];
console.log(colors.length); // 0

/**
 * 2) Sparse arrays
A sparse array is an array whose elements don’t have contiguous indexes starting at zero.

For example, the [10,, 20, 30] is a sparse array because the indexes of its elements are 0, 2, and 3.
 */

let numbers = [10, , 20, 30];
console.log(numbers.length); // 4

//- 1) Empty an array
//- If you set length to zero, the array will be empty:

const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 0;

console.log(fruits); // []

/**
 * 2) Remove elements
If you set the length property of an array to a value that is lower than the highest index, all the elements whose 
index is greater than or equal to the new length are removed.
 */

const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 2;

console.log(fruits); // [ 'Apple', 'Orange' ]

/**
 * 3) Make array sparse
If you set the length property of an array to a value that is higher than the highest index, the array will be spare. 
For example:
 */

const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 5;

console.log(fruits); // [ 'Apple', 'Orange', 'Strawberry', <2 empty items> ]


/**
 * Summary
The length property of an array is an unsigned, 32-bit integer that is always numerically greater than the highest 
index of the array.
The length returns the number of elements that a dense array has.
For the spare array, the length doesn’t reflect the number of actual elements in the array.
Modifying the length property can remove elements from the array or make the array spare.
 */
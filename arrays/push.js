/**
 * @requires Array.push()
 * 
 * The push() method adds one or more elements to the end of an array and returns the new length of the array.
 */

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


/**
 * Merging two arrays
 * This example uses apply() to push all elements from a second array.
 * 
 * Do not use this method if the second array (moreVegs in the example) is very large because the maximum number of 
 * parameters that one function can take is limited in practice.
 */
let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot')
Array.prototype.push.apply(vegetables, moreVegs)

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']
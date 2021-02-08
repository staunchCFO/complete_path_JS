/**
 * You’ll learn about JavaScript arrays and their basic operations.
 * 
 * 
 * In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index.
 * 
 * First, an array can hold values of different types. For example, you can have an array that stores the number 
 * and string, and boolean values.
 * 
 * Second, the length of an array is dynamically sized and auto-growing. In other words, you don’t need to specify 
 * the array size upfront.
 */

//- Creating JavaScript arrays
//- JavaScript provides you with two ways to create an array. The first one is to use the Array constructor as follows:

let scores = new Array();

//- The scores array is empty i.e. it holds no element.

//- JavaScript allows you to omit the new operator when you use the array constructor. For example, the following 
//- statement creates the artists array.

let artists = Array();

//- The more preferred way to create an array is to use the array literal notation:

let arrayName = [element1, element2, element3];

let colors = ['red', 'green', 'blue'];

//- To create an empty array, you use square brackets without specifying any element like this:

let emptyArray = [];

/**
 * Accessing JavaScript array elements
 * JavaScript arrays are zero-based indexed. In other words, the first element of an array starts at index 0, the 
 * second element starts at index 1, and so on.
 */
arrayName[index]

// The following shows how to access the elements of the mountains array:
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];

console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

//- To change the value of an element, you assign that value to the element like this:
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
mountains[2] = 'K2';

console.log(mountains);

Output:

[ 'Everest', 'Fuji', 'K2' ]

/**
 * @requires Array.length() of an Array
 * 
 * The Length of an Array gets the total number of datas contained in an Array
 */

let fruits = ["Apple" , "Banana"]

console.log(fruits.length) // This gives an output of 2

const totalStudents = ["Promise" , "Ayo" , "Muhammed" , "Tobi" , "Emeka"]

console.log(totalStudents) // This prints an output of 5


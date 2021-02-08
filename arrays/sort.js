/**
 * 
 * @requires Array.sort() You will learn how to use the JavaScript Array sort() method to sort arrays of numbers, 
 * string, and objects.
 * 
 * 
 * The sort() method allows you to sort elements of an array in place. Besides returning the sorted array, the 
 * sort() method changes the positions of the elements in the original array.
 */

//-Consider the following example:

let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort();
console.log(numbers);

Output:

[ 0, 1, 10, 2, 20, 3, 30 ]

//- In this example, the sort() method places 10 before 2 because the string “10” comes before “2” when doing 
//  a string comparison.

//- To fix this, you need to pass a compare function to the sort() method. The sort() method will use the compare 
//- function to determine the orders of elements.

array.sort(comparefunction)

/**
 * The compare() function accepts two arguments a and b. The sort() method will sort elements based on 
 * the return value of the compare() function with the following rules:

If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.
 */

//- To fix the issue of sorting the number, you can use the following syntax:

let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort( function( a , b){
    if(a > b){
        return 1;
    }; 
    if(a < b){
        return -1
    };
    return 0;
});

console.log(numbers);

Output:

[ 0,  1,  2, 3, 10, 20, 30 ]

//- Or you can define the comparison function using the arrow function syntax:

let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);

/**
 * Sorting an array of strings
Suppose you have an array of string named animals as follows:
 */

let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];

/**
 * To sort the elements of the animals array in ascending order alphabetically, you use the sort() method without 
 * passing the compare function as shown in the following example:
 */

let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];
animals.sort();

console.log(animals);

Output:

[ 'ant', 'bee', 'cat', 'dog', 'elephant' ]

/**
 * To sort the animals array in descending order, you need to change the logic of the compare function and pass 
 * it to the sort() method as the following example.
 */

let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];

animals.sort((a, b) => {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
});

console.log(animals);

Output:

[ 'elephant', 'dog', 'cat', 'bee', 'ant' ]

//-  you have an array that contains elements in both uppercase and lowercase as follows:

// sorting array with mixed cases
let mixedCaseAnimals = [
    'Cat', 'dog', 'Elephant', 'bee', 'ant'
];

/**
 * To sort this array alphabetically, you need to use a custom compare function to convert all elements to the same case e.g., 
 * uppercase for comparison and pass that function to the sort() method.
 */

let mixedCaseAnimals = [
    'Cat', 'dog', 'Elephant', 'bee', 'ant'
];

mixedCaseAnimals.sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;

});

Output:

[ 'ant', 'bee', 'Cat', 'dog', 'Elephant' ]


/**
 * 
 * Sorting an array of strings with non-ASCII characters
The sort() method is working fine with the strings with ASCII characters. However, for the strings with non-ASCII characters e.g., 
é, è, etc., the sort() method will not work correctly. For example:
 */

let animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];
animaux.sort();

console.log(animaux);

// To resolve this, you use the localeCompare() method of the String object to compare strings in a specific locale, 
// like this:

animaux.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(animaux);

Output:

[ 'abeille', 'chat', 'écureuill', 'zèbree' ]

/**
 * Sorting an array of numbers
Suppose you have an array of numbers named scores as in the following example.
 */

let scores = [
    9, 80, 10, 20, 5, 70
];

//- The following example sorts the scores array numerically in ascending order.

let scores = [
    9, 80, 10, 20, 5, 70
];
// sort numbers in ascending order
scores.sort((a, b) => a - b);

console.log(scores);

Output:

[ 5, 9, 10, 20, 70, 80 ]

//- To sort an array of numbers numerically in descending order, you just need to 
//  reverse the logic in the compare function as shown in the following example:

let scores = [
    9, 80, 10, 20, 5, 70
];
// descending order
scores.sort((a, b) => b - a);
console.log(scores);

Output:

[80, 70, 20, 10, 9, 5]

/**
 * Sorting an array of objects by a specified property
The following is an array of employee objects, where each object contains three properties: name,salary and hireDate.
 */

let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];
/**
 * Sorting objects by a numeric property
The following example shows how to sort the employees by salary in ascending order.
 */
// sort by salary
employees.sort(function (x, y) {
    return x.salary - y.salary;
});

console.table(employees);

/**
 * Sorting objects by a string property
To sort the employees array by name property case-insensitively, you pass the compare function that compares two strings 
case-insensitively as follows:
 */

employees.sort(function (x, y) {
    let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
});

console.table(employees);

/**
 * Sorting objects by the date property
Suppose, you wish to sort employees based on each employee’s hire date.

The hire date data is stored in the hireDate property of the employee object. However, it is just a string that represents a 
valid date, not the Date object. 

Therefore, to sort employees by hire date, you first have to create a valid Date object from the date string, and then compare 
two dates, which is the same as comparing two numbers.

Here is the solution:
 */

employees.sort(function (x, y) {
    let a = new Date(x.hireDate),
        b = new Date(y.hireDate);
    return a - b;
});

console.table(employees);



























































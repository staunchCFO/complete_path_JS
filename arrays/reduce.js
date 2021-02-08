/**
 * @requires Array.reduce() You will learn how to use the JavaScript Array reduce() and reduceRight() methods to 
 * reduce an array to a value.
 */

//- Suppose that you have an array of numbers, like this:

let numbers = [1, 2, 3];

/**
 * and you want to calculate the total of elements of the array.

Typically, you use a for loop to iterate over the elements and add them up as shown in the following example:
 */

let numbers = [1, 2, 3];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

Output:

6

/**
 * 
 * The script is simple and straightforward:

First, declare an array of three numbers 1, 2 and 3.
Second, declare the sum variable and set its value to zero.
Third, in the for loop, add up the elements of the numbers array to the sum variable. After the loop, the 
value of the sum variable is 6.
 */

let sum = numbers.reduce(function (accumulator, current) {
    return accumulator + current;
});
console.log(sum); // 6

// JavaScript Array reduce() method in detail
// The following illustrates the syntax of the reduce() method.

array.reduce(reducer , [initialValue])

/**
 * The reduce() method takes two arguments: a reducer callback function and an optional initial value.

The reduce() method calls the reducer() function for every element in the array.
 */

// 1) The reducer function argument
// The reducer() function has the following form:
function reducer(accumulator, currentValue, currentIndex, array){}

/**
 * 
 * The reducer function takes four arguments:

accumulator

The value returned from the previous call of the reducer function. If you pass the initialValue to the reduce() method, 
 when the reducer function is executed for the first time, the accumulator equals the initialValue.

currentValue

The value of the array element in the current iteration.

currentIndex

The index of the array element in the current iteration.

array

The array that the reduce() method was called upon.
 */

/**
 * 2) The initialValue argument
The initialValue argument is optional. If you pass in the initialValue argument, the reduce() method will assign it 
to the previousValue argument of the reducer() function at the first call of the reducer function.

The following table illustrates the logic when the reduce() method executes the reducer() function for the first 
time according to the initialValue argument.

initialValue	 accumulator	              currentValue
passed	         accumulator = initialValue	  currentValue = array[0]
not passed	     accumulator = array[0]	      currentValue = array[1]
 */
// Back to the example above, the following table illustrates how the reduce() method works in detail.

let numbers = [1, 2, 3];

let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum);

// More JavaScript Array’s reduce() examples
// Suppose that you have the following shoppingCart array of product objects:

let shoppingCart = [{
        product: 'phone',
        qty: 1,
        price: 699
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 9.98
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20.99
    }
];

// To calculate the total amount of the products in the shopping cart, you can use the reduce() method, like this:

let total = shoppingCart.reduce(function (acc, curr) {
    return acc + curr.qty * curr.price;
},0);

console.log(total);

/**
 * Notice that in this example, we passed in the initialValue argument to the reduce() method.

If we didn’t do so, the reduce() method would take the first element of the shoppingCart array, which is an object, 
as an initial value and perform the calculation on this object. Hence, it would cause an incorrect result.
 */

/**
 * JavaScript Array reduceRight() method
The reduceRight() method works in the same way as the reduce() method, but in the opposite direction.

The reduce() method starts at the first element and travels toward the last, whereas the reduceRight() method starts 
at the last element and travels toward the first.
 
*/

let numbers = [1, 2, 3];

let sum = numbers.reduceRight(function (acc, curr) {
    console.log('acc: ', acc, 'curr:', curr);
    return acc + curr;
});
console.log(sum);

Output

`acc:  3 curr: 2
acc:  5 curr: 1
6`
//- In this example, acc is 5 and curr is 4 at the first time the callback() function is executed.



















































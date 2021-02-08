/**
 * 
 * @requires Array.filter() You will learn how to filter an Array
 * 
 * One of the most common tasks when working with an array is to create a new array that contains a subset of 
 * elements of the original array.
 */

//- Suppose you have an array of city objects where each object contains two properties: name and population.
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

// To find the city whose population is greater than 3 million, you typically loop over the array elements using a for 
// loop and test if the value of the population property satisfies the condition, like this:

let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);

Output:

[
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 }
]

//- The following example returns the same result as the example above:

let bigCities = cities.filter(function (e) {
    return e.population > 3000000;
});
console.log(bigCities);

//- In ES6, it is even cleaner when you use the arrow function (=>).

let bigCities = cities.filter(city => city.population > 3000000);
console.log(bigCities);

//- The following illustrates the syntax of the filter() method:

arrayObject.filter(callback, contextObject);

/**
 * The filter() method creates a new array with all the elements that pass the test implemented by the callback() function.

Internally, the filter() method iterates over each element of the array and pass each element to the callback function. 
If the callback function returns true, it includes the element in the return array.

The filter() method accepts two named arguments: a callback function and an optional object.

Like other iterative methods of the Array object such as every(), some(), map() and forEach(), the callback function has 
the following form:
 */

function callback(currentElement, index, array){
    // ...
}

/**
 * More JavaScript Array filter() method examples
Because the filter() method returns an a new array, you can chain the result with other iterative methods such as 
sort() and map().

For example, the following illustrates how to chain the three methods: filter(),sort(), and map():
 */

cities
    .filter(city => city.population < 3000000)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ':' + city.population));

Output:

Philadelphia:1526006
Houston:2099451
Chicago:2695598

/**
 * How it works.

First, the filter() method returns the cities whose populations are less than 3 million.
Second, the sort() method sorts the resulting cities by the populations in descending order
Third, the map() method show each element in the result array in the web console.
 */

// The following example illustrates the use of the contextObject argument that specifies an object which 
// can be referenced in the callback() function using the this keyword.

function isInRange(value) {
    if (typeof value !== 'number') {
        return false;
    }
    return value >= this.lower && value <= this.upper;
}

let data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];

let range = {
    lower: 1,
    upper: 10
};

let numberInRange = data.filter(isInRange, range);

console.log(numberInRange); // [10, 1, 5]

/**
 * How it works.

First, define the isInRange() function that checks if its argument is a number and in the range specified by the lower
 and upper properties of an object.
Next, define an array of mixed data that contains numbers, strings, and undefined.
Then, define the range object with two properties lower and upper.
After that, call the filter() methods of the data array and pass in the isInRange() function and the range object. 
Because we pass in the range object, inside the isInRange() function, the this keyword references to the range object.
Finally, show the result array in the web console.
 */
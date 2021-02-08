/**
 * 
 * You will learn how to use the JavaScript Array’s splice() method to delete existing elements, insert new elements, 
 * and replace elements in an array.
 * 
 * 
 * Deleting elements using JavaScript Array’s splice() method
To  delete elements in an array, you pass two arguments into the splice() method as follows:
 */

Array.splice(position,num);

//- The position specifies the position of the first item to delete and the num argument determines the number of 
//  elements to delete.
//- The splice() method changes the original array and returns an array that contains the deleted elements.

let scores = [1, 2, 3, 4, 5];

//- The following statement deletes three elements of the scores array starting from the first element.
let deletedScores = scores.splice(0, 3);

//- The scores array now contains two elements.
console.log(scores); //  [4, 5]

//- And the deletedScores array contains three elements.

console.log(deletedScores); // [1, 2, 3]

/**
 * Inserting elements using JavaScript Array splice() method
You can insert one or more elements into an array by passing three or more arguments to the splice() method with 
the second argument is zero.
 */

Array.splice(position,0,new_element_1,new_element_2);

/**
 * In this syntax:

The position specifies the starting position in the array that the new elements will be inserted.
The second argument is zero (0) that instructs the splice() method to not delete any array elements.
The third argument, fourth argument, and so on are the new elements that are inserted into the array.
 */

//- Assuming that you have an array named colors with three strings.

let colors = ['red', 'green', 'blue'];

//- The following statement inserts one element after the second element.

colors.splice(2, 0, 'purple');

//- The colors array now has four elements with the new element inserted in the second position.

console.log(colors); // ["red", "green", "purple", "blue"]

//- You can insert more than one element by passing the fourth argument, the fifth argument, and so on to the splice() 
//  method as in the following example.

colors.splice(1, 0, 'yellow', 'pink');
console.log(colors); 
// ["red", "yellow", "pink", "green", "purple", "blue"]

/**
 * Replacing elements using JavaScript Array splice() method
The splice() method allows you to insert new elements into an array while deleting existing elements simultaneously.
 */

//- Suppose you have an array of programming languages with four elements as follows:

let languages = ['C', 'C++', 'Java', 'JavaScript'];

//- The following statement replaces the second element by a new one.

languages.splice(1, 1, 'Python');

//-The languages array now still has four elements with the new second argument is 'Python' instead of 'C++'.

console.log(languages); 
// ["C", "Python", "Java", "JavaScript"]

//-You can replace one element with multiple elements by passing more arguments into the splice() method as follows:

languages.splice(2,1,'C#','Swift','Go');
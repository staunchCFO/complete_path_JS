/**
 * @requires getElementById()
 * 
 * in this tutorial, you will learn how to use the JavaScript getElementById() to select an element by a specified id.
 */

//- An HTML element often has an id attribute like this:

<div id="root"></div>

/**
 * The id is used to uniquely identify an HTML element within the document. By rules, the id root is unique within 
 * the document; no other elements can have this root id.

 * The id is case-sensitive. For example, the 'root' and 'Root' are totally different id.

 * To select an element by id, we use the following method
 */
document.getElementById()

//- The following shows the syntax of the getElementById() method:

let element = document.getElementById(id);

//- It returns null if there is no element with that id exists.

/**As mentioned earlier, id is unique within a document. However, HTML is a forgiving language. If a document has 
 * more than one element with the same id, the getElementById() method returns the first one it encounters. 
*/

//- Consider the following HTML document:

<html>
    <head>
        <title>JavaScript getElementById() Method</title>
    </head>
    <body>
        <p id="message">A paragraph</p>
    </body>
</html>

//- The document contains a <p> element that has the id attribute with the value message:

const p = document.getElementById('message');
console.log(p);

Output:

<p id="message">A paragraph</p>

/**
 * Once you selected an element, you can add styles to the element, manipulate its attributes, and traversing to parent 
 * and child elements.

Summary
The getElementById() returns a DOM element specified by an id or null if no matching element found.
If multiple elements share the same id, even though it is invalid, the getElementById() returns the first element 
it encounters.
 */
/**
 * You will learn how to get the parent node of an element by using the JavaScript parentNode attribute of the 
 * Node object.
 */

`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JavaScript parentNode</title>
</head>
<body>
    <div id="main">
        <p class="note">This is a note!</p>
    </div>

    <script>
        let note = document.querySelector('.note');
        console.log(note.parentNode);
    </script>
</body>
</html>`

/**
 * In the above example we accessed the parent of an element with a class name called note, using the parentNode option
 * this prints the <div></div> it is passed into as well as the element itself by logging:
 * 
 * console.log(note.parentNode)
 */


/**
 * DOM Siblings
 * 
 * In this tutorial, you will learn how to select the next siblings, previous siblings, and all siblings of an 
 * element. Let’s say you have the following list of items:
 */

`<ul id="menu">
    <li>Home</li>
    <li>Products</li>
    <li class="current">Customer Support</li>
    <li>Careers</li>
    <li>Investors</li>
    <li>News</li>
    <li>About Us</li>
</ul>`

// Get the next siblings
// To get the next sibling of an element, you use the nextElementSibling attribute:

let nextSibling = currentNode.nextElementSibling;

/**
 * The nextElementSibling returns null if the specified element is the first one in the list. The following example 
 * uses the nextElementSibling property to get the next sibling of the list item that has the current class:
 */

let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;
console.log(nextSibling);

Output:

<li>Careers</li>

//- To get all the next siblings of an element, you can use the following code:

let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;

while(nextSibling) {
    console.log(nextSibling);
    nextSibling = nextSibling.nextElementSibling;
}

// Get the previous siblings
// To get the previous siblings of an element, you use the previousElementSibling attribute:

let current = document.querySelector('.current');
let prevSibling = currentNode.previousElementSibling;

//- Example

// The following example uses the previousElementSibling property to get the previous siblings of the list item that 
// has the current class:

let current = document.querySelector('.current');
let prevSiblings = current.previousElementSibling;
console.log(prevSiblings);

// And the following example selects all the previous siblings of the list item that has the current class:

let current = document.querySelector('.current');
let prevSibling = current.previousElementSibling;
while(prevSibling) {
    console.log(prevSibling);
    prevSibling = current.previousElementSibling;
}


//- To get all the Siblings in a parentNode

`<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JavaScript Siblings</title>
</head>
<body>
    <ul id="menu">
        <li>Home</li>
        <li>Products</li>
        <li class="current">Customer Support</li>
        <li>Careers</li>
        <li>Investors</li>
        <li>News</li>
        <li>About Us</li>
    </ul>
    
    <script>
        let getSiblings = function (e) {
            // for collecting siblings
            let siblings = []; 
            // if no parent, return no sibling
            if(!e.parentNode) {
                return siblings;
            }
            // first child of the parent node
            let sibling  = e.parentNode.firstChild;
            // collecting siblings
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== e) {
                    siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
            }
            return siblings;
        };

        let siblings = getSiblings(document.querySelector('.current'));
        siblingText = siblings.map(e => e.innerHTML);
        console.log(siblingText);
    </script>
</body>
</html>`

Output:

["Home", "Products", "Careers", "Investors", "News", "About Us"]

/**
 * Summary
The nextElementSibling returns the next sibling of an element or null if the element is the last one in the list.
The previousElementSibling returns the previous sibling of an element or null if the element is the first one 
in the list.
To get all siblings of an element, you can use a helper function that utilizes the nextElementSibling property.
 */



/**
 * Getting Child Elements of a Node in JavaScript
 * 
 * In this tutorial, you will learn how to get the first child element, last child element, and all children 
 * of a specified element.
 */

//- Suppose that you have the following HTML fragment:

`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Get Child Elements</title>
</head>
<body>
  <ul id="menu">
    <li class="first">Home</li>
    <li>Products</li>
    <li class="current">Customer Support</li>
    <li>Careers</li>
    <li>Investors</li>
    <li>News</li>
    <li class="last">About Us</li>
  </ul>
</body>
</html>`


// Get the first child element
// To get the first child element of a specified element, you use the firstChild property of the element:

let firstChild = parentElement.firstChild; 

/**
 * If the parentElement does not have any child element, the firstChild returns null. The firstChild property 
 * returns a child node which can be any node type such as an element node, a text node, or a comment node. 
 * The following script shows the first child of the #menu element:
 */

let content = document.getElementById('menu');
let firstChild = content.firstChild.nodeName;
console.log(firstChild);

Output:

`#text`

// The Console window show #text because a text node is inserted to maintain the whitespace between the openning 
// <ul> and <li> tags. This whitespace creates a #text node.

// Note that any whitespace such as a single space, multiple spaces, returns, and tabs will create a #text node. 
// To remove the #text node, you can remove the whitespaces as follows:

`<article id="content"><h2>Heading</h2><p>First paragraph</p></article>`
// Or to get the first child with the Element node only, you can use the firstElementChild property:

let firstElementChild = parentElement.firstElementChild;

// The following code returns the first list item which is the first child element of the menu:

let content = document.getElementById('menu');
console.log(content.firstElementChild);

Output:

<li class="first">Home</li>

/**
 * In this example:

First, select the #menu element by using the getElementById() method.
Second,  get the first child element by using the firstElementChild property.
 */


// Get the last child element
// To get the last child element of a node, you use the lastChild property:

let lastChild = parentElement.lastChild; 

/**
 * In case the parentElement does not have any child element, the lastChild returns null. Similar to the the 
 * firstChild property, the lastChild property returns the first element node, text node, or comment node. 
 * If you want to select only the last child element with the element node type, you use the lastElementChild property:
 */
let lastChild = parentElement.lastElementChild;

// The following code returns the list item which is the last child element of the menu:

let menu = document.getElementById('menu');
console.log(main.lastElementChild);

Output:

<li class="last">About Us</li>

// Get all child elements
// To get a live NodeList of child elements of a specified element, you use the childNodes property:

let children = parentElement.childNodes;

// The childNodes property returns all child elements with any node type. To get the child element with only the 
// element node type, you use the children property:

let children = parentElement.children;

// The following example selects all child elements of the element with the Id main:

let menu = document.getElementById('menu');
let children = menu.children;
console.log(children);














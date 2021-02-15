/**
 * @requires getElementsByClassName()
 * 
 * You will learn how to use the getElementsByClassName() method to select elements by class name.
 */

//- Every HTML element has an optional class attribute like this:

<button class="btn btn-primary">Save</button>

/**
 * The getElementsByClassName() method is available on the document object and any HTML element.

The getElementsByClassName() method accepts a single argument which is a string that contains one or more class names:
*/

let elements = document.getElementsByClassName(classNames)
let elements = parentElement.getElementsByClassName(classNames)

//- In this syntax, the classNames parameter is a string that represents a class name to match. For example:

let btn = document.getElementsByClassName('btn');

//- Note that you cannot use class selectors e.g., .btn or .btn-primary for the getElementsByClassName() method.

<div id="app">
    <header>
        <nav>
            <ul id="menu">
                <li class="item">HTML</li>
                <li class="item">CSS</li>
                <li class="item highlight">JavaScript</li>
                <li class="item">TypeScript</li>
            </ul>
        </nav>
        <h1>getElementsByClassName Demo</h1>
    </header>
     <section>
        <article>
            <h2 class="heading-secondary">Example 1</h2>
        </article>
        <article>
            <h2 class="heading-secondary">Example 2</h2>
        </article>
    </section>
</div>


let menu = document.getElementById('#menu');
let items = menu.getElementsByClassName('item');

let data = [].map.call(items, item => item.textContent);

console.log(data);

Output:

["HTML", "CSS", "JavaScript", "TypeScript"]

/**
 * How it works:

First, select the <ul> element with the class name menu using the getElementById() method.
Then, select <li> elements, which are the descendants of the <ul> element, using the getElementsByClassName() method.
Finally, create an array of the text content of <li> elements by borrowing the map() method of the Array object.
 */

//- To search for the element with the class heading-secondary, you use the following code:

let elements = document.getElementsByClassName('heading-secondary');

let data = [].map.call(elements, elem => elem.textContent);

console.log(data);

Output:

["Example 1", "Example 2"]
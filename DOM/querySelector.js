/**
 * @requires querySelector()
 * @requires querySelectorAll()
 * 
 * you will learn how to use the JavaScript querySelector() and querySelectorAll() to find elements based on 
 * CSS selectors.
 * 
 * The querySelector() is a method of the Element interface. The querySelector() allows you to find the first element 
 * that matches one or more CSS selectors.

 * You can call the querySelector() method on the document or any HTML element.
 */

let element = parentNode.querySelector(selector);

/**
 * In this syntax, the selector is a CSS selector or a group of CSS selectors to match the descendant elements
 *  of the parentNode.

If the selector is not valid CSS syntax, the method will raise a SyntaxError exception.

If no element matches the CSS selectors, the querySelector() returns null.


Besides the querySelector(), you can use the querySelectorAll() method to find all elements that match a CSS selector
 or a group of CSS selector:
 */

let elementList = parentNode.querySelectorAll(selector);

/**
 * Note that the NodeList is an array-like object, not an array object. However, in modern web browsers, you can 
 * use the forEach() method like the one in the array object.

To convert the NodeList to an array, you use the Array.from() method like this:
 */
let nodeList = Array.from(document.querySelectorAll(selector));

//- Example 

`<!DOCTYPE html>
<html lang="en">
<head>
    <title>querySelector() Demo</title>
</head>
<body>
    <header>
        <div id="logo">
            <img src="img/logo.jpg" alt="Logo" id="logo">
        </div>
        <nav class="primary-nav">
            <ul>
                <li class="menu-item current"><a href="#home">Home</a></li>
                <li class="menu-item"><a href="#services">Services</a></li>
                <li class="menu-item"><a href="#about">About</a></li>
                <li class="menu-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Welcome to the JS Dev Agency</h1>

        <div class="container">
            <section class="section-a">
                <h2>UI/UX</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem placeat, atque accusamus voluptas
                    laudantium facilis iure adipisci ab veritatis eos neque culpa id nostrum tempora tempore minima.
                    Adipisci, obcaecati repellat.</p>
                <button>Read More</button>
            </section>
            <section class="section-b">
                <h2>PWA Development</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni fugiat similique illo nobis quibusdam
                    commodi aspernatur, tempora doloribus quod, consectetur deserunt, facilis natus optio. Iure
                    provident labore nihil in earum.</p>
                <button>Read More</button>
            </section>
            <section class="section-c">
                <h2>Mobile App Dev</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos culpa laudantium consequatur ea!
                    Quibusdam, iure obcaecati. Adipisci deserunt, alias repellat eligendi odit labore! Fugit iste sit
                    laborum debitis eos?</p>
                <button>Read More</button>
            </section>
        </div>
    </main>
    <script src="js/main.js"></script>
</body>
</html>`

// Universal selector
// The universal selector denoted by * that matches all elements of any type:

//- *
//- The following example uses the querySelector() selects the first element in the document:

let elements = document.querySelector('*');

//- And this example finds all elements in the document:

let elements = document.querySelectorAll('*');

// Class selector
// To find the element with a given class attribute, you use the class selector syntax:

//- .className

//- The following example finds the first element with the menu-item class:

let note = document.querySelector('.menu-item');

//- And the following example finds all elements with the menu class:

let notes = document.querySelectorAll('.menu-item');

// ID Selector
// To select an element based on the value of its id, you use the id selector syntax:

//  #id

//- The following example finds the first element with the id #logo:

let logo = document.querySelector('#logo');
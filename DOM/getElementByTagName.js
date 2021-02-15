/**
 * @requires getElementsByTagName()
 * 
 * in this tutorial, you will learn how to use the JavaScript getElementsByTagName() to select elements 
 * with a given tag name.
 * 
 * The getElementsByTagName() is a method of the document object or a specific DOM element.

The getElementsByTagName() method accepts a tag name and returns a live HTMLCollection of elements with the matching 
tag name in the order which they appear in the document.
 */

let elements = document.getElementsByTagName(tagName);

//- In the example below, the page shows you the number of h2 tags when you click on the Button provided

`<!DOCTYPE html>
<html>
<head>
    <title>JavaScript getElementsByTagName() Demo</title>
</head>
<body>
    <h1>JavaScript getElementsByTagName() Demo</h1>
    <h2>First heading</h2>
    <p>This is the first paragraph.</p>
    <h2>Second heading</h2>
    <p>This is the second paragraph.</p>
    <h2>Third heading</h2>
    <p>This is the third paragraph.</p>

    <button id="btnCount">Count H2</button>

    <script>
        let btn = document.getElementById('btnCount');
        btn.addEventListener('click', () => {
            let headings = document.getElementsByTagName('h2');
            alert(`The number of H2 tags: ${headings.length}`);
        });
    </script>
</body>

</html>`

/**
 * Summary
The getElementsByTagName() is a method of the document or element object.
The getElementsByTagName() accepts a tag name and returns a list of elements with the matching tag name.
The getElementsByTagName() returns a live HTMLCollection of elements. The HTMLCollection is an array-like object.
 */


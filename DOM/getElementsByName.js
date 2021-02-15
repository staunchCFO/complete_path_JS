/**
 * @requires getElementsByName()
 * 
 * in this tutorial, you will learn how to use the JavaScript getElementsByName() method to get elements with a 
 * given name in a document.
 */

//- Every element on an HTML document may have a name attribute:

`<input type="radio" name="language" value="JavaScript">`

//- Unlike the id attribute, multiple HTML elements can share the same value of the name attribute like this:

`<input type="radio" name="language" value="JavaScript">
<input type="radio" name="language" value="TypeScript">`

//- To get all elements with a specified name, you use the getElementsByName() method of the document object:

let elements = document.getElementsByName(name);

//- The getElementsByName() accepts a name which is the value of the name attribute of elements and returns a live 
// NodeList of elements.

/**
 * JavaScript getElementsByName() example
The following example shows a list of radio buttons that have the same name (rate).

 * When you click the Rate button, the page will show an alert dialog that displays the rating of the service such 
 as Very Poor, Poor, OK, Good, and Very Good:
*/

`<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JavaScript getElementsByName Demo</title>
</head>
<body>
    <p>Please rate the service:</p>
    <p>
        <input type="radio" name="rate" value="Very poor"> Very poor
        <input type="radio" name="rate" value="Poor"> Poor
        <input type="radio" name="rate" value="OK"> OK
        <input type="radio" name="rate" value="Good"> Good
        <input type="radio" name="rate" value="Very Good"> Very Good
    </p>
    <p>
        <button id="btnRate">Submit</button>
    </p>
    <script>
        let btn = document.getElementById('btnRate');

        btn.addEventListener('click', () => {
            let rates = document.getElementsByName('rate');
            rates.forEach((rate) => {
                if (rate.checked) {
                    alert(`You rated: ${rate.value}`);
                }
            })
        });
    </script>
</body>
</html>`

/**
 * How it works:

First, select the Rate button by its id btnRate using the getElementById() method.
Second, hook a click event to the Rate button so that when the button is clicked, an anonymous function is executed.
Third, call the getElementsByName() in the click event handler to select all radio buttons that have the name rate.
Finally, iterate over the radio buttons. If a radio button is checked, then display an alert that shows the value of 
the selected radio button.
*/
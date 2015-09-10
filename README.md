# One Quiz to Rule Them All

> **Instructions:**
>
> Fork this repository into your Github account. Any questions that require you to answer in your own words, but not write code (e.g. question 12) just edit this README with your answer.

## Setup

```
cd lib && bower install
cd ..
http-server
```

## Basics

> For this section, I wrote some starter DOM elements in the `index.html` file.

1. Write a selector that selects only the first sibling li elements.
2. Make all li elements behave as inline elements.
3. Only the odd section elements should have a border.
4. Only the even li elements should have a lime background.
5. Only the first aside element in the 2nd section should have blue font color.
6. There are three div elements with instructions inside them about which side of the screen they should be displayed on. Follow those instructions.
7. Using vanilla JavaScript, update the HTML of the element with the id of `vanilla_output` with the following text: "This content generated with vanilla JavaScript".
8. Using jQuery, update the HTML of the element with the id of `jquery_output` with the following text: "This content generated with jQuery".

## JavaScript concepts
1. Explain what hoisting is. Provide your answer below.

Hoisting is how javascript views varriables.  It is equivalent to bringing all declared varriables to the top of the scope.  Thus if the varrible is declared in the global scope, the variable would be at the top of the   file (outside of any functions) and be accessible to all the code.  If a variable is declared within a function, then hoisting would declare the variable at the begining of the function and all code within the scope of the function would have access to that variable, but it would not be available outside the scope of the function.
     
2. What is a callback? Why do we use them in JavaScript? Provide your answer, and code a simple example below.

Callback functions are functions within a function. A callback allows us to run a piece of code after another event takes place.  In JavaScript, code which requires certian information may be loaded first.  Since the code does not have the information it needs, nothing happens.  A callback is used to rerun the code in question once the desired information is available.   One example of a callback is the onclick function. The code does not execute until the button is clicked.
  
  example: 
      $('#inputData').click(function (log) {
        console.log("button clicked");
      });
  

## Functions and operators

> In `main.js` do the following:

1. Write a function named `modulus` that takes two arguments. The function should use the modulo operator to return the remainder between the first and second arguments.  e.g. `modulus(10, 3) // Should return 1`.
1. Write a function named `doMath`. This function takes three arguments.  The first two will contain integer values. The third argument will be a function reference. Write two more functions named `add` and `subtract`. Execute the `doMath` function to add two numbers together. Then execute the `doMath` function to subtract the two numbers.

## Arrays

> In the `main.js`, I started you off with a simple array.

1. Write a function named `sortedPlanets` that returns an array of the planet names sorted alphabetically.
1. Write a function named `reversedPlanets` that returns an array of planet names that are reversed (i.e. "htraE").
1. Write a function named `longPlanets` that returns an array containing only the planet names that are 7 characters long, or longer.

## IIFE

1. In the file named `IIFE.js`. Write an IIFE that defines a global variable named **FruitMaker**. It should contain a private array holding the following strings: "apples", "bananas", "cherries", "huckleberries".
1. The IIFE should expose in its public interface a getter named `getFruits()` that returns all fruits, and a setter named `addFruit()` that provides the ability to add a new fruit to the array.
1. In the file named `AugmentedIIFE.js`, augment **FruitMaker** with a function named `slices()` that accepts two arguments: the name of the fruit, and the number of slices to make. It should return an array containing the name of the fruit duplicated how ever many slices was requested.

  For example: `slices("apples", 2)` should return `["apples", "apples"]`

## XHR

1. Write a function named `getAnimals` that uses the jQuery `ajax` method to retrieve the `data/animals.json` file. When you execute the functions, it should just log *just the array* of animals to the console when the async is complete. Make sure you provide a prompt of "animals" when logging the array.
1. What are the four HTTP verbs that you can use in an XHR that correspond to the CRUD actions (create, read, update, delete)?
  GET, POST, PUT & DELETE

1. Why did we use Promises when dealing with asynchronous XHR calls?'
2. 
  Promises maintain their state and can be accesses at any point within the code.  Also, using then() allowed us to organize the order in which code executed.  In addition, it provided instructions for a fail that may have (but never did for me) provided a useful message as to why it failed.

2. Provide a simple example of the syntax for handling a Promise.
  
    function example() {
        var defered = Q.defer()
        $.ajax ({images.json })
        .done (function (data) {
          defer.resolved(data)
        })
        .fail(function(xhr, status, error) {
          defer.reject(error)
        });
        return deferred.promise;
     }

## Scope and this

What gets logged to the console when the following code executes? Explain why.

42 - The reason why has to do with call stack and call site.  I'm not 100% clear on this, but I think it's because steve() is the function that is called and the other definitions of answer are within the scopes of the other functions and cannot be accessed outside the function.

```
var answer = "42";

function steve() {
  luke();
}

function luke() {
  var answer = "0";
  greg(answer);
}

function greg(answer) {
  var answer = "666";
  console.log( this.answer );
}

steve();
```


const questions = [
  {
    id: 1,
    question: [
      "Which operator returns true if the two compared values are not equal?",
    ],
    incorrect_answer: ["<>", "~", "==!"],
    // correct_answer: 4,
    correct_answer: "!=",
    read_more:
      "Reference Javascript Comparison Operators\n        (https://www.w3schools.com/js/js_operators.asp)",
  },
  {
    id: 2,
    question: ["How is a forEach statement different from a for statement?"],
    incorrect_answer: [
      "Only a for statement uses a callback function.",
      "Only a forEach statement lets you specify your own iterator.",
      "A forEach statement is generic, but a for statement can be used only with an array.",
    ],
    // correct_answer: 2,
    correct_answer:
      "A for statement is generic, but a forEach statement can be used only with an array.",
    read_more:
      "Reference Differences between forEach and for loop\n        (https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)",
  },
  {
    id: 3,
    question: [
      "Review the code below. Which statement calls the addTax function and passes 50 as an argument? How would you use this function to find out how much tax should be paid on $50?",
      "function addTax(total) {\n return total * 1.05;\n }",
    ],
    incorrect_answer: ["addTax = 50;", "return addTax 50;", "addTax 50;"],
    // correct_answer: 3,
    correct_answer: "addTax(50);",
    read_more:
      "Reference functions in javascript\n        (https://www.w3schools.com/js/js_functions.asp)",
  },
  {
    id: 4,
    question: [
      "Which statement is the correct way to create a variable called rate and assign it the value 100?",
    ],
    incorrect_answer: ["let 100 = rate;", "100 = let rate;", "rate = 100;"],
    // correct_answer: 1,
    correct_answer: "let rate = 100;",
    read_more:
      "Reference Javascript Assignment operators\n        (https://www.w3schools.com/js/js_operators.asp)",
  },
  {
    id: 5,
    question: [
      "Which statement creates a new object using the Person constructor? Which statement creates a new Person object called 'student'?",
    ],
    incorrect_answer: [
      "var student = construct Person",
      "var student = Person();",
      "var student = construct Person();",
    ],
    // correct_answer: 1,
    correct_answer: "var student = new Person();",
    read_more:
      "Reference\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)",
  },
  {
    id: 6,
    question: [
      "When would the final statement in the code shown be logged to the console? When would 'results shown' be logged to the console?",
      "let modal = document.querySelector('#result');\n        setTimeout(function () {\n        modal.classList.remove('hidden');\n        }, 10000)\n        console.log('Results shown');",
    ],
    incorrect_answer: [
      "after 10 second",
      "after results are received from the HTTP request",
      "after 10000 seconds",
    ],
    // correct_answer: 4,
    correct_answer: "immediately",
    read_more:
      "Reference Javascript is synchronous and single threaded\n        (https://stackoverflow.com/a/2035662/15067394)",
  },
  {
    id: 7,
    question: [
      "Which snippet could you add to this code to print 'food' to the console?",
      "class Animal{\n static belly = [];\n eat(){\n  Animal.belly.push('food');\n }\n}\nlet a = new Animal();\na.eat();\nconsole.log(/* Snippet Here */); //Prints food",
    ],
    incorrect_answer: [
      "a.prototype.belly[0]",
      "Object.getPrototype0f (a).belly[0]",
      "a.belly[0]",
    ],
    // correct_answer: 3,
    correct_answer: "Animal.belly[0]",
    read_more:
      "Reference Javascript Class static Keyword\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)",
  },
  {
    id: 8,
    question: [
      "You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?",
      "for (var i = 1; i <= 4; i++){\n        setTimeout(function () {\n        console.log(i);\n        }, i * 10000);\n        }",
    ],
    incorrect_answer: [
      "for (var i = 1; i <= 4; i++) {(function (i) {setTimeout(function () {console.log(j);}, j * 1000);})(j);",
      "for (var i = 1; i <= 4; i++) {setTimeout(function () {console.log(i);}, i * 1000);}",
      "for (var j = 1; j <= 4; j++) {setTimeout(function () {console.log(j);}, j * 1000);}",
    ],
    // correct_answer: 3,
    correct_answer:
      "for (var i = 1; i <= 4; i++) {(function (j) {setTimeout(function () {console.log(j);}, j * 1000);})(i);}",
    read_more:
      "Reference setTimeout:\n        (https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)Reference immediately invoked anonymous functions:\n        (https://www.javascripttutorial.net/javascript-anonymous-functions/)",
  },
  {
    id: 9,
    question: ["How does a function create a closure?"],
    incorrect_answer: [
      "It reloads the document whenever the value changes.",
      "It completes execution without returning.",
      "It copies a local variable to the global scope.",
    ],
    // correct_answer: 2,
    correct_answer: "It returns a reference to a variable in its parent scope.",
    read_more:
      "Reference:\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)",
  },
  {
    id: 10,
    question: ["Which statement creates a new function called discountPrice?"],
    incorrect_answer: [
      "let discountPrice(price) {return price * 0.85;};",
      "let function = discountPrice(price) {return price * 0.85;};",
      "discountPrice = function (price) {return price * 0.85;};",
    ],
    // correct_answer: 1,
    correct_answer:
      "let discountPrice = function (price) {return price * 0.85;};",
    read_more:
      "Reference defining javascript functions\n        (https://www.w3schools.com/js/js_functions.asp)",
  },
  {
    id: 11,
    question: [
      "What is the result in the console of running the code shown?",
      "var Storm = function () {};\n        Storm.prototype.precip = 'rain';\n        var WinterStorm = function () {};\n        WinterStorm.prototype = new Storm();\n        WinterStorm.prototype.precip = 'snow';\n        var bob = new WinterStorm();\n        console.log(bob.precip);",
    ],
    incorrect_answer: ["Storm()", "undefined", "rain"],
    // correct_answer: 4,
    correct_answer: "snow",
    read_more:
      "Reference prototype chain\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)",
  },
  {
    id: 12,
    question: [
      "You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?",
    ],
    incorrect_answer: [
      "/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/",
      "/[0-9]+:[0-9]+:[0-9]+/",
      "/ : : /",
    ],
    // correct_answer: 2,
    correct_answer: "/dd:dd:dd/",
    read_more:
      "Repeating characters\n        (https://regexone.com/lesson/repeating_characters)Kleene operators(https://regexone.com/lesson/kleene_operators)",
  },
  {
    id: 13,
    question: [
      "What is the result in the console of running this code?",
      "'use strict'; \n        function logThis() { \n        this.desc = 'logger'; \n        console.log(this); } \n        new logThis();",
    ],
    incorrect_answer: ["undefined", "window", "function"],
    // correct_answer: 3,
    correct_answer: "{desc: 'logger'}",
    read_more:
      "Reference javascript classes\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)",
  },
  {
    id: 14,
    question: [
      "How would you reference the text 'avenue' in the code shown?",
      "let roadTypes = [\n        'street', 'road', 'avenue', 'circle'\n        ];",
    ],
    incorrect_answer: ["roadTypes.2", "roadTypes[3]", "roadTypes.3"],
    // correct_answer: 4,
    correct_answer: "roadTypes[2]",
    read_more:
      "Reference accessing javascript arrays\n        (https://www.w3schools.com/js/js_arrays.asp)",
  },
  {
    id: 15,
    question: [
      "What is the result of running this statement?",
      "console.log(typeof 42);",
    ],
    incorrect_answer: ["float", "value", "integer"],
    // correct_answer: 3,
    correct_answer: "number",
    read_more:
      "Reference javascript data types\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)",
  },
  {
    id: 16,
    question: [
      "Which property references the DOM object that dispatched an event?",
    ],
    incorrect_answer: ["self", "object", "source"],
    // correct_answer: 3,
    correct_answer: "target",
    read_more:
      "Reference DOM events\n        (https://www.w3schools.com/jsref/dom_obj_event.asp)",
  },
  {
    id: 17,
    question: [
      "You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?",
      "function addNumbers(x, y) {\n        if (isNaN(x) || isNaN(y)) {\n        }\n        }",
    ],
    incorrect_answer: [
      "exception('One or both parameters are not numbers')",
      "catch('One or both parameters are not numbers')",
      "error('One or both parameters are not numbers')",
    ],
    // correct_answer: 4,
    correct_answer: "throw('One or both parameters are not numbers')",
    read_more:
      "Reference javascript throw\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)",
  },
  {
    id: 18,
    question: ["Which method converts JSON data to a JavaScript object?"],
    incorrect_answer: [
      "JSON.fromString();",
      "JSON.toObject",
      "JSON.stringify()",
    ],
    // correct_answer: 2,
    correct_answer: "JSON.parse()",
    read_more:
      "Reference convert json to javascript object:\n        (https://www.w3schools.com/js/js_json_parse.asp)",
  },
  {
    id: 19,
    question: ["When would you use a conditional statement?"],
    incorrect_answer: [
      "When you want to reuse a set of statements multiple times.",
      "When you want to group data together",
      "When you want to loop through a group of statement.",
    ],
    // correct_answer: 2,
    correct_answer:
      "When you want your code to choose between multiple options.",
    read_more:
      "Reference javascript conditionals\n        (https://www.javascript.com/learn/conditionals)",
  },
  {
    id: 20,
    question: [
      "What would be the result in the console of running this code?",
      "for (var i = 0; i < 5; i++) {\n        console.log(i);\n        }",
    ],
    incorrect_answer: ["1 2 3 4 5", "1 2 3 4", "0 1 2 3 4 5"],
    // correct_answer: 3,
    correct_answer: "0 1 2 3 4",
    read_more:
      "Reference javascript for loops\n        (https://www.w3schools.com/js/js_loop_for.asp)",
  },
  {
    id: 21,
    question: [
      "Which Object method returns an iterable that can be used to iterate over the properties of an object?",
    ],
    incorrect_answer: ["Object.get()", "Object.loop()", "Object.each()"],
    // correct_answer: 4,
    correct_answer: "Object.keys()",
    read_more:
      "Reference javascript object static methods\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)",
  },
  {
    id: 22,
    question: [
      "What will be logged to the console?",
      "var a = ['dog', 'cat', 'hen'];\n        a[100] = 'fox';\n        console.log(a.length);",
    ],
    incorrect_answer: ["3", "4", "100"],
    // correct_answer: 1,
    correct_answer: "101",
    read_more: "",
  },
  {
    id: 23,
    question: [
      "What is one difference between collections created with Map and collections created with Object?",
    ],
    incorrect_answer: [
      "You can iterate over values in a Map in their insertion order.",
      "Keys in Maps can be strings.",
      "You can access values in a Map without iterating over the whole collection.",
    ],
    /**
     ***Explanation:** `Map.prototype.size returns the number of elements in a Map, whereas Object does not have a built-in method to return its size.`
      [Reference map methods javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
     */
    // correct_answer: 2,
    correct_answer:
      "You can count the records in a Map with a single method call.",
    read_more:
      "Reference map methods javascript\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)",
  },
  {
    id: 24,
    question: [
      "What is the value of dessert.type after executing this code?",
      "const dessert = { type: 'pie' };\n        dessert.type = 'pudding';",
    ],
    incorrect_answer: ["pie", "The code will throw an error.", "undefined"],
    // correct_answer: 3,
    correct_answer: "pudding",
    read_more:
      "Reference working with js objects\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
  },
  {
    id: 25,
    question: ["0 && hi"],
    incorrect_answer: ["ReferenceError", "True", "false"],
    // correct_answer: 3,
    correct_answer: "0",
    read_more:
      "Reference boolean logic:\n        (https://ntgard.medium.com/https-medium-com-ntgard-boolean-logic-in-javascript-part-1-3371af974f19)",
  },
  {
    id: 26,
    question: [
      "Which of the following operators can be used to do a short-circuit evaluation?",
    ],
    incorrect_answer: ["++", "--", "=="],
    // correct_answer: 4,
    correct_answer: "||",
    read_more:
      "Reference short circuit javascript\n        (https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)",
  },
  {
    id: 27,
    question: [
      "Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?",
    ],
    incorrect_answer: [
      "Student.parent = Person;",
      "Student.prototype = Person;",
      "Student.prototype = Person();",
    ],
    // correct_answer: 2,
    correct_answer: "Student.prototype = new Person();",
    read_more:
      "Reference prototype object js\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)",
  },
  {
    id: 28,
    question: [
      "Why would you include a 'use strict' statement in a JavaScript file?",
    ],
    incorrect_answer: [
      "to tell parsers to interpret your JavaScript syntax loosely",
      "to instruct the browser to automatically fix any errors it finds in the code",
      "to enable ES6 features in your code",
    ],
    // correct_answer: 2,
    correct_answer:
      "to tell parsers to enforce all JavaScript syntax rules when processing your code",
    read_more:
      "Reference what is use strict in js\n        (https://www.w3schools.com/js/js_strict.asp)",
  },
  {
    id: 29,
    question: [
      "Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?",
    ],
    incorrect_answer: ["all of them", "const", "let"],
    // correct_answer: 3,
    correct_answer: "var",
    read_more:
      "Reference var vs let vs const in js\n        (https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)",
  },
  {
    id: 30,
    question: ["Which of the following values is not a Boolean false?"],
    incorrect_answer: ["Boolean(0)", "Boolean('')", "Boolean(NaN)"],
    // correct_answer: 4,
    correct_answer: "Boolean('false')",
    read_more:
      "Reference boolean of a string\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)",
  },
  {
    id: 31,
    question: ["Which of the following is not a keyword in JavaScript?"],
    incorrect_answer: ["this", "catch", "function"],
    // correct_answer: 4,
    correct_answer: "array",
    read_more:
      "Reference js reserved words\n        (https://www.w3schools.com/js/js_reserved.asp)",
  },
  {
    id: 32,
    question: [
      "Which variable is an implicit parameter for every function in JavaScript?",
    ],
    incorrect_answer: ["args", "argsArray", "argumentsList"],
    // correct_answer: 1,
    correct_answer: "Arguments",
    read_more:
      "Reference implicit js parameters for functions\n        (https://www.codeproject.com/Tips/1221966/JavaScript-Functions-Implicit-Parameters)",
  },
  {
    id: 33,
    question: [
      "For the following class, how do you get the value of 42 from an instance of X?",
      "class X {get Y() {\n        return 42;}\n  }\n        var x = new X();",
    ],
    incorrect_answer: ["x.get('Y')", "x.Y()", "x.get().Y"],
    // correct_answer: 2,
    correct_answer: "x.Y",
    read_more:
      "Reference getters\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)",
  },
  {
    id: 34,
    question: [
      "What is the result of running this code?",
      "sum(10, 20);\n diff(10, 20);\n        function sum(x, y) {\n        return x + y;\n        }\n        let diff = function (x, y) {\n        return x - y;\n        };",
    ],
    incorrect_answer: [
      "30, ReferenceError, 30, -10",
      "30, -10",
      "ReferenceError, -10",
    ],
    // correct_answer: 2,
    correct_answer: "30, ReferenceError",
    read_more:
      "Reference accessing before initialization\n        (https://stackoverflow.com/question/56318460/cannot-access-variable-name-before-initialization)",
  },
  {
    id: 35,
    question: [
      "Why is it usually better to work with Objects instead of Arrays to store a collection of records?",
    ],
    /**
     **Explanation:** Records in an object can be retrieved using their key which can be any given value (e.g. an employee ID, a city name, etc), whereas to retrieve a record from an array we need to know its index.
     [Reference efficiency of lookups](https://stackoverflow.com/question/17295056/array-vs-object-efficiency-in-javascript)
     */
    incorrect_answer: [
      "Objects are more efficient in terms of storage.",
      "Adding a record to an object is significantly faster than pushing a record into an array.",
      "Working with objects makes the code more readable.",
    ],
    // correct_answer: 3,
    correct_answer:
      "Most operations involve looking up a record, and objects can do that better than arrays.",
    read_more:
      "Reference efficiency of lookups\n        (https://stackoverflow.com/question/17295056/array-vs-object-efficiency-in-javascript)",
  },
  {
    id: 36,
    question: [
      "Which statement is true about the 'async' attribute for the HTML script tag?",
    ],
    incorrect_answer: [
      "It can be used for both internal and external JavaScript code.",
      "It can be used only for internal JavaScript code.",
      "It can be used only for internal or external JavaScript code that exports a promise.",
    ],
    // correct_answer: 4,
    correct_answer: "It can be used only for external JavaScript code.",
    read_more:
      "Reference async attribute for html\n        (https://www.w3schools.com/tags/att_script_async.asp)",
  },
  {
    id: 37,
    question: [
      "How do you import the lodash library making it top-level Api available as the '_' variable?",
    ],
    incorrect_answer: [
      "import 'lodash' as _;",
      "import '_' from 'lodas",
      "import lodash as _ from 'lodash'",
    ],
    // correct_answer: 1,
    correct_answer: "import _ from 'lodash';",
    read_more:
      "Reference how to import library in js\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)",
  },
  {
    id: 38,
    question: ["What does the following expression evaluate to?", "[] == [];"],
    incorrect_answer: ["True", "undefined", "[]"],
    // correct_answer: 4,
    correct_answer: "False",
    read_more:
      "Reference arrays in js are objects\n        (https://stackoverflow.com/question/30820611/why-doesnt-equality-check-work-with-arrays)",
  },
  {
    id: 39,
    question: [
      "What type of function can have its execution suspended and then resumed at a later point?",
    ],
    incorrect_answer: [
      "Arrow function",
      "Async/ Await function",
      "Promise function",
    ],
    // correct_answer: 1,
    correct_answer: "Generator function",
    read_more:
      "Reference what are generators in nodejs\n        (https://www.guru99.com/node-js-generators-compare-callbacks.html#:~:text=Generators%20are%20function%20executions%20that,resumed%20at%20a%20later%20point.)",
  },
  {
    id: 40,
    question: [
      "What will this code print?",
      "var v = 1;\n        var f1 = function () {\n        console.log (v);\n        };   \n        var f2 = function () {\n        var v = 2;    \n        f1(); \n        };   \n        f2();",
    ],
    incorrect_answer: [
      "2",
      "Nothing - this code will throw an error.",
      "undefined",
    ],
    // correct_answer: 2,
    correct_answer: "1",
    read_more:
      "Reference closures in js / nested functions\n        (https://javascript.info/closure)",
  },
  {
    id: 41,
    question: ["Which statement is true about Functional Programming?"],
    incorrect_answer: [
      "Every object in the program has to be a function.",
      "Code is grouped with the state it modifies.",
      "Date fields and methods are kept in units.",
    ],
    // correct_answer: 4,
    correct_answer: "Side effects are not allowed.",
    read_more:
      "Reference functional programming\n        (https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)",
  },
  {
    id: 42,
    question: [
      "Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?",
    ],
    incorrect_answer: [
      "You are calling a method named reduce on an object that does not exist.",
      "You are calling a method named reduce on an empty array.",
      "You are calling a method named reduce on an object that's has a null value.",
    ],
    // correct_answer: 1,
    correct_answer:
      "You are calling a method named reduce on an object that's declared but has no value.",
    read_more:
      "You cannot invoke reduce on undefined object... It will throw (yourObject is not Defined...)",
  },
  {
    id: 43,
    question: [
      "How many prototype objects are in the chain for the following array?",
      "let arr = [];",
    ],
    incorrect_answer: ["3", "0", "1"],
    // correct_answer: 2,
    correct_answer: "2",
    read_more:
      "Reference array prototype\n        (https://www.w3schools.com/jsref/jsref_prototype_array.asp)",
  },
  {
    id: 44,
    question: ["Which choice is _not_ a unary operator?"],
    incorrect_answer: ["typeof", "delete", "void"],
    // correct_answer: 3,
    correct_answer: "instanceof",
    read_more:
      "Reference js unary operators\n        (https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful#:~:text=A%20unary%20operation%20is%20an,therefore%20their%20functionality%20is%20guaranteed.)",
  },
  {
    id: 45,
    question: [
      "What type of scope does the end variable have in the code shown?",
      "var start = 1;\n        if (start === 1) {\n        let end = 2; \n        }",
    ],
    incorrect_answer: ["conditional", "global", "function"],
    // correct_answer: 2,
    correct_answer: "block",
    read_more:
      "Reference block vs function scope\n        (https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe)",
  },
  {
    id: 46,
    question: [
      "What will the value of y be in this code:",
      "const x = 6 % 2;\n        const y = x ? 'One' : 'Two';",
    ],
    incorrect_answer: ["One", "undefined", "TRUE"],
    // correct_answer: 4,
    correct_answer: "Two",
    read_more:
      "Reference ternary operator js\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)",
  },
  {
    id: 47,
    question: ["Which keyword is used to create an error?"],
    incorrect_answer: ["exception", "catch", "error"],
    // correct_answer: 1,
    correct_answer: "throw",
    read_more:
      "Reference throwing errors in js\n        (<https://www.w3schools.com/jsref/jsref_throw.asp#:~:text=The%20throw%20statement%20throws%20(generates,to%20create%20a%20custom%20error.)>)",
  },
  {
    id: 48,
    question: [
      "What's one difference between the async and defer attributes of the HTML script tag?",
    ],
    incorrect_answer: [
      "The defer attribute can work synchronously.",
      "The defer attribute works only with generators.",
      "The defer attribute works only with promises.",
    ],
    // correct_answer: 4,
    correct_answer:
      "The defer attribute will asynchronously load the scripts in order.",
    read_more:
      "Reference async vs defer\n        (https://www.digitalocean.com/community/tutorials/html-defer-async#:~:text=%3E-,Async%20vs%20Defer,order%20as%20they%20are%20called.)",
  },
  {
    id: 49,
    question: [
      "The following program has a problem. What is it?",
      "var a;\n        var b = (a = 3) ? true : false;",
    ],
    incorrect_answer: [
      "You can't define a variable without initializing it.",
      "You can't use a ternary in the right-hand side of an assignment operator.",
      "The code is using the deprecated var keyword.",
    ],
    // correct_answer: 1,
    correct_answer:
      "The condition in the ternary is using the assignment operator.",
    read_more:
      "Reference ternary operator js\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)",
  },
  {
    id: 50,
    question: [
      "Which statement references the DOM node created by the code shown?",
      "<p class='pull'>\n        lorem ipsum\n        </p>",
    ],
    incorrect_answer: [
      "Document.querySelector('class.pull')",
      "Document.querySelector('pull')",
      "Document.querySelector('#pull')",
    ],
    // correct_answer: 2,
    correct_answer: "document.querySelector('.pull');",
    read_more:
      "Reference query selector\n        (https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)",
  },
  {
    id: 51,
    question: [
      "What value does this code return?",
      "let correct_answer = true;\n        if (correct_answer === false) {\n        return 0;\n        } else { \n        return 10;\n        }",
    ],
    incorrect_answer: ["true", "false", "0"],
    // correct_answer: 1,
    correct_answer: "10",
    read_more:
      "Reference javascript conditionals\n        (https://www.javascript.com/learn/conditionals)",
  },
  {
    id: 52,
    question: [
      "What is the result in the console of running the code shown?",
      "var start = 1;\n        function setEnd() {\n        var end = 10;\n        }\n        setEnd(); \n        console.log(end); ",
    ],
    incorrect_answer: ["10", "0", "undefined"],
    // correct_answer: 3,
    correct_answer: "ReferenceError",
    read_more:
      "Reference\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)",
  },
  {
    id: 53,
    question: [
      "What will this code log in the console?",
      "function sayHello() {\n        console.log('hello');\n        }\n        console.log(sayHello.prototype);",
    ],
    incorrect_answer: ["undefined", "hello", "an error message"],
    // correct_answer: 3,
    correct_answer: "an object with a constructor property",
    read_more:
      "Reference prototypes\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)",
  },
  {
    id: 54,
    question: [
      "Which collection object allows unique value to be inserted only once?",
    ],
    incorrect_answer: ["Object", "Array", "Map"],
    // correct_answer: 2,
    correct_answer: "Set",
    read_more:
      "Reference javascript sets\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)",
  },
  {
    id: 55,
    question: [
      "What two values will this code print?",
      "function printA() {\n        console.log(correct_answer);\n        var correct_answer = 1;\n        }\n        printA();\n        printA();",
    ],
    incorrect_answer: ["1 then 1", "1 then undefined", "undefined then 1"],
    // correct_answer: 3,
    correct_answer: "undefined then undefined",
    read_more:
      "Reference\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)",
  },
  {
    id: 56,
    question: [
      "How does the `forEach()` method differ from a `for` statement?",
    ],
    incorrect_answer: [
      "forEach allows you to specify your own iterator, whereas for does not.",
      "forEach can be used only with strings, whereas for can be used with additional data types.",
      "for loops can be nested; whereas forEach loops cannot.",
    ],
    // correct_answer: 3,
    correct_answer:
      "forEach can be used only with an array, whereas for can be used with additional data types.",
    read_more:
      "Reference Differences between forEach and for loop\n        (https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)",
  },
  {
    id: 57,
    question: [
      "Which choice is an incorrect way to define an arrow function that returns an empty object?",
    ],
    incorrect_answer: ["({})", "{ return {};}", "(({}))"],
    // correct_answer: 2,
    correct_answer: "{}",
    read_more:
      "Reference arrow functions\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)",
  },
  {
    id: 58,
    question: ["Why might you choose to make your code asynchronous?"],
    incorrect_answer: [
      "to ensure that tasks further down in your code are not initiated until earlier tasks have completed",
      "to make your code faster",
      "to ensure that the call stack maintains a LIFO (Last in, First Out) structure",
    ],
    // correct_answer: 1,
    correct_answer:
      "to start tasks that might take some time without blocking subsequent tasks from executing immediately",
    read_more:
      "*EXPLANATION:** to ensure that tasks further down in your code are not initiated until earlier tasks have completed you use the normal (synchronous) flow where each command is executed sequentially.Asynchronous code allows you to break this sequence: start a long running function (AJAX call to an external service) and continue running the rest of the code in parallel.",
  },
  {
    id: 59,
    question: ["Which expression evaluates to true?"],
    incorrect_answer: ["[3] == [3]", "3 != '3'", "3 === '3'"],
    // correct_answer: 2,
    correct_answer: "3 == '3'",
    read_more:
      "Reference booleans\n        (https://www.scaler.com/topics/boolean-in-javascript/)",
  },
  {
    id: 60,
    question: ["Which of these is a valid variable name?"],
    incorrect_answer: ["5thItem", "grand total", "function"],
    // correct_answer: 2,
    correct_answer: "firstName",
    read_more:
      "Reference coding conventions\n        (https://www.w3schools.com/js/js_conventions.asp)",
  },
  {
    id: 61,
    question: ["Which method cancels event default behavior?"],
    incorrect_answer: ["cancel()", "stop()", "prevent()"],
    // correct_answer: 3,
    correct_answer: "preventDefault()",
    read_more:
      "Reference javascript events\n        (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)",
  },
  {
    id: 62,
    question: ["Which method do you use to attach one DOM node to another?"],
    incorrect_answer: ["attachNode()", "getNode()", "querySelector()"],
    // correct_answer: 4,
    correct_answer: "appendChild()",
    read_more:
      "Reference Node interface\n        (https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)",
  },
  {
    id: 63,
    question: ["What statement can be used to skip an iteration in a loop?"],
    incorrect_answer: ["break", "pass", "skip"],
    // correct_answer: 4,
    correct_answer: "continue",
    read_more:
      "Reference break vs continue\n        (https://www.w3schools.com/js/js_break.asp)",
  },
  {
    id: 64,
    question: ["Which choice is valid example for an arrow function?"],
    incorrect_answer: ["a, b => {return c;", "a, b => c", "{ a, b } => c"],
    // correct_answer: 1,
    correct_answer: "(a,b) => c",
    read_more:
      "Reference arrow functions\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)",
  },
  {
    id: 65,
    question: [
      " Which concept is defined as a template that can be used to generate different objects that share some shape and/or behavior?",
    ],
    incorrect_answer: ["generator function", "map", "proxy"],
    // correct_answer: 1,
    correct_answer: "class",
    read_more:
      "Reference javascript classes\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)",
  },
  {
    id: 66,
    question: ["How do you add a comment to JavaScript code?"],
    incorrect_answer: [
      "! This is a comment",
      "# This is a comment",
      "\\This is a comment",
    ],
    // correct_answer: 4,
    correct_answer: "// This is a comment",
    read_more:
      "Reference comments in javascript\n        (https://www.w3schools.com/js/js_comments.asp)",
  },
  {
    id: 67,
    question: [
      "If you attempt to call a value as a function but the value is not a function, what kind of error would you get?",
    ],
    incorrect_answer: ["SystemError", "SyntaxError", "LogicError"],
    // correct_answer: 1,
    correct_answer: "TypeError",
    read_more:
      "Reference javascript errors\n        (https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error)",
  },
  {
    id: 68,
    question: [
      "Which method is called automatically when an object is initialized?",
    ],
    incorrect_answer: ["create()", "new()", "init()"],
    // correct_answer: 3,
    correct_answer: "constructor()",
    read_more:
      "Reference javascript constructors\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)",
  },
  {
    id: 69,
    question: [
      "What is the result of running the statement shown?",
      "let a = 5;\n        console.log(++a);",
    ],
    incorrect_answer: ["4", "10", "5"],
    // correct_answer: 3,
    correct_answer: "6",
    read_more:
      "Reference ++x vs x++\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)",
  },
  {
    id: 70,
    question: [
      "You've written the event listener shown below for a form button, but each time you click the button, the page reloads. Which statement would stop this from happening?",
      "button.addEventListener('click',\n        function (e) {\n        button.className = 'clicked';\n        }, false,);",
    ],
    incorrect_answer: [
      "e.blockReload();",
      "button.preventDefault()",
      "button.blockReload();",
    ],
    // correct_answer: 4,
    correct_answer: "e.preventDefault();",
    read_more:
      "Reference events in javascript\n        (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)",
  },
  {
    id: 71,
    question: [
      "Which statement represents the starting code converted to an IIFE?",
    ],
    incorrect_answer: [
      "function() { console.log('lorem ipsum'); }()();",
      "function() { console.log('lorem ipsum'); }();",
      "const function({})",
    ],
    // correct_answer: 3,
    correct_answer: "(function() { console.log('lorem ipsum'); })();",
    read_more:
      "Reference what is an Immediately Invoked Function Expression\n        (https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)",
  },
  {
    id: 72,
    question: ["Which statement selects all img elements in the DOM tree?"],
    incorrect_answer: [
      "Document.querySelector('img')",
      "Document.querySelectorAll('<img>')",
      "Document.querySelector('<img>')",
    ],
    // correct_answer: 3,
    correct_answer: "Document.querySelectorAll('img')",
    read_more:
      "Reference query selector\n        (https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)",
  },
  {
    id: 73,
    question: ["Why would you choose an asynchronous structure for your code?"],
    incorrect_answer: [
      "To use ES6 syntax",
      "To ensure that parsers enforce all JavaScript syntax rules when processing your code",
      "To ensure that tasks further down in your code aren't initiated until earlier tasks have completed",
    ],
    // correct_answer: 2,
    correct_answer:
      "To start tasks that might take some time without blocking subsequent tasks from executing immediately",
    read_more:
      "Reference async function\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)",
  },
  {
    id: 74,
    question: [
      "What is the HTTP verb to request the contents of an existing resource?",
    ],
    incorrect_answer: ["DELETE", "PATCH", "POST"],
    // correct_answer: 2,
    correct_answer: "GET",
    read_more:
      "Reference http methods\n        (https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)",
  },
  {
    id: 75,
    question: [
      "Which event is fired on a text field within a form when a user tabs to it, or clicks or touches it?",
    ],
    incorrect_answer: ["blur", "hover", "enter"],
    // correct_answer: 1,
    correct_answer: "focus",
    read_more:
      "Reference javascript events\n        (https://developer.mozilla.org/en-US/docs/Web/Events)",
  },
  {
    id: 76,
    question: [
      "What is the result in the console of running this code?",
      "function logThis() {\n        console.log(this);\n        }\n        logThis();",
    ],
    incorrect_answer: ["function", "undefined", "Function.prototype"],
    // correct_answer: 4,
    correct_answer: "window",
    read_more:
      "Reference what is the javascript window\n        (https://www.w3schools.com/js/js_window.asp)",
  },
  {
    id: 77,
    question: [
      "Which class-based component is equivalent to this function component?",
      "const Greeting = ({ name }) => {\n        < h1 > Hello { name }!</ >;\n        }",
    ],
    incorrect_answer: [
      "class Greeting extends React.Component { constructor() { return <h1>Hello {this.props.name}!</h1>; } }",
      "class Greeting extends React.Component { <h>Hello {this.props.name}!</h>; } }",
      "class Greeting extends React.Component { render({ name }) { return <h1>Hello {name}!</h1>; } }",
    ],
    // correct_answer: 1,
    correct_answer:
      "class Greeting extends React.Component { render() { return <h1>Hello {this.props.name}!</h1>; } }",
    read_more: "",
  },
  {
    id: 78,
    question: [
      "Which class-based lifecycle method would be called at the same time as this effect Hook?",
      "useEffect(() => {\n        // do things\n        }, []);",
    ],
    incorrect_answer: ["componentWillUnmount", "componentDidUpdate", "render"],
    // correct_answer: 4,
    correct_answer: "componentDidMount",
    read_more:
      "Reference react lifecycle methods:\n        (https://reactjs.org/docs/react-component.html)",
  },
  {
    id: 79,
    question: [
      "What is the output of this code?",
      "var obj;\n console.log(obj)",
    ],
    incorrect_answer: ["ReferenceError: obj is not defined", "{}", "null"],
    // correct_answer: 3,
    correct_answer: "undefined",
    read_more:
      "Reference working with objects:\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
  },
  {
    id: 80,
    question: [
      "How would you use the TaxCalculator to determine the amount of tax on $50?",
      "class TaxCalculator {\n        static calculate(total) {\n        return total * 0.05;\n        }\n        }",
    ],
    incorrect_answer: [
      "calculate(50);",
      "new TaxCalculator().calculate($50)",
      "new TaxCalculator().calculate(50);",
    ],
    // correct_answer: 3,
    correct_answer: "TaxCalculator.calculate(50);",
    read_more:
      "Reference functions in javascript:\n        (https://www.w3schools.com/js/js_functions.asp)",
  },
  {
    id: 81,
    question: [
      "What is wrong with this code?",
      "const foo = {\n        bar() {\n        console.log('Hello, world!');\n        },\n        name: 'Albert',age: 26,\n        };",
    ],
    incorrect_answer: [
      "The function bar needs to be defined as a key/value pair.",
      "Trailing commas are not allowed in JavaScript.",
      "Nothing, there are no errors.",
    ],
    // correct_answer: 3,
    correct_answer: "Functions cannot be declared as properties of objects.",
    read_more:
      "Reference functions in javascript:\n        (https://www.w3schools.com/js/js_functions.asp)",
  },
  {
    id: 82,
    question: [
      "What will be logged to the console?",
      "console.log('I');\n        setTimeout(() => {\n        console.log('love');\n        }, 0);\n        console.log('Javascript!');",
    ],
    incorrect_answer: [
      "plaintextloveJavascript!",
      "The output may change with each execution of code and cannot be determined.",
      "IloveJavascript!",
    ],
    // correct_answer: 1,
    correct_answer: "plaintextIJavascript!love",
    read_more:
      "Reference - especially see the 'late timeouts' section:\n        (https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified)",
  },
  {
    id: 83,
    question: [
      " What will this code log to the console?",
      "const foo = [1, 2, 3];\n        const [n] = foo;\n        console.log(n);",
    ],
    incorrect_answer: [
      "undefined",
      "NaN",
      "Nothing--this is not proper JavaScript syntax and will throw an error.",
    ],
    // correct_answer: 1,
    correct_answer: "1",
    read_more:
      "Reference array deconstruction:\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)",
  },
  {
    id: 84,
    question: [
      "How do you remove the property name from this object?",
      "const foo = {\n        name: 'Albert',\n        };",
    ],
    incorrect_answer: [
      "delete name from foo;",
      "del foo.name;",
      "remove foo.name;",
    ],
    // correct_answer: 2,
    correct_answer: "delete foo.name;",
    read_more:
      "Reference working with objects:\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
  },
  {
    id: 85,
    question: [
      "What is the difference between the `map()` and the `forEach()` methods on the Array prototype?",
    ],
    incorrect_answer: [
      "There is no difference.",
      "The `forEach()` method returns a single output value, whereas the `map()` method performs operation on each value in the array.",
      "The `forEach()` methods returns a new array with a transformation applied on each item in the original array, whereas the `map()` method iterates through an array with no return value.",
    ],
    // correct_answer: 3,
    correct_answer:
      "The map() methods returns a new array with a transformation applied on each item in the original array, whereas the `forEach()` method iterates through an array with no return value.",
    read_more:
      "Reference map(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)",
  },
  {
    id: 86,
    question: [
      " Which concept does this code illustrate",
      "function makeAdder(x) {\n        return function (y) {\n        return x + y;};}\n        var addFive = makeAdder(5);console.log(addFive(3));",
    ],
    incorrect_answer: ["overloading", "closure", "overriding"],
    // correct_answer: 3,
    correct_answer: "currying",
    read_more: "Reference currying(https://javascript.info/currying-partials)",
  },
  {
    id: 87,
    question: ["Which tag pair is used in HTML to embed JavaScript?"],
    incorrect_answer: [
      "<js></js>",
      "<javascript></javascript>",
      "<code></code>",
    ],
    // correct_answer: 1,
    correct_answer: "<script></script>",
    read_more:
      "Reference add js to html file(https://www.w3schools.com/tags/tag_script.asp)",
  },
  {
    id: 88,
    question: [
      "If your app receives data from a third-party API, which HTTP response header must the server specify to allow exceptions to the same-origin policy?",
    ],
    incorrect_answer: ["Security-Mode", "Different-Origin", "Same-Origin"],
    // correct_answer: 2,
    correct_answer: "Access-Control-Allow-Origin",
    read_more:
      "Reference Cross-Origin Resource Sharing(https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)",
  },
  {
    id: 89,
    question: [
      "What will be logged to the console?",
      "'use strict';\n        function logThis() {\n        this.desc = 'logger';\n console.log(this);}\n        new logThis();",
    ],
    incorrect_answer: ["window", "undefined", "function"],
    // correct_answer: 4,
    correct_answer: "{desc: 'logger'}",
    read_more:
      "Reference strict in javascript classes(https://www.w3schools.com/js/js_strict.asp)",
  },
  {
    id: 90,
    question: [
      " What is the output of this code?",
      "let rainForests = ['Amazon', 'Borneo','Cerrado', 'Congo'];\n        rainForests.splice(0, 2);\n console.log(rainForests);",
    ],
    incorrect_answer: [
      '["Amazon","Borneo","Cerrado","Congo"]',
      '["Congo"]',
      '["Amazon","Borneo"]',
    ],
    // correct_answer: 2,
    correct_answer: '["Cerrado", "Congo"]',
    read_more:
      "Reference array methods(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)",
  },
  {
    id: 91,
    question: [
      "Which missing line would allow you to create five variables(one,two,three,four,five) that correspond to their numerical values (1,2,3,4,5)?",
      "const numbers = [1, 2, 3, 4, 5];\n //MISSING LINE",
    ],
    incorrect_answer: [
      "const {one,two,three,four,five}=numbers",
      "const [one,two,three,four,five]=[numbers",
      "const {one,two,three,four,five}={numbers}",
    ],
    // correct_answer: 1,
    correct_answer: "const [one,two,three,four,five]=numbers",
    read_more:
      "Reference array destructuring(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)",
  },
  {
    id: 92,
    question: [
      "What will this code print?",
      "const obj = {a: 1, b: 2, c: 3,};\n    const obj2 = {...obj, a: 0,};\n    console.log(obj2.a, obj2.b);",
    ],
    incorrect_answer: [
      "Nothing, it will throw an error",
      "undefined 2",
      "2 undefined",
    ],
    // correct_answer: 2,
    correct_answer: "0 2",
    read_more:
      "Reference spread syntax es6(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)",
  },
  {
    id: 93,
    question: [
      " Which line could you add to this code to print 'jaguar' to the console?",
      "let animals = ['jaguar', 'eagle'];\n  //Missing Line\n  console.log(animals.pop()); //Prints jaguar",
    ],
    incorrect_answer: [
      "animals.filter(e => e === 'jaguar');",
      "animals.shift();",
      "animals.pop();",
    ],
    // correct_answer: 2,
    correct_answer: "animals.reverse();",
    read_more:
      "Reference Javascript Array Reverse(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)",
  },
  {
    id: 94,
    question: [
      "What line is missing from this code?",
      "//Missing Line\n        for (var i = 0; i < vowels.length; i++) {\n  console.log(vowels[i]);\n  //Each letter printed on a separate line as follows;//a//e//i//o//u\n}",
    ],
    incorrect_answer: [
      "let vowels = 'aeiou'.toArray();",
      "let vowels = Array.of('aeiou');",
      "let vowels = {'a', 'e', 'i', 'o', 'u'};",
    ],
    // correct_answer: 4,
    correct_answer: "let vowels = 'aeiou';",
    read_more:
      "Reference working with arrays(https://www.w3schools.com/js/js_arrays.asp)",
  },
  {
    id: 95,
    question: [
      "What will be logged to the console?",
      "const x = 6 % 2;\n  const y = x ? 'One' : 'Two';\n  console.log(y);",
    ],
    incorrect_answer: ["undefined", "One", "true"],
    // correct_answer: 4,
    correct_answer: "Two",
    read_more:
      "Reference ternary operator js(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)",
  },
  {
    id: 96,
    question: [
      "How would you access the word It from this multidimensional array?",
      "let matrix = [\n  ['You','Can'],\n ['Do','It'],\n ['!','!','!']\n  ];",
    ],
    incorrect_answer: ["matrix[1[2]]", "matrix[1,2]", "matrix[1][2]"],
    // correct_answer: 2,
    correct_answer: "matrix[1][1]",
    read_more: "",
  },
  {
    id: 97,
    question: [
      "What does this code do?",
      "const animals = ['Rabbit', 'Dog', 'Cat'];\n  animals.unshift('Lizard');",
    ],
    incorrect_answer: [
      " It adds 'Lizard' to the end of the animals array.",
      "It replaces 'Rabbit' with 'Lizard' in the animals array.",
      "It replaces 'Cat' with 'Lizard' in the animals array.",
    ],
    // correct_answer: 1,
    correct_answer: "It adds 'Lizard' to the start of the animals array.",
    read_more:
      "Reference working with arrays(https://www.w3schools.com/js/js_arrays.asp)",
  },
  {
    id: 98,
    question: [
      "What is the output of this code?",
      "let x = 6 + 3 + '3';\n  console.log(x);",
    ],
    incorrect_answer: ["12", "66", "633"],
    // correct_answer: 1,
    correct_answer: "93",
    read_more:
      "Reference type coercion(https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)",
  },
  {
    id: 99,
    question: [
      "Which statement can take a single expression as input and then look through a number of incorrect_answer until one that matches that value is found?",
    ],
    incorrect_answer: ["else", "when", "if"],
    // correct_answer: 4,
    correct_answer: "switch",
    read_more:
      "Reference switch(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)",
  },
  {
    id: 100,
    question: [
      "Which statement prints 'roar' to the console?",
      "var sound = 'grunt';\n        var bear = { sound: 'roar' };\n        function roar() {\n   console.log(this.sound); \n        }",
    ],
    incorrect_answer: ["bear.bind(roar);", "roar.bind(bear);", "bear[roar]();"],
    // correct_answer: 3,
    correct_answer: "roar.apply(bear);",
    read_more:
      "Reference Apply:\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)\n        Reference this:\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)\n        Reference bind:\n        (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)",
  },
  {
    id: 101,
    question: [
      "Which choice is a valid example of an arrow function, assuming c is defined in the outer scope?",
    ],
    incorrect_answer: ["a, b => { return c; }", "a, b => c", "{ a, b } => c"],
    // correct_answer: 4,
    correct_answer: "(a,b) => c",
    read_more:
      "Reference arrow functions:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)",
  },
  {
    id: 102,
    question: [
      "Which statement correctly imports this code from some-file.js?",
      "export const printMe = (str) => console.log(str);",
    ],
    incorrect_answer: [
      "import printMe from './some-file';",
      "import default as printMe from './some-file';",
      "const printMe = import './some-file';",
    ],
    // correct_answer: 2,
    correct_answer: "import { printMe } from './some-file'",
    read_more:
      "Reference importing libraries in javascript:\n   (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)",
  },
  {
    id: 103,
    question: [
      "What will be the output of this code?",
      "const arr1 = [2, 4, 6];\n  const arr2 = [3, 5, 7];\n  console.log([...arr1, ...arr2]);",
    ],
    incorrect_answer: [
      "[3,5,7,2,4,6]",
      "[3, 5, 7, 2, 4, 6]",
      "[[2, 4, 6], [3, 5, 7]]",
    ],
    // correct_answer: 4,
    correct_answer: "[2, 4, 6, 3, 5, 7]",
    read_more:
      "Reference spread syntax:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)",
  },
  {
    id: 104,
    question: [
      "Which method call is chained to handle a successful response returned by `fetch()`?",
    ],
    incorrect_answer: ["done()", "finally()", "catch()"],
    // correct_answer: 2,
    correct_answer: "then()",
    read_more:
      "Reference fetch:\n  (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)",
  },
  {
    id: 105,
    question: ["Which choice is not an array method?"],
    incorrect_answer: ["array.slice()", "array.shift()", "array.push()"],
    // correct_answer: 4,
    correct_answer: "array.replace()",
    read_more:
      "Reference working with arrays:\n  (https://www.w3schools.com/js/js_arrays.asp)",
  },
  {
    id: 106,
    question: [
      "Which JavaScript loop ensures that at least a singular iteration will happen?",
    ],
    incorrect_answer: ["forEach", "while", "for"],
    // correct_answer: 1,
    correct_answer: "do…while",
    read_more:
      "Reference loops in js:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)",
  },
  {
    id: 107,
    question: [
      "What will be logged to the console?",
      "console.log(typeof 'blueberry');",
    ],
    incorrect_answer: ["array", "Boolean", "object"],
    // correct_answer: 1,
    correct_answer: "string",
    read_more:
      "Reference what is typeof\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)",
  },
  {
    id: 108,
    question: [
      "What is the output that is printed when the div containing the text 'Click Here' is clicked?",
      "//HTML Markup\n  <div id='A'>\n  <div id='B'>\n  <div id='C'>Click Here</div>\n  </div>\n  </div>\n     //JavaScript\n  document.querySelectorAll('div')\n  .forEach((e) => {\n  e.onclick = (e) => console.log(e.currentTarget.id);\n  });",
    ],
    incorrect_answer: ["A", "C", "A B C"],
    // correct_answer: 1,
    correct_answer: "C B A",
    read_more:
      "Reference query selector\n  (https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)",
  },
  {
    id: 109,
    question: [
      " What will this code log to the console?",
      "const myNumbers = [1, 2, 3, 4, 5, 6, 7];\n  const myFunction = (arr) => {\n        return arr.map((x) => x + 3).filter((x) => x < 7);\n  };\n  console.log(myFunction(myNumbers));",
    ],
    incorrect_answer: ["[4,5,6,7,8,9,10", "[4,5,6,7]", "[1,2,3,4,5,6]"],
    // correct_answer: 4,
    correct_answer: "[4,5,6]",
    read_more:
      "Reference functions in javascript:\n  :\n  (https://www.w3schools.com/js/js_functions.asp) ",
  },
  {
    id: 110,
    question: [
      "What does this code print to the console?",
      "let rainForestAcres = 10;\n let animals = 0;\n while (rainForestAcres < 13 || animals <= 2) {\n        rainForestAcres++;animals += 2;\n }\n console.log(animals);",
    ],
    incorrect_answer: ["2", "4", "8"],
    // correct_answer: 3,
    correct_answer: "6",
    read_more:
      "Reference MDN JavaScript Looping code:\n  (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)",
  },
  {
    id: 111,
    question: [
      "Which snippet could you add to this code to print 'YOU GOT THIS' to the console?",
      "let cipherText = [...'YZOGUT QGMORTZ MTRHTILS'];\n  let plainText = '';\n  /* Missing Snippet */\n  console.log(plainText);\n   //Prints 'YOU GOT THIS'",
    ],
    incorrect_answer: [
      "for (let key of cipherText.keys()) {plainText += key % 2 === 0 ? key : ' ';}",
      "for (let [index, value] of cipherText.entries()) {plainText += index % 2 !== 0 ? value : '';}",
      "for (let value of cipherText) {plainText += value; }",
    ],
    // correct_answer: 3,
    correct_answer:
      "for (let [index, value] of cipherText.entries()) {plainText += index % 2 === 0 ? value : '';}",
    read_more:
      "Reference MDN JavaScript Destructuring:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)Reference MDN JavaScript Array entries]:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)Reference MDN JavaScript Remainder/Modulo]:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)",
  },
  {
    id: 112,
    question: [
      "Which Pokemon will be logged to the console?",
      "var pokedex = ['Snorlax', 'Jigglypuff', 'Charmander', 'Squirtle'];\n  pokedex.pop();\n  console.log(pokedex.pop());",
    ],
    incorrect_answer: ["Jigglypuff", "Snorlax", "Squirtle"],
    // correct_answer: 1,
    correct_answer: "Charmander",
    read_more:
      "Reference Array.pop:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)",
  },
  {
    id: 113,
    question: [
      "Which statement can be used to select the element from the DOM containing the text 'The LinkedIn Learning library has great JavaScript courses' from this markup?",
      "<h1 class='content'>\n  LinkedIn Learning\n  </h1>\n  <div class='content'>\n  <span class='content'>\n  The LinkedIn Learning library has great JavaScript courses!\n  </span>\n  </div>",
    ],
    incorrect_answer: [
      "document.querySelector('div.content')",
      "document.querySelector('.content')",
      "document.querySelector('div.span')",
    ],
    // correct_answer: 2,
    correct_answer: "document.querySelector('span.content')",
    read_more: "",
  },
  {
    id: 114,
    question: [" Which value is not falsey?"],
    incorrect_answer: ["undefined", "0", "null"],
    // correct_answer: 1,
    correct_answer: "[]",
    read_more:
      "Reference Falsy]:\n  (https://developer.mozilla.org/en-US/docs/Glossary/Falsy)",
  },
  {
    id: 115,
    question: [
      "What line of code causes this code segment to throw an error?",
      "const lion = 1;\n  let tiger = 2;\n        var bear;\n     ++lion;\n        bear += lion + tiger;\n        tiger++;",
    ],
    incorrect_answer: [
      "line 6, because the += operator cannot be used with the undefined variable bear",
      "line 5, because the prefix (++) operator does not exist in JavaScript",
      "line 3, because the variable bear is left undefined",
    ],
    // correct_answer: 1,
    correct_answer: "line 5, because lion cannot be reassigned a value",
    read_more:
      "Reference const in js:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)Reference TypeError: invalid assignment to const 'x':\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment)",
  },
  {
    id: 116,
    question: [
      " What will be the value of `result` after running this code?",
      "const person = { name: 'Dave', age: 40, hairColor: 'blue' };\n  const result = Object.keys(person).map((x) => x.toUpperCase());",
    ],
    incorrect_answer: [
      "It will throw a TypeError.",
      "['Name', 'Age', 'HairColor']",
      "['DAVE', 40, 'BLUE']",
    ],
    // correct_answer: 4,
    correct_answer: "['NAME', 'AGE', 'HAIRCOLOR']",
    read_more:
      "Reference Object.keys():\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)Reference Array.prototype.map():\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)Reference String.prototype.toUpperCase():\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)",
  },
  {
    id: 117,
    question: [
      "Which snippet could you insert to this code to print 'swim' to the console?",
      "let animals = ['eagle', 'osprey', 'salmon'];\n  let key = animal => animal === 'salmon';\n  if(/* Insert Snippet Here */){\n  console.log('swim');\n  }",
    ],
    incorrect_answer: [
      "animals.every(key)",
      "animals.some(key).length === 1",
      "animals.filter(key) === true",
    ],
    // correct_answer: 4,
    correct_answer: "animals.some(key)",
    read_more:
      "Reference Array.prototype.some(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)",
  },
  {
    id: 118,
    question: [
      "What is the output of this code?",
      "class RainForest {\n  static minimumRainFall = 60;\n  }\n  let congo = new RainForest();\n  RainForest.minimumRainFall = 80;\n  console.log(congo.minimumRainFall);",
    ],
    incorrect_answer: [
      "None of these answers, as static is not a feature in Javascript.",
      "60",
      "80",
    ],
    // correct_answer: 1,
    correct_answer: "undefined",
    read_more:
      "Reference Classes static:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)",
  },
  {
    id: 119,
    question: [
      "How can you attempt to access the property `a.b` on `obj` without throwing an error if a is undefined?",
      "let obj = {};",
    ],
    incorrect_answer: ["obj?.a.b", "obj[a][b]", "obj.?a.?b"],
    // correct_answer: 2,
    correct_answer: "obj.a?.b",
    read_more:
      "Reference Optional chaining (?.):\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)",
  },
  {
    id: 120,
    question: [
      "What happens when you run this code?",
      "if (true) {\n        var x = 5;\n  const y = 6;\n  let z = 7;\n  }\n  console.log(x + y + z);",
    ],
    incorrect_answer: [
      "It will throw a ReferenceError about 'x'",
      "It will print '18'.",
      "It will print 'undefined'.",
    ],
    // correct_answer: 4,
    correct_answer: "It will throw a ReferenceError about 'y'.",
    read_more:
      "Reference let statement:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)",
  },
  {
    id: 121,
    question: [
      "What does this code print to the console?",
      "const x = [1, 2];\n  const y = [5, 7];\n  const z = [...x, ...y];\n  console.log(z);",
    ],
    incorrect_answer: ["[[1, 2], [5, 7]]", "[2,7]", "[2,1,7,5]"],
    // correct_answer: 1,
    correct_answer: "[1,2,5,7]",
    read_more:
      "Reference spread syntax (...):\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)",
  },
  {
    id: 122,
    question: [
      "Given this code, which statement will evaluate to false?",
      "const a = { x: 1 };\n  const b = { x: 1 };",
    ],
    incorrect_answer: ["a['x'] === b['x']", "a != b", "a.x === b.x"],
    // correct_answer: 3,
    correct_answer: "a === b",
    read_more:
      "Reference:\n  (http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)",
  },
  {
    id: 123,
    question: [
      "What will this code log to the console?",
      "console.log(typeof 41.1);",
    ],
    incorrect_answer: [
      "Nothing. It resuults in a ReferenceError.",
      "decimal",
      "float",
    ],
    // correct_answer: 4,
    correct_answer: "number",
    read_more:
      "Reference:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#basic_usage)",
  },
  {
    id: 124,
    question: [
      "What is the output of this code?",
      "let scores = [];\n  scores.push(1, 2);\n   scores.pop();\n  scores.push(3, 4);\n  scores.pop();\n  score = scores.reduce((a, b) => a + b);\n  console.log(score);",
    ],
    incorrect_answer: ["3", "6", "7"],
    // correct_answer: 2,
    correct_answer: "4",
    read_more:
      "Reference:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)Reference:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)Reference:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)",
  },
  {
    id: 125,
    question: [
      "What does this code print to the console?",
      "let bear = {sound: 'roar',\n        roar() {\n  console.log(this.sound);\n  },\n  };\n        bear.sound = 'grunt';\n  let bearSound = bear.roar;\n        bearSound();",
    ],
    incorrect_answer: ["Nothing is printed to the console.", "grunt", "roar"],
    // correct_answer: 3,
    correct_answer: "undefined",
    read_more:
      "Reference:\n  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
  },
  {
    id: 126,
    question: [
      " What is the output of this code?",
      "var cat = { name: 'Athena' };\n        function swap(feline) {\n        feline.name = 'Wild';\n        feline = { name: 'Tabby' };\n  }\n  swap(cat);\n  console.log(cat.name);",
    ],
    incorrect_answer: ["undefined", "Tabby", "Athena"],
    // correct_answer: 2,
    correct_answer: "Wild",
    read_more: "",
  },
  {
    id: 127,
    question: [
      "What will this code output to the log?",
      "var thing;\n  let func = (str = 'no arg') => {\n  console.log(str);\n  };\n        func(thing);\n        func(null);",
    ],
    incorrect_answer: ["null no arg", "no arg no arg", "null null"],
    // correct_answer: 4,
    correct_answer: "no arg null",
    read_more: "",
  },
  {
    id: 128,
    question: [
      " What will this code print to the console?",
      "const myFunc = () => {\n  const a = 2;\n        return () => console.log('a is ' + a);\n  };\n  const a = 1;\n  const test = myFunc();\n        test();",
    ],
    incorrect_answer: ["a is 1", "a is undefined", "It won't print anything."],
    // correct_answer: 4,
    correct_answer: "a is 2",
    read_more: "",
  },
  {
    id: 129,
    question: [
      "What will this code print to the console?",
      "const myFunc = (num1, num2 = 2, num3 = 2) => {\n        return num1 + num2 + num3;\n  };\n  let values = [1, 5];\n  const test = myFunc(2, ...values);\n  console.log(test);",
    ],
    incorrect_answer: ["6", "2", "12"],
    // correct_answer: 1,
    correct_answer: "8",
    read_more: "",
  },
  {
    id: 130,
    question: [
      "Which code would you use to access the Irish flag?",
      "var flagsJSON ='{\n'countries' : [\n'+'{\n'country':'Ireland' , 'flag':'🇮🇪' \n},'+'{ \n'country':'Serbia' , 'flag':'🇷🇸'\n},'+'{\n'country':'Peru' , 'flag':'🇵🇪' \n}\n]\n }';\nvar flagDatabase = JSON.parse(flagsJSON);",
    ],
    incorrect_answer: [
      "flagDatabase.countries[1].flag",
      "flagDatabase[1].flag",
      "flagsJSON.countries[0].flag",
    ],
    // correct_answer: 2,
    correct_answer: "flagDatabase.countries[0].flag",
    read_more: "",
  },
  {
    id: 131,
    question: [
      "Which snippet allows the acresOfRainForest variable to increase?",
      "let conservation = true;\n        let deforestation = false;\n        let acresOfRainForest = 100;\n        if (/* Snipped goes here */){\n        ++acresOfRainForest;\n        }",
    ],
    incorrect_answer: [
      "!deforestation && !conservation",
      "!conservation || deforestation",
      "deforestation && conservation || deforestation",
    ],
    // correct_answer: 1,
    correct_answer: "conservation && !deforestation",
    read_more: "",
  },
  // {
  //   id: 132,
  //   question: ["", ""],
  //   incorrect_answer: ["", "", "", ""],
  //   correct_answer: 3,
  //   read_more: "",
  // },
];

export default questions;

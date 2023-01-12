# Choices.js Benchmark

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />

__Global library rating :__ 3/5

- __Easy to use :__ 4/5

- __Performance :__ 2/5

- __Scalability on other medium (React, Vue, etc...) :__ 3/5

```npm install choices.js```

Moved public folder from node_modules/choices.js to root folder so I can use it in a static HTML file without webpack or anything
In the HTML file : `<link src="public/assets/scripts/choices.min.js">` to import the minified script of the library to the index.


To initialize a Choices.js input or select : 

```js

// script.js
const select = new Choices(element, options)

```

element: __text input or select or select multiple__
- HTMLElement => `document.querySelector('.element'), document.getElementById('element1')`
- Reference => `'.element', '[data-trigger]'`
- JQuery Element => `$('.element')[0]`

options: https://github.com/Choices-js/Choices#configuration-options

Useful options :
- `duplicateItemsAllowed` [Boolean, __Only for text inputs__] : default true : If false, make items unique
- `maxItemCount` [Integer] - self explainatory
- `editItems` [Boolean, __Only for text inputs__] : default false : An item's value can be edited by pressing the backspace.
- `paste` [Boolean] - default true : forbids pasting items in the input
- `removeItemButton` [Boolean] - default false : Adds a button to remove the item
- `addItemFilter` [String | RegExp | Function, __Only for text inputs__] : A RegExp or string (will be passed to RegExp constructor internally) or filter function that will need to return true for a user to successfully add an item.
- `prependValue` [String] : Prepend a value to each item added/selected
- `appendValue` [String] : Append a value to each item added/selected

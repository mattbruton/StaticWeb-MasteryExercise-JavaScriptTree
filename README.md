# Static Web Mastery Exercise - JavaScript Tree

Mastery Exercise for the Static Web milestone during Evening Cohort 3. The user gives value to the two inputs and a tree is generated in the console based on those values.

==============================

- Viewing/Downloading Project
    - [To View Hosted Project](#to-view-hosted-project)
    - [Installation](#installation)
    - [To Run](#torun)
- Specifications and Project Information
    - [Languages] (#languages)
    - [Tools] (#tools)
    - [Specifications] (#specifications)

==============================

## Viewing/Downloading Project

### To View Hosted Project

[Static Web Mastery Exercise - JavaScript Tree](https://mb-nss-exercises.firebaseapp.com/javascript-tree/index.html)

### Installation

Clone the repository from GitHub:

`git clone https://github.com/mattbruton/StaticWeb-MasteryExercise-JavaScriptTree.git`

Navigate to the project from the directory it was cloned into:

`cd StaticWeb-MasteryExercise-JavaScriptTree/`

### To Run

If you need a command line http server, to install http-server globally:

`npm install http-server -g`

Then:

`http-server` or `http-server -p XXXX` (the X's represent the port of your choice)

You should now be able to open your browser and type `localhost:8080` to view the project.

## Specs and Project Information

### Languages

1. JavaScript
1. HTML

### Tools

1. [Git](https://git-scm.com/)
1. [Atom](https://atom.io/)
1. [NPM http-server](https://www.npmjs.com/package/http-server)

### Specifications

==============================

Create a `tree` function that should build a pine tree out of a character in the browser console. It accepts a single object as an argument. The object should have two key/value pairs.

1. A key that specifies the height of the pine tree.
1. The value for the height of the tree should be from user input in a `<input type="text">` field in the DOM.
1. A key that specifies which character to use to build the pine tree.
1. The character to use should be from user input in a `<input type="text">` field in the DOM.

Once the user enters in a number, and a character, the user can either then just press the enter key _(as long as the cursor is in one of the input fields)_, or click a button that is labeled "Grow your tree" and the tree should be shown in the console.

If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

<div>
    <input type="text" style="width: 40%" placeholder="How tall should the tree be?">
</div>
<div>
    <input type="text" style="width: 40%" placeholder="Which character should be used?">
</div>

<button>Grow your tree</button>

##### Example

Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

```
      *
     ***
    *****
   *******
  *********
 ***********
*************
```

==============================
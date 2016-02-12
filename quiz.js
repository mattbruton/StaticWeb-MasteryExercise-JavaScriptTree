// create 'tree' function, single object as an argument with two key/value pairs.
var treeObject = {
  height: 10,
  character: "?"
};

var spacing = " ";
var treeString;

// creates string that is equal to input + (input - 1) for assignment formatting 
var makeTreeString = function(){
  var treeString = "";
  for (i = 0; i <= treeObject.height; i++) {
    // the \n breaks the characters into a new line in console
    var characterGen = treeObject.character.repeat(i) + treeObject.character.repeat(i) + "\n";
    characterGen = characterGen.substr(1);
    //spacing for tree in console.log, should add the inverse of space that the for loop increments
    //the charater width of tree to the beginning of each line.
    treeString += spacing.repeat(0) + characterGen +spacing.repeat(treeObject.height - i);
  }
  console.log(treeString);
}

//call function
makeTreeString();


//   take key provided by user input


//   take height from user input for tree height 

//   if either field is empty, display an alert stating all fields must be completed.


// create "Grow your tree button" that appends value of tree function to DOM.

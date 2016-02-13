//single object with two key/value pairs.
var treeObject = {
  height: "",
  character: ""
};

//stores user input as values for object
function objectValSelection() {
    treeObject.height = document.getElementById('tree-height').value;
    treeObject.character = document.getElementById('character-select').value;
}

//variables needed for string creation
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
    treeString += spacing.repeat(0) + characterGen + spacing.repeat(treeObject.height - i);
  }
  console.log(treeString);
};


//create tree in console when pressing button
document.getElementById("treeButton").onclick = function() {
  makeTreeString();
};

//   take key provided by user input

//   take height from user input for tree height 

//   if either field is empty, display an alert stating all fields must be completed.
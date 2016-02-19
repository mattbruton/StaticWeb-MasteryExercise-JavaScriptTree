//single object with two key/value pairs.
var treeObject = {
  height: "",
  character: ""
};
 
//stores user input as values for object

document.getElementById("tree-height").onkeyup = function() {
  treeObject.height = document.getElementById("tree-height").value;
}

document.getElementById("character-select").onkeyup = function() {
  treeObject.character = document.getElementById("character-select").value;
}

//variables needed for string creation

var spacing = " ";

// function to create string displayed in console. 

var makeTreeString = function(myObj){
  var treeString = "";
  for (i = 0; i <= myObj.height; i++) {

    // creates string that is equal to input + (input - 1) for assignment formatting 
    // the \n breaks the characters into a new line in console

    var characterGen = myObj.character.repeat(i) + myObj.character.repeat(i) + "\n";
    characterGen = characterGen.substr(1);

    //spacing for tree in console.log, should add the inverse of space that the for loop increments
    //the charater width of tree to the beginning of each line.
    
    treeString += spacing.repeat(0) + characterGen + spacing.repeat(myObj.height - i);
  };
  console.log(treeString);
};

//create tree in console when pressing button
document.getElementById("treePlace").onsubmit = function() {
  return false;
}

document.getElementById("treeButton").onclick = function() {

  // if either field is empty, display an alert stating all fields must be completed.

  if (treeObject.height.length < 1) {
    alert("Please enter a height for your tree.");
  } else if (treeObject.character.length != 1 ) {
    alert("Please enter a SINGLE character to use for your tree's creation");
  } else {
    makeTreeString(treeObject);
  }
};
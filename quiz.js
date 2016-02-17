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
  };
  console.log(treeString);
};

//create tree in console when pressing button

document.getElementById("treeButton").onclick = function() {

  // if either field is empty, display an alert stating all fields must be completed.

  if (treeObject.height.length < 1) {
    alert("Please enter a height for your tree.");
  } 
  // Wanted to do a single if statement using || to test both at the same time
  // but the character.length would pop up the alert window even if the 
  // conditions were met. Looking into why, but for now, the work around is
  // two 'if' statements.

  if (treeObject.character.length < 1) {
    alert("Please enter a character to use for your tree's creation");
  }
  makeTreeString();
};